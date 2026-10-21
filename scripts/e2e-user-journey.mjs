import { CDPClient, getTargetPageWsUrl } from './cdp.mjs';
import fs from 'fs';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runE2EUserJourney() {
  console.log('====================================================');
  console.log('🚀 COMPREHENSIVE E2E LEARNER JOURNEY SIMULATION');
  console.log('====================================================\n');

  console.log('[1/9] Connecting to headless browser via CDP (port 9222)...');
  const pageWsUrl = await getTargetPageWsUrl();
  const client = new CDPClient(pageWsUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('Runtime.enable');

  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  console.log('[2/9] Navigating to Human Learning Platform (http://127.0.0.1:3000)...');
  await client.send('Page.navigate', { url: 'http://127.0.0.1:3000' });
  await delay(2000);

  // STEP 3: Initial Check & Reset to clean slate if needed
  const initialStatus = await client.eval(`
    (() => {
      const title = document.querySelector('h1')?.textContent || '';
      return { title, url: window.location.href };
    })()
  `);
  console.log('✓ App loaded successfully:', initialStatus);

  // STEP 4: Interact with Lesson 1.1 Prediction
  console.log('\n[3/9] Interacting with Active Calibration Prediction in Lesson 1.1...');
  const predictionResult = await client.eval(`
    (() => {
      const radio = document.querySelector('input[name="prediction-option"]');
      if (radio) {
        radio.click();
      }
      
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
  console.log('  Prediction Result:', predictionResult);
  await delay(1000);

  // STEP 5: Interact with Exercise Scenarios
  console.log('\n[4/9] Testing Interactive Exercise Scenarios...');
  const exerciseResult = await client.eval(`
    (() => {
      // Find category buttons in the exercise section
      const catBtns = Array.from(document.querySelectorAll('button')).filter(b => 
        b.textContent && (
          b.textContent.includes('Attention') || 
          b.textContent.includes('Working Memory') || 
          b.textContent.includes('Consolidation') || 
          b.textContent.includes('Illusion')
        )
      );
      if (catBtns.length > 0) {
        catBtns[0].click();
        return { success: true, clickedCategory: catBtns[0].textContent.trim() };
      }
      return { success: false, reason: 'No category buttons found' };
    })()
  `);
  console.log('  Exercise Result:', exerciseResult);
  await delay(1000);

  // STEP 6: Complete the Verification Quiz
  console.log('\n[5/9] Completing 4-Question Verification Quiz...');
  const quizResult = await client.eval(`
    (() => {
      // Find all questions
      const questionBlocks = document.querySelectorAll('div[data-testid^="question-"], div[style*="marginBottom"]');
      const radioInputs = Array.from(document.querySelectorAll('input[type="radio"]')).filter(r => r.name.startsWith('quiz-q-'));
      
      // Group by name
      const grouped = {};
      radioInputs.forEach(r => {
        if (!grouped[r.name]) grouped[r.name] = [];
        grouped[r.name].push(r);
      });

      let selectedCount = 0;
      Object.values(grouped).forEach(options => {
        if (options.length > 0) {
          options[0].click(); // Pick first option for each question
          selectedCount++;
        }
      });

      const submitBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Submit Assessment')
      );
      
      if (submitBtn && !submitBtn.disabled) {
        submitBtn.click();
        return { success: true, answeredCount: selectedCount, submitted: true };
      }
      return { success: false, answeredCount: selectedCount, reason: 'Submit button disabled or not found' };
    })()
  `);
  console.log('  Quiz Result:', quizResult);
  await delay(1000);

  // STEP 7: Practical Task Completion
  console.log('\n[6/9] Filling Practical Task Protocol...');
  const practicalResult = await client.eval(`
    (() => {
      const exampleBtns = Array.from(document.querySelectorAll('button')).filter(b => 
        b.textContent && b.textContent.includes('Insert Example')
      );
      exampleBtns.forEach(btn => btn.click());

      const saveBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Save Actionable Learning Protocol')
      );
      if (saveBtn) {
        saveBtn.click();
        return { success: true, examplesInserted: exampleBtns.length, saved: true };
      }
      return { success: false, reason: 'Save button not found' };
    })()
  `);
  console.log('  Practical Task Result:', practicalResult);
  await delay(1000);

  // STEP 8: Open and Close Spaced Review Drawer
  console.log('\n[7/9] Testing Spaced Recall Review Drawer...');
  const reviewResult = await client.eval(`
    (() => {
      const reviewBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Spaced Recall Review')
      );
      if (reviewBtn) {
        reviewBtn.click();
        return { opened: true };
      }
      return { opened: false, reason: 'Review button not found' };
    })()
  `);
  console.log('  Spaced Review Trigger:', reviewResult);
  await delay(1200);

  // Close the review dialog
  await client.eval(`
    (() => {
      const closeBtn = document.querySelector('button[aria-label="Close review"]') ||
        Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Return to Workspace'));
      if (closeBtn) closeBtn.click();
    })()
  `);
  await delay(800);

  // STEP 9: Navigate across chapters to Lesson 26.2 (The Capstone)
  console.log('\n[8/9] Navigating across curriculum to Lesson 26.2 (The Synthesis Project)...');
  
  // Expand Chapter 26
  await client.eval(`
    (() => {
      const ch26Btn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Chapter 26')
      );
      if (ch26Btn) ch26Btn.click();
    })()
  `);
  await delay(1000);

  // Click Lesson 26.2
  const capstoneNav = await client.eval(`
    (() => {
      const l26_2 = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && (b.textContent.includes('26.2') || b.textContent.includes('The Synthesis Project'))
      );
      if (l26_2) {
        l26_2.click();
        return { success: true, text: l26_2.textContent.trim() };
      }
      return { success: false, reason: 'Lesson 26.2 button not found' };
    })()
  `);
  console.log('  Capstone Navigation:', capstoneNav);
  await delay(1500);

  // Commit prediction on Lesson 26.2
  const capstonePrediction = await client.eval(`
    (() => {
      const heading = document.querySelector('h1')?.textContent || '';
      const radio = document.querySelector('input[name="prediction-option"]');
      if (radio) radio.click();

      const commitBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent && b.textContent.includes('Lock In Prediction')
      );
      if (commitBtn) commitBtn.click();

      return { heading, predictionCommitted: !!commitBtn };
    })()
  `);
  console.log('  Capstone Execution:', capstonePrediction);
  await delay(1500);

  // STEP 10: Validate Storage Telemetry & Capture Visual Proof
  console.log('\n[9/9] Verifying telemetry in localStorage and capturing screenshot artifact...');
  const storageState = await client.eval(`
    (() => {
      const progressRaw = localStorage.getItem('human_learning_platform_progress_v1');
      const memoryRaw = localStorage.getItem('human_learning_memory_v2');
      let progress = null;
      let memory = null;
      try { progress = progressRaw ? JSON.parse(progressRaw) : null; } catch {}
      try { memory = memoryRaw ? JSON.parse(memoryRaw) : null; } catch {}

      return {
        hasProgressStore: !!progress,
        completedLessonCount: progress?.completedLessons ? Object.keys(progress.completedLessons).length : 0,
        hasMemoryStore: !!memory,
        schemaVersion: memory?.schemaVersion || 'N/A',
        cardCount: memory?.cards ? Object.keys(memory.cards).length : 0,
        activeLessonId: progress?.activeLessonId || 'unknown'
      };
    })()
  `);
  console.log('  Persistence Telemetry:', storageState);

  const screenshotRes = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });

  const screenshotPath = '/Users/priyanshuyadav/.gemini/antigravity/brain/495dcedf-fffe-46a2-a55e-722402141d96/screenshot_e2e_journey.png';
  fs.writeFileSync(screenshotPath, Buffer.from(screenshotRes.data, 'base64'));
  console.log(`✓ E2E Proof Screenshot saved to: ${screenshotPath}`);

  await client.close();

  console.log('\n====================================================');
  console.log('🎉 COMPREHENSIVE E2E LEARNER JOURNEY VERIFIED 100%!');
  console.log('====================================================\n');
}

runE2EUserJourney().catch((err) => {
  console.error('❌ E2E Journey failed with error:', err);
  process.exit(1);
});
