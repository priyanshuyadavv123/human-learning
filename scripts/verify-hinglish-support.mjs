import { CDPClient } from './cdp.mjs';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96';
const BASE_URL = 'http://localhost:3000';

async function getWsUrl() {
  const res = await fetch('http://127.0.0.1:9222/json');
  const targets = await res.json();
  const page = targets.find((t) => t.type === 'page');
  if (!page || !page.webSocketDebuggerUrl) {
    throw new Error('No page target found on CDP 9222');
  }
  return page.webSocketDebuggerUrl;
}

async function captureScreenshot(client, filepath) {
  const { data } = await client.send('Page.captureScreenshot', { format: 'png' });
  const buffer = Buffer.from(data, 'base64');
  fs.writeFileSync(filepath, buffer);
  console.log(`  ✓ Screenshot saved: ${path.basename(filepath)}`);
}

async function run() {
  console.log('====================================================');
  console.log('🌐 VERIFYING DUAL LANGUAGE (ENGLISH & HINGLISH) MODE');
  console.log('====================================================');

  const wsUrl = await getWsUrl();
  const client = new CDPClient(wsUrl);
  await client.connect();
  console.log('[1/5] Connected to Chrome DevTools Protocol.');

  await client.send('Page.enable');
  await client.send('DOM.enable');

  // Set desktop viewport (1440x900)
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  });

  // Navigate to application
  console.log('[2/5] Loading application in English mode...');
  await client.send('Page.navigate', { url: BASE_URL });
  await new Promise((r) => setTimeout(r, 1200));

  // Ensure language is set to 'en' first
  await client.eval(`
    localStorage.setItem('human_learning_platform_language_v1', 'en');
    window.location.reload();
  `);
  await new Promise((r) => setTimeout(r, 1500));

  // Verify English Header button
  const enButtonText = await client.eval(`
    (() => {
      const b = document.querySelector('button[aria-label*="language"]');
      return b ? b.innerText.trim() : 'NOT_FOUND';
    })()
  `);
  console.log('  English Switcher Button:', enButtonText);

  // Capture English Mode Screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'screenshot_english_mode.png'));

  // [3/5] Switch to Hinglish Mode
  console.log('[3/5] Switching to Hinglish mode via Header toggle button...');
  await client.eval(`
    (() => {
      const b = document.querySelector('button[aria-label*="Hinglish"]');
      if (b) b.click();
    })()
  `);
  await new Promise((r) => setTimeout(r, 800));

  const hinglishState = await client.eval(`
    (() => {
      const b = document.querySelector('button[aria-label*="Hinglish"]');
      const tab = document.querySelector('[role="tab"]');
      return {
        storageLang: localStorage.getItem('human_learning_platform_language_v1'),
        btnText: b ? b.innerText.trim() : null,
        headerHinglishBanner: document.body.innerText.includes('Hinglish Mode'),
        firstStageTitle: tab ? tab.innerText : null,
      };
    })()
  `);
  console.log('  Hinglish UI State:', hinglishState);

  // Capture Hinglish Mode Screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'screenshot_hinglish_mode.png'));

  // [4/5] Test AI Tutor in Hinglish Mode
  console.log('[4/5] Testing AI Tutor with Hinglish Quick Inquiries...');
  // Ensure tutor is open
  await client.eval(`
    (() => {
      const tutorToggle = document.querySelector('button[aria-label*="Tutor"]');
      const isPanelVisible = document.querySelector('aside') || document.querySelector('[aria-label="AI Tutor"]');
      if (!isPanelVisible && tutorToggle) {
        tutorToggle.click();
      }
    })()
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Click the first Hinglish quick inquiry: "Fluency Illusion"
  const clickedPrompt = await client.eval(`
    (() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const fluencyBtn = buttons.find(b => b.innerText.includes('Fluency Illusion'));
      if (fluencyBtn) {
        fluencyBtn.click();
        return true;
      }
      return false;
    })()
  `);
  console.log('  Clicked Hinglish Prompt (Fluency Illusion):', clickedPrompt);

  // Wait for response to render
  await new Promise((r) => setTimeout(r, 1200));

  // Capture Tutor Hinglish response screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'screenshot_hinglish_tutor.png'));

  // [5/5] Verify Mobile Viewport Responsive Switcher
  console.log('[5/5] Testing Mobile Viewport (390x844)...');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    mobile: true,
  });
  await new Promise((r) => setTimeout(r, 800));

  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'screenshot_hinglish_mobile.png'));

  console.log('====================================================');
  console.log('✅ DUAL LANGUAGE (ENGLISH & HINGLISH) VERIFICATION COMPLETE');
  console.log('====================================================');

  await client.close();
}

run().catch((err) => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
