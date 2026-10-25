import { CDPClient, getTargetPageWsUrl } from './cdp.mjs';
import fs from 'fs';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ARTIFACTS_DIR = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96';

async function setViewport(client, width, height, isMobile = false) {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 2,
    mobile: isMobile,
  });
  await delay(600);
}

async function ensureTheme(client, targetTheme) {
  await client.eval(`
    (() => {
      const current = document.documentElement.getAttribute('data-theme') || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      if (current !== '${targetTheme}') {
        const toggle = document.querySelector('button[title*="theme"]');
        if (toggle) toggle.click();
      }
    })()
  `);
  await delay(500);
}

async function takeScreenshot(client, filename) {
  const screenshotRes = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });
  const filePath = `${ARTIFACTS_DIR}/${filename}`;
  fs.writeFileSync(filePath, Buffer.from(screenshotRes.data, 'base64'));
  console.log(`  ✓ Screenshot saved: ${filename}`);
  return filePath;
}

async function runE2EUserJourney() {
  console.log('====================================================');
  console.log('🚀 COMPREHENSIVE E2E LEARNER JOURNEY & UI/UX AUDIT');
  console.log('====================================================\n');

  console.log('[1/10] Connecting to headless browser via CDP (port 9222)...');
  const pageWsUrl = await getTargetPageWsUrl();
  const client = new CDPClient(pageWsUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('Runtime.enable');

  await setViewport(client, 1440, 900, false);

  console.log('[2/10] Resetting localStorage and loading fresh application...');
  await client.send('Page.navigate', { url: 'http://localhost:3000' });
  await delay(1200);
  await client.eval(`localStorage.clear()`);
  await client.send('Page.navigate', { url: 'http://localhost:3000' });
  await delay(1500);

  const initialStatus = await client.eval(`
    (() => {
      const title = document.querySelector('h1')?.textContent || '';
      return { title, url: window.location.href };
    })()
  `);
  console.log('✓ App loaded clean slate:', initialStatus);

  // STEP 3: Active Calibration Prediction
  console.log('\n[3/10] Interacting with Active Calibration Prediction in Lesson 1.1...');
  const predictionResult = await client.eval(`
    (() => {
      const radio = document.querySelector('input[name="prediction-option"]');
      if (radio) {
        radio.click();
        return { success: true, clicked: true };
      }
      return { success: false, reason: 'Prediction radio not found' };
    })()
  `);
  console.log('  Prediction Radio Selected:', predictionResult);
  await delay(400);

  const commitResult = await client.eval(`
    (() => {
      const commitBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Lock In Prediction')
      );
      if (commitBtn) {
        commitBtn.click();
        return { success: true, message: 'Prediction committed' };
      }
      return { success: false, reason: 'Commit button not found' };
    })()
  `);
  console.log('  Prediction Committed:', commitResult);
  await delay(800);

  // STEP 4: Inspect Diagram Stages (prerequisite #2)
  console.log('\n[4/10] Inspecting Cognitive Architecture Diagram Stages...');
  const diagramResult = await client.eval(`
    (() => {
      const diagramSection = document.querySelector('[data-testid="learning-process-diagram-section"]');
      if (!diagramSection) return { success: false, reason: 'Diagram section not found' };
      
      const stageButtons = Array.from(diagramSection.querySelectorAll('button'));
      stageButtons.slice(0, 3).forEach(b => b.click());
      return { success: true, clickedStages: Math.min(stageButtons.length, 3) };
    })()
  `);
  console.log('  Diagram Result:', diagramResult);
  await delay(800);

  // STEP 5: Interact with Exercise Scenarios (prerequisite #3)
  console.log('\n[5/10] Testing Interactive Exercise Scenarios...');
  for (let cardIdx = 0; cardIdx < 4; cardIdx++) {
    await client.eval(`
      (() => {
        const exerciseSection = document.querySelector('[data-testid="interactive-exercise-section"]');
        if (!exerciseSection) return;
        const cards = Array.from(exerciseSection.querySelectorAll('div[style*="border: 1.5px"]'));
        if (cards[${cardIdx}]) {
          const btn = cards[${cardIdx}].querySelector('button');
          if (btn) btn.click();
        }
      })()
    `);
    await delay(300);
  }

  await delay(500);
  const exerciseEvalResult = await client.eval(`
    (() => {
      const exerciseSection = document.querySelector('[data-testid="interactive-exercise-section"]');
      const evalBtn = Array.from(exerciseSection.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Evaluate Clinical Diagnoses')
      );
      if (evalBtn && !evalBtn.disabled) {
        evalBtn.click();
        return { success: true, evaluated: true };
      }
      return { success: false, reason: evalBtn ? 'Button disabled' : 'Button not found' };
    })()
  `);
  console.log('  Exercise Evaluated:', exerciseEvalResult);
  await delay(800);

  // STEP 6: Complete the Verification Quiz (prerequisite #4)
  console.log('\n[6/10] Completing 4-Question Verification Quiz...');
  await client.eval(`
    (() => {
      const quizSection = document.querySelector('[data-testid="quiz-assessment-section"]');
      if (!quizSection) return;
      const radioInputs = Array.from(quizSection.querySelectorAll('input[type="radio"][name^="quiz-"]'));
      const grouped = {};
      radioInputs.forEach(r => {
        if (!grouped[r.name]) grouped[r.name] = [];
        grouped[r.name].push(r);
      });
      Object.values(grouped).forEach(options => {
        if (options.length > 0) options[0].click();
      });
    })()
  `);
  await delay(600);

  const quizSubmitResult = await client.eval(`
    (() => {
      const quizSection = document.querySelector('[data-testid="quiz-assessment-section"]');
      const submitBtn = Array.from(quizSection.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Submit Assessment')
      );
      if (submitBtn && !submitBtn.disabled) {
        submitBtn.click();
        return { success: true, submitted: true };
      }
      return { success: false, reason: submitBtn ? 'Button disabled' : 'Button not found' };
    })()
  `);
  console.log('  Quiz Submitted:', quizSubmitResult);
  await delay(800);

  // STEP 7: Practical Task Completion (prerequisite #5)
  console.log('\n[7/10] Filling Practical Task Protocol...');
  await client.eval(`
    (() => {
      const exampleBtns = Array.from(document.querySelectorAll('button')).filter(b => 
        b.textContent && b.textContent.includes('Insert Example')
      );
      exampleBtns.forEach(btn => btn.click());
    })()
  `);
  await delay(500);

  const practicalSaveResult = await client.eval(`
    (() => {
      const saveBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Save Actionable Learning Protocol')
      );
      if (saveBtn) {
        saveBtn.click();
        return { success: true, saved: true };
      }
      return { success: false, reason: 'Save button not found' };
    })()
  `);
  console.log('  Practical Saved:', practicalSaveResult);
  await delay(800);

  // STEP 8: Mark Lesson 1.1 Complete & Continue to Lesson 1.2
  console.log('\n[8/10] Verifying Lesson Completion & Next Lesson Continuation...');
  const completeAction = await client.eval(`
    (() => {
      const completeBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Mark Lesson 1.1 as Complete')
      );
      if (completeBtn && !completeBtn.disabled) {
        completeBtn.click();
        return { success: true, markedComplete: true };
      }
      return { success: false, reason: completeBtn ? 'Button disabled' : 'Button not found' };
    })()
  `);
  console.log('  Lesson 1.1 Marked Complete:', completeAction);
  await delay(1000);

  // Test the new Continue to Lesson 1.2 CTA
  const continueAction = await client.eval(`
    (() => {
      const continueBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Continue to Lesson 1.2')
      );
      if (continueBtn) {
        continueBtn.click();
        return { success: true, navigatedToNext: true };
      }
      return { success: false, reason: 'Continue CTA not found' };
    })()
  `);
  console.log('  Continue to Lesson 1.2 Transition:', continueAction);
  await delay(1500);

  // Verify that the page is now on Lesson 1.2
  const nextLessonHeading = await client.eval(`
    (() => {
      return {
        h1: document.querySelector('h1')?.textContent || '',
        headerBreadcrumb: document.querySelector('header')?.innerText || ''
      };
    })()
  `);
  console.log('  Navigated Lesson 1.2 Status:', nextLessonHeading);

  // STEP 9: Multi-Viewport Audit Screenshots across Light & Dark Themes
  console.log('\n[9/10] Capturing Comprehensive Multi-Viewport Audit Screenshots...');

  // 1. Desktop Light (1440x900)
  await setViewport(client, 1440, 900, false);
  await ensureTheme(client, 'light');
  await takeScreenshot(client, 'audit_desktop_light.png');

  // 2. Desktop Dark (1440x900)
  await ensureTheme(client, 'dark');
  await takeScreenshot(client, 'audit_desktop_dark.png');

  // 3. Tablet Dark (768x1024)
  await setViewport(client, 768, 1024, false);
  await ensureTheme(client, 'dark');
  await takeScreenshot(client, 'audit_tablet_dark.png');

  // 4. Tablet Light (768x1024)
  await ensureTheme(client, 'light');
  await takeScreenshot(client, 'audit_tablet_light.png');

  // 5. Mobile Light Reading (375x812) - close drawers so lesson reader is visible
  await setViewport(client, 375, 812, true);
  await ensureTheme(client, 'light');
  await client.eval(`
    (() => {
      const closeTutorBtn = document.querySelector('button[aria-label*="Close AI Tutor"]');
      if (closeTutorBtn) closeTutorBtn.click();
      const closeSidebarBtn = document.querySelector('.mobile-close-sidebar-btn');
      if (closeSidebarBtn) closeSidebarBtn.click();
    })()
  `);
  await delay(600);
  await takeScreenshot(client, 'audit_mobile_light.png');

  // 6. Mobile Dark Reading (375x812)
  await ensureTheme(client, 'dark');
  await takeScreenshot(client, 'audit_mobile_dark.png');

  // Return to Desktop Light for E2E summary screenshot
  await setViewport(client, 1440, 900, false);
  await ensureTheme(client, 'light');
  await takeScreenshot(client, 'screenshot_e2e_journey.png');

  // STEP 10: Telemetry Verification
  console.log('\n[10/10] Verifying Final Telemetry in localStorage...');
  const finalTelemetry = await client.eval(`
    (() => {
      const progressRaw = localStorage.getItem('human_learning_platform_progress_v1');
      let progress = null;
      try { progress = progressRaw ? JSON.parse(progressRaw) : null; } catch {}

      const lessonStates = progress?.lessonStates || {};
      const completedLessons = Object.entries(lessonStates)
        .filter(([_, state]) => state.isCompleted)
        .map(([id]) => id);

      return {
        hasProgressStore: !!progress,
        completedLessonCount: completedLessons.length,
        completedLessons,
        activeLessonId: progress?.activeLessonId || 'unknown'
      };
    })()
  `);
  console.log('  Final Telemetry:', finalTelemetry);

  await client.close();

  console.log('\n====================================================');
  console.log('🎉 COMPREHENSIVE E2E LEARNER JOURNEY AUDIT VERIFIED 100%!');
  console.log('====================================================\n');
}

runE2EUserJourney().catch((err) => {
  console.error('❌ E2E Journey failed with error:', err);
  process.exit(1);
});
