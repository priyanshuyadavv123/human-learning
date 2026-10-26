import fs from 'node:fs';
import path from 'node:path';
import { CDPClient, getTargetPageWsUrl } from './cdp.mjs';

const ARTIFACT_DIR = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function takeScreenshot(cdp, filepath) {
  const result = await cdp.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(filepath, Buffer.from(result.data, 'base64'));
  console.log(`Saved screenshot: ${filepath}`);
}

async function main() {
  const wsUrl = await getTargetPageWsUrl();
  console.log('Connecting to Chrome CDP at:', wsUrl);
  const cdp = new CDPClient(wsUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('DOM.enable');

  // 1. Desktop - The Sovereign Mind Overview (Ivory Grid, English)
  console.log('--- 1. Desktop Overview (Ivory Grid) ---');
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  });

  await cdp.send('Page.navigate', { url: 'http://localhost:3000' });
  await sleep(2000);

  // Set fresh state to overview, ivory/light, english
  await cdp.eval(`
    localStorage.clear();
    localStorage.setItem('sovereign_mind_active_view', 'overview');
    localStorage.setItem('human_learning_platform_theme_v1', 'light');
    localStorage.setItem('human_learning_platform_language_v1', 'en');
    window.location.reload();
  `);
  await sleep(2500);

  const desktopOverviewPath = path.join(ARTIFACT_DIR, 'sovereign_mind_desktop_overview.png');
  await takeScreenshot(cdp, desktopOverviewPath);

  // 2. Desktop - The Sovereign Mind Overview in Hinglish
  console.log('--- 2. Desktop Overview (Hinglish Mode) ---');
  await cdp.eval(`
    localStorage.setItem('human_learning_platform_language_v1', 'hinglish');
    window.location.reload();
  `);
  await sleep(2000);
  const desktopHinglishPath = path.join(ARTIFACT_DIR, 'sovereign_mind_hinglish_overview.png');
  await takeScreenshot(cdp, desktopHinglishPath);

  // 3. Desktop - Dark Obsidian Mode
  console.log('--- 3. Desktop Dark Obsidian Mode ---');
  await cdp.eval(`
    localStorage.setItem('human_learning_platform_theme_v1', 'dark');
    window.location.reload();
  `);
  await sleep(2000);
  const desktopDarkPath = path.join(ARTIFACT_DIR, 'sovereign_mind_dark_obsidian.png');
  await takeScreenshot(cdp, desktopDarkPath);

  // 4. Desktop - Lesson Reader (Lesson 1.1) in Sovereign Mind layout
  console.log('--- 4. Lesson Reader (Ivory Grid) ---');
  await cdp.eval(`
    localStorage.setItem('human_learning_platform_theme_v1', 'light');
    localStorage.setItem('sovereign_mind_active_view', 'curriculum');
    window.location.reload();
  `);
  await sleep(2000);
  const desktopLessonPath = path.join(ARTIFACT_DIR, 'sovereign_mind_lesson_reader.png');
  await takeScreenshot(cdp, desktopLessonPath);

  // 5. Desktop - Psychology Lab (Cognitive Load & Working Memory)
  console.log('--- 5. Psychology Lab ---');
  await cdp.eval(`
    localStorage.setItem('sovereign_mind_active_view', 'lab');
    window.location.reload();
  `);
  await sleep(2000);
  const desktopLabPath = path.join(ARTIFACT_DIR, 'sovereign_mind_psychology_lab.png');
  await takeScreenshot(cdp, desktopLabPath);

  // 6. Mobile View (iPhone 14 Pro: 393 x 852)
  console.log('--- 6. Mobile Responsive View ---');
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 393,
    height: 852,
    deviceScaleFactor: 3,
    mobile: true,
  });
  await cdp.eval(`
    localStorage.setItem('sovereign_mind_active_view', 'overview');
    window.location.reload();
  `);
  await sleep(2000);
  const mobilePath = path.join(ARTIFACT_DIR, 'sovereign_mind_mobile_overview.png');
  await takeScreenshot(cdp, mobilePath);

  await cdp.close();
  console.log('--- All screenshots captured successfully! ---');
}

main().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
