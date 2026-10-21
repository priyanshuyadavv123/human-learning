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

  // Expand Chapter 20 in accordion if needed
  console.log('Expanding Chapter 20 in accordion...');
  const ch20Res = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const ch20Btn = buttons.find(b => b.textContent && b.textContent.includes('Chapter 20'));
        if (ch20Btn) {
          ch20Btn.click();
          return 'Clicked Chapter 20 accordion button';
        }
        return 'Chapter 20 accordion button not found';
      })()
    `,
    returnByValue: true
  });
  console.log('Accordion expansion result:', ch20Res.result.value);
  await new Promise(r => setTimeout(r, 1000));

  // Select Lesson 20.1 in navigation
  console.log('Selecting Lesson 20.1 in navigation...');
  const selectLessonRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const lessonBtn = buttons.find(b => b.textContent && (b.textContent.includes("Reward Prediction Errors") || b.textContent.includes('20.1')));
        if (lessonBtn) {
          lessonBtn.click();
          return 'Clicked Lesson 20.1 button: ' + lessonBtn.textContent;
        }
        return 'Lesson 20.1 button not found among ' + buttons.length + ' buttons';
      })()
    `,
    returnByValue: true
  });
  console.log('Lesson button select:', selectLessonRes.result.value);
  await new Promise(r => setTimeout(r, 1500));

  // Verify Heading & Content
  const contentVerification = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const h1 = document.querySelector('h1')?.textContent || '';
        const badges = Array.from(document.querySelectorAll('span, p')).map(e => e.textContent).filter(t => t.includes('Schultz') || t.includes('Prediction Error') || t.includes('20.1') || t.includes('Temporal Difference') || t.includes('Dopamine'));
        const tabs = Array.from(document.querySelectorAll('button')).map(b => b.textContent).filter(t => t.includes('Wolfram Schultz') || t.includes('Temporal Difference') || t.includes('Salamone & Niv'));
        return {
          h1,
          hasBadgeText: badges.length > 0,
          tabCount: tabs.length,
          tabs
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Content Verification:', JSON.stringify(contentVerification.result.value, null, 2));

  // Capture full screenshot
  console.log('Capturing full page screenshot...');
  const screenshotRes = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false
  });

  const artifactPath = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96/screenshot_lesson20_1.png';
  fs.writeFileSync(artifactPath, Buffer.from(screenshotRes.data, 'base64'));
  console.log(`Screenshot saved successfully to ${artifactPath}`);

  await client.close();
}

main().catch(err => {
  console.error('Fatal error in CDP script:', err);
  process.exit(1);
});
