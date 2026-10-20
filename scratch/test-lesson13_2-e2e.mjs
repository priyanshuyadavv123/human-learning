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

  // Expand Chapter 13 in accordion if needed
  console.log('Expanding Chapter 13 in accordion...');
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const ch13Btn = buttons.find(b => b.textContent && b.textContent.includes('Chapter 13'));
        if (ch13Btn) {
          ch13Btn.click();
          return 'Clicked Chapter 13 accordion button';
        }
        return 'Chapter 13 accordion button not found';
      })()
    `,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 800));

  // Select Lesson 13.2 in navigation
  console.log('Selecting Lesson 13.2 in navigation...');
  const selectLessonRes = await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const lessonBtn = buttons.find(b => b.textContent && (b.textContent.includes("The Paradox of Automation") || b.textContent.includes('13.2')));
        if (lessonBtn) {
          lessonBtn.click();
          return 'Clicked Lesson 13.2 button';
        }
        return 'Lesson 13.2 button not found';
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
        const badges = Array.from(document.querySelectorAll('span, p')).map(e => e.textContent).filter(t => t.includes('Bainbridge') || t.includes('Ironies of Automation') || t.includes('13.2'));
        const tabs = Array.from(document.querySelectorAll('button')).map(b => b.textContent).filter(t => t.includes('Ironies') || t.includes('Einstellung') || t.includes('Deliberate De-Automation'));
        return {
          h1,
          hasBainbridgeText: badges.length > 0,
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

  const artifactPath = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96/screenshot_lesson13_2.png';
  fs.writeFileSync(artifactPath, Buffer.from(screenshotRes.data, 'base64'));
  console.log(`Screenshot saved successfully to ${artifactPath}`);

  await client.close();
}

main().catch(err => {
  console.error('Fatal error in CDP script:', err);
  process.exit(1);
});
