import { CDPClient, getTargetPageWsUrl } from './cdp.mjs';
import fs from 'fs';

async function main() {
  console.log('Connecting to browser via CDP...');
  const pageWsUrl = await getTargetPageWsUrl(9222);
  const client = new CDPClient(pageWsUrl);
  await client.init();

  console.log('Enabling Page & Runtime...');
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  // Set viewport to desktop 1440x900
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  console.log('Navigating to root...');
  await client.send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  // Select Lesson 7.1 in sidebar
  console.log('Selecting Lesson 7.1 in navigation...');
  const selectLessonRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const lessonBtn = buttons.find(b => b.textContent && b.textContent.includes('Proactive and Retroactive Interference'));
        if (lessonBtn) {
          lessonBtn.click();
          return { clicked: true, text: lessonBtn.textContent };
        }
        return { clicked: false, availableButtons: buttons.map(b => b.textContent) };
      })()
    `,
    returnByValue: true
  });
  console.log('Lesson 7.1 selection result:', JSON.stringify(selectLessonRes.result.value));

  await new Promise(r => setTimeout(r, 1500));

  // Test interactive prediction
  console.log('Selecting Hypothesis B in Prediction Interaction...');
  const clickPredictionRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const optionB = buttons.find(b => b.textContent && b.textContent.includes('Retroactive Interference & Cue Overload'));
        if (optionB) {
          optionB.click();
          return { clicked: true, text: optionB.textContent };
        }
        return { clicked: false };
      })()
    `,
    returnByValue: true
  });
  console.log('Prediction click result:', JSON.stringify(clickPredictionRes.result.value));

  await new Promise(r => setTimeout(r, 1000));

  // Ask AI Tutor a grounded Lesson 7.1 inquiry
  console.log('Querying AI Tutor for McGeoch vs Decay...');
  const tutorQueryRes = await client.send('Runtime.evaluate', {
    expression: `
      (async () => {
        const input = document.querySelector('input[aria-label="Ask AI Tutor"]');
        if (!input) return { error: 'input not found' };
        
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(input, 'What did McGeoch and Underwood discover about forgetting vs trace decay?');
        input.dispatchEvent(new Event('input', { bubbles: true }));

        const sendBtn = Array.from(document.querySelectorAll('button')).find(b => b.title === 'Send query' || b.getAttribute('aria-label') === 'Send query');
        if (sendBtn) {
          sendBtn.click();
          return { submitted: true };
        }
        return { error: 'send button not found' };
      })()
    `,
    awaitPromise: true,
    returnByValue: true
  });
  console.log('AI Tutor query result:', JSON.stringify(tutorQueryRes.result.value));

  // Wait for tutor response
  await new Promise(r => setTimeout(r, 3000));

  // Capture screenshot
  console.log('Capturing screenshot...');
  const screenshotRes = await client.send('Page.captureScreenshot', { format: 'png' });
  const buffer = Buffer.from(screenshotRes.data, 'base64');
  fs.writeFileSync('/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96/screenshot_lesson7_1.png', buffer);
  console.log('Saved screenshot to screenshot_lesson7_1.png');

  // Verify page state
  const stateCheck = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        return {
          h1: document.querySelector('h1')?.textContent,
          badge: document.querySelector('.badge')?.textContent || document.querySelector('[class*="badge"]')?.textContent,
          hasTutorResponse: Array.from(document.querySelectorAll('h3, h4, strong')).some(el => el.textContent.includes('McGeoch')),
          errorLogs: window.errors || []
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Final page state verification:', JSON.stringify(stateCheck.result.value));

  client.close();
}

main().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
