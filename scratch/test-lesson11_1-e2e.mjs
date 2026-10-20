import { CDPClient, getTargetPageWsUrl } from './cdp.mjs';
import fs from 'fs';

async function main() {
  console.log('Connecting to browser via CDP...');
  const pageWsUrl = await getTargetPageWsUrl(9222);
  const client = new CDPClient(pageWsUrl);
  await client.connect();

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

  // Expand Chapter 11 in accordion if needed
  console.log('Expanding Chapter 11 in accordion...');
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const ch11Btn = buttons.find(b => b.textContent && b.textContent.includes('Chapter 11'));
        if (ch11Btn) {
          ch11Btn.click();
          return 'Clicked Chapter 11 accordion button';
        }
        return 'Chapter 11 accordion button not found';
      })()
    `,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 800));

  // Select Lesson 11.1 in navigation
  console.log('Selecting Lesson 11.1 in navigation...');
  const selectLessonRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const lessonBtn = buttons.find(b => b.textContent && (b.textContent.includes("Prototypes vs. Exemplars") || b.textContent.includes('11.1')));
        if (lessonBtn) {
          lessonBtn.click();
          return { clicked: true, text: lessonBtn.textContent };
        }
        return { clicked: false, availableButtons: buttons.map(b => b.textContent) };
      })()
    `,
    returnByValue: true
  });
  console.log('Lesson 11.1 selection result:', JSON.stringify(selectLessonRes.result.value));

  await new Promise(r => setTimeout(r, 1500));

  // Test interactive prediction
  console.log('Selecting Hypothesis in Prediction Interaction...');
  const clickPredictionRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const radio = document.querySelector('input[type="radio"][value="opt-exemplar-context-density"]');
        if (radio) {
          radio.click();
          const buttons = Array.from(document.querySelectorAll('button'));
          const lockBtn = buttons.find(b => b.textContent && (b.textContent.includes('Lock In Prediction') || b.textContent.includes('Reveal')));
          if (lockBtn) {
            lockBtn.click();
            return { success: true, clickedLock: true };
          }
          return { success: true, clickedLock: false };
        }
        return { success: false };
      })()
    `,
    returnByValue: true
  });
  console.log('Prediction result:', JSON.stringify(clickPredictionRes.result.value));

  await new Promise(r => setTimeout(r, 1500));

  // Capture Screenshot
  console.log('Capturing full screenshot...');
  const screenshotRes = await client.send('Page.captureScreenshot', {
    format: 'png',
    quality: 90
  });

  const buffer = Buffer.from(screenshotRes.data, 'base64');
  const artifactPath = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96/screenshot_lesson11_1.png';
  fs.writeFileSync(artifactPath, buffer);
  console.log(`Saved screenshot to ${artifactPath}`);

  await client.close();
  console.log('Done.');
}

main().catch(console.error);
