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

  // Expand Chapter 10 in accordion if needed
  console.log('Expanding Chapter 10 in accordion...');
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const ch10Btn = buttons.find(b => b.textContent && b.textContent.includes('Chapter 10'));
        if (ch10Btn) {
          ch10Btn.click();
          return 'Clicked Chapter 10 accordion button';
        }
        return 'Chapter 10 accordion button not found';
      })()
    `,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 800));

  // Select Lesson 10.2 in navigation
  console.log('Selecting Lesson 10.2 in navigation...');
  const selectLessonRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const lessonBtn = buttons.find(b => b.textContent && (b.textContent.includes("Spatial and Diagrammatic Reasoning") || b.textContent.includes('10.2')));
        if (lessonBtn) {
          lessonBtn.click();
          return { clicked: true, text: lessonBtn.textContent };
        }
        return { clicked: false, availableButtons: buttons.map(b => b.textContent) };
      })()
    `,
    returnByValue: true
  });
  console.log('Lesson 10.2 selection result:', JSON.stringify(selectLessonRes.result.value));

  await new Promise(r => setTimeout(r, 1500));

  // Test interactive prediction
  console.log('Selecting Hypothesis in Prediction Interaction...');
  const clickPredictionRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const radio = document.querySelector('input[type="radio"][value="opt-diagrammatic-computational-advantage"]');
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
  const artifactPath = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96/screenshot_lesson10_2.png';
  fs.writeFileSync(artifactPath, buffer);
  console.log(`Saved screenshot to ${artifactPath}`);

  await client.close();
  console.log('Done.');
}

main().catch(console.error);
