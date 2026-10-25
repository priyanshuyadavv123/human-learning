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
  console.log('🧪 VERIFYING COGNITIVE LOAD INTERACTIVE LEARNING LAB');
  console.log('====================================================');

  const wsUrl = await getWsUrl();
  const client = new CDPClient(wsUrl);
  await client.connect();
  console.log('[1/7] Connected to Chrome DevTools Protocol.');

  await client.send('Page.enable');
  await client.send('DOM.enable');

  // Set desktop viewport
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  });

  // Navigate to application
  console.log('[2/7] Loading application and navigating to Lesson 1.3 (Cognitive Load & Schema Construction)...');
  await client.send('Page.navigate', { url: BASE_URL });
  await new Promise((r) => setTimeout(r, 1200));

  // Set activeLessonId to 'cognitive-load-schema' in localStorage and reload
  await client.eval(`
    localStorage.setItem('human_learning_platform_progress_v1', JSON.stringify({
      theme: 'light',
      activeLessonId: 'cognitive-load-schema',
      lessonStates: {}
    }));
    window.location.reload();
  `);
  await new Promise((r) => setTimeout(r, 1500));

  // Verify Lesson 1.3 title and breadcrumb
  const headerInfo = await client.eval(`
    ({
      h1: document.querySelector('h1')?.innerText,
      stages: Array.from(document.querySelectorAll('[role="tab"]')).map(t => t.innerText.replace(/\\n/g, ' ')),
    })
  `);
  console.log('  Loaded Lab Header & Stages:', headerInfo);

  // [3/7] Stage 1 Discover: Cognitive Load Simulation
  console.log('[3/7] Testing Stage 1 Discover: Cognitive Load Simulation...');
  // Click 10 Items (Severe Overload)
  await client.eval(`
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('10 Items'));
    if (btn) btn.click();
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Capture Stage 1 Overload screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_stage1_simulation_overload.png'));

  // Toggle Schema Chunking Active (Expert Lens)
  await client.eval(`
    const chunkBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Raw Fragmented Elements') || b.innerText.includes('Schema Chunking'));
    if (chunkBtn) chunkBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Capture Stage 1 Chunked screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_stage1_simulation_chunked.png'));

  // [4/7] Stage 3 Experiment: Working Memory Playground & Expert Lens
  console.log('[4/7] Testing Stage 3 Experiment: Working Memory Playground...');
  await client.eval(`
    const expTab = Array.from(document.querySelectorAll('[role="tab"]')).find(t => t.innerText.includes('Experiment'));
    if (expTab) expTab.click();
  `);
  await new Promise((r) => setTimeout(r, 800));

  // Click Auto-Group with Expert Schema Lens
  await client.eval(`
    const autoGroupBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Auto-Group'));
    if (autoGroupBtn) autoGroupBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Click Principal Architect Lens in Comparison
  await client.eval(`
    const architectBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Principal Architect Lens'));
    if (architectBtn) architectBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Capture Stage 3 screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_stage3_experiment_playground.png'));

  // [5/7] Stage 4 Understand: Concept Map Topology
  console.log('[5/7] Testing Stage 4 Understand: Concept Map Explorer...');
  await client.eval(`
    const understandTab = Array.from(document.querySelectorAll('[role="tab"]')).find(t => t.innerText.includes('Understand'));
    if (understandTab) understandTab.click();
  `);
  await new Promise((r) => setTimeout(r, 800));

  // Click Extraneous Load node
  await client.eval(`
    const nodeBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Extraneous Load'));
    if (nodeBtn) nodeBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Capture Stage 4 Concept Map screenshot
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_stage4_concept_map.png'));

  // [6/7] Stage 6 Retrieve: Transfer Reflection & Dark Mode
  console.log('[6/7] Testing Stage 6 Retrieve & Dark Mode Verification...');
  await client.eval(`
    const retrieveTab = Array.from(document.querySelectorAll('[role="tab"]')).find(t => t.innerText.includes('Retrieve'));
    if (retrieveTab) retrieveTab.click();
  `);
  await new Promise((r) => setTimeout(r, 800));

  // Click Strategy Beta in Transfer Challenge
  await client.eval(`
    const betaBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Strategy Beta'));
    if (betaBtn) betaBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 600));

  // Capture Stage 6 Transfer Challenge (Light Mode)
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_stage6_transfer_light.png'));

  // Toggle Dark Theme
  await client.eval(`
    const themeBtn = document.querySelector('button[aria-label*="Switch to dark"]');
    if (themeBtn) themeBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 800));

  // Capture Stage 6 Transfer Challenge (Dark Mode)
  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_stage6_transfer_dark.png'));

  // [7/7] Responsive Testing: Mobile Viewport (390 x 844)
  console.log('[7/7] Capturing Mobile Responsive Viewport (390x844)...');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await client.eval(`
    const discoverTab = Array.from(document.querySelectorAll('[role="tab"]')).find(t => t.innerText.includes('Discover'));
    if (discoverTab) discoverTab.click();
  `);
  await new Promise((r) => setTimeout(r, 800));

  await captureScreenshot(client, path.join(ARTIFACT_DIR, 'lab_mobile_discover.png'));

  await client.close();
  console.log('====================================================');
  console.log('🎉 INTERACTIVE LEARNING LAB CDP AUDIT COMPLETE!');
  console.log('====================================================');
}

run().catch((err) => {
  console.error('Test run failed:', err);
  process.exit(1);
});
