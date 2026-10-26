import type { LanguageMode } from '../types/learning.ts';

export interface UIStringEntry {
  en: string;
  hi: string;
}

export const I18N_STRINGS: Record<string, UIStringEntry> = {
  // Navigation & Breadcrumbs
  course_title: {
    en: 'Human Learning',
    hi: 'Human Learning (मानव सीखना)',
  },
  chapter_prefix: {
    en: 'Ch',
    hi: 'Chapter',
  },
  lesson_prefix: {
    en: 'Lesson',
    hi: 'Lesson',
  },
  progress_complete: {
    en: 'Complete',
    hi: 'Poora Hua ✓',
  },

  // Lesson Header
  foundational_paradox: {
    en: 'The Foundational Paradox',
    hi: 'Asli Paradox & Curiosity Hook',
  },
  reading_time_suffix: {
    en: 'min deep read & interactive practice',
    hi: 'min deep read & live practice',
  },
  cognitive_badge: {
    en: 'Empirical Cognitive Architecture',
    hi: 'Scientific Cognitive Science',
  },
  hinglish_mode_badge: {
    en: 'Hinglish Mode Active',
    hi: '🇮🇳 Hinglish Mode Active: Core technical terms English me rahenge, intuitive analogies Hinglish me!',
  },

  // Prediction Interaction
  predict_step_label: {
    en: 'Active Calibration Step 1',
    hi: 'Active Calibration 01 • Andaza Lagao',
  },
  predict_step_sub: {
    en: 'Commit your intuition before reading the explanation',
    hi: 'Explanation padhne se pehle apna intuition lock karo (Prediction Error se hi real learning hoti hai)',
  },
  predict_btn_lock: {
    en: 'Lock In Prediction',
    hi: 'Lock In Prediction (Andaza Lock Karo) →',
  },
  predict_btn_select_prompt: {
    en: 'Select an option above to commit',
    hi: 'Aage badhne ke liye upar ek option choose karein',
  },
  predict_reality_title: {
    en: 'The Empirical Reality & Why Your Brain Fooled You',
    hi: 'Asli Science & Mechanism (Dimag Kyun Dhoka Kha Gaya)',
  },
  predict_correct_msg: {
    en: 'Intuition Calibrated Correctly',
    hi: 'Sahi Andaza! (Intuition Calibrated)',
  },
  predict_miscalibrated_msg: {
    en: 'Intuition Discrepancy (Valuable Prediction Error)',
    hi: 'Galti Hui! (Par yahi prediction error aapke neural pathways ko rewire karega)',
  },

  // Core Explanations
  core_section_label: {
    en: 'Section 2 • Core Mechanics',
    hi: 'Section 2 • Core Mechanics & Asli Intuition',
  },
  core_section_title: {
    en: 'The Five Biological Imperatives of Learning',
    hi: 'Seekhne Ke 5 Biological Rules (Core Mechanics)',
  },
  core_section_sub: {
    en: 'Learning is an energy-intensive sequence of biological transformations. Navigate each foundational mechanism below:',
    hi: 'Seekhna ek energy-intensive biological process hai. Neeche diye gaye mechanisms ko explore karein:',
  },
  underlying_mechanisms_title: {
    en: 'Underlying Operational Mechanisms',
    hi: 'Kaise Kaam Karta Hai (Biological Operations)',
  },
  engineering_rule_title: {
    en: 'Core Engineering Rule',
    hi: 'Asli Engineering Niyam (Key Takeaway)',
  },
  model_vs_reality_title: {
    en: 'Model vs Biological Reality:',
    hi: 'Conceptual Model vs Asli Neurobiology:',
  },
  analogy_card_title: {
    en: 'Everyday Mental Model & Intuition',
    hi: '💡 Asli Zindagi Ki Analogy (Mental Model)',
  },

  // Diagnostic Exercise
  diagnostic_section_label: {
    en: 'Section 4 • Interactive Clinical Diagnostic',
    hi: 'Section 4 • Clinical Diagnostic Practice',
  },
  diagnostic_score_correct: {
    en: 'Score: Correct',
    hi: 'Score: Sahi Diagnoses',
  },
  diagnostic_select_mechanism: {
    en: 'Select Primary Cognitive Mechanism:',
    hi: 'Primary Cognitive Mechanism Pehchano:',
  },
  diagnostic_check_btn: {
    en: 'Check Diagnoses',
    hi: 'Diagnoses Check Karo →',
  },
  diagnostic_reset_btn: {
    en: 'Reset Exercise',
    hi: 'Dobara Try Karo (Reset)',
  },
  diagnostic_all_prompt: {
    en: 'Categorize all scenarios to verify',
    hi: 'Verify karne ke liye saare scenarios categorize karein',
  },
  diagnostic_correct_badge: {
    en: 'Correct Diagnosis',
    hi: 'Sahi Diagnosis ✓',
  },
  diagnostic_misdiagnosed_badge: {
    en: 'Misdiagnosed',
    hi: 'Galat Diagnosis ✗',
  },

  // Quiz Assessment
  quiz_section_label: {
    en: 'Section 5 • Verification Assessment',
    hi: 'Section 5 • Verification Assessment (Test Karo)',
  },
  quiz_locked_note: {
    en: 'Answers locked until submission',
    hi: 'Answers submit karne ke baad reveal honge',
  },
  quiz_submit_btn: {
    en: 'Submit Assessment',
    hi: 'Answers Submit Karo →',
  },
  quiz_retake_btn: {
    en: 'Retake Assessment',
    hi: 'Dobara Test Do (Retake)',
  },
  quiz_passed_title: {
    en: 'Mastery Verified',
    hi: 'Mastery Verified! Zabardast 🏆',
  },
  quiz_failed_title: {
    en: 'Review Recommended',
    hi: 'Revise Karne Ki Zaroorat Hai (Review Recommended)',
  },
  quiz_pedagogy_rationale: {
    en: 'Pedagogical Rationale:',
    hi: 'Kyun Yeh Sahi/Galat Hai (Scientific Rationale):',
  },

  // Practical Task
  practical_section_label: {
    en: 'Section 6 • Actionable Routine Audit',
    hi: 'Section 6 • Zindagi Me Kaise Laagu Karein (Protocol)',
  },
  practical_step_prefix: {
    en: 'Step',
    hi: 'Kadam (Step)',
  },
  practical_mark_done: {
    en: 'Mark Step Complete',
    hi: 'Step Complete Karo ✓',
  },
  practical_completed_btn: {
    en: 'Step Completed',
    hi: 'Done ✓',
  },
  practical_advance_btn: {
    en: 'Complete Lesson & Advance',
    hi: 'Lesson Complete & Aage Badho 🚀',
  },

  // AI Tutor Panel
  tutor_header_title: {
    en: 'Socratic AI Companion',
    hi: 'Senior AI Mentor',
  },
  tutor_header_sub: {
    en: 'Curriculum-grounded cognitive scientist',
    hi: 'Senior Bhaiya / Didi Style Socratic Mentor',
  },
  tutor_quick_inquiries: {
    en: 'Quick Inquiries',
    hi: 'Quick Sawaal (Hinglish)',
  },
  tutor_input_placeholder: {
    en: 'Ask about memory, attention, or retrieval...',
    hi: 'Poochiye: memory, attention, ya retrieval ke baare mein...',
  },
  tutor_reflecting: {
    en: 'Reflecting on cognitive architecture...',
    hi: 'Cognitive architecture par vichar kar rahe hain...',
  },
  tutor_reflection_challenge: {
    en: 'Socratic Reflection:',
    hi: 'Socratic Reflection (Sochne Ka Sawaal):',
  },
};

/**
 * Helper to fetch localized string based on active language
 */
export function t(key: string, language: LanguageMode = 'en'): string {
  const entry = I18N_STRINGS[key];
  if (!entry) return key;
  return language === 'hinglish' ? entry.hi : entry.en;
}

/**
 * Rich Hinglish intuitive analogies for core cognitive mechanisms
 */
export const HINGLISH_ANALOGIES: Record<string, { title: string; analogy: string }> = {
  'attention': {
    title: 'Security Guard At The Club Gate',
    analogy: 'Attention dimag ke gate par khada bouncer hai. Bahar lakhon notifications aur awazein hain, par gate se ek baar me sirf 1 cheez andar aa sakti hai. Agar phone bar-bar check karoge, toh bouncer distract ho jayega aur zaroori padhai andar ghusegi hi nahi.',
  },
  'working-memory': {
    title: 'Computer Ki 4GB RAM (Scratchpad)',
    analogy: 'Working memory aapke brain ki RAM hai jisme sirf ~3 se 4 chote novel items fit hote hain. Agar bina chunking ke bohot saari nayi cheezein ek sath load karoge, toh RAM full ho jayegi aur browser crash ho jayega. Schema banane se saari information ek single ZIP file ban jati hai jo sirf 1 slot leti hai.',
  },
  'long-term-memory': {
    title: 'Associative Web (Knowledge Graph)',
    analogy: 'Long-term memory koi alag box nahi hai jisme file fenk di jati hai. Yeh ek interconnected jaal (web) hai. Koi naya concept tabhi tikta hai jab aap use kisi purane familiar topic ke hook se baandh (anchor) dete ho.',
  },
  'retrieval-practice': {
    title: 'Gym Me Weight Lift Karna vs Bodybuilders Ko Dekhna',
    analogy: 'Notes ko bar-bar reread karna aisa hai jaise gym me kisi aur ko dumbbell uthate dekhna — lagta hai easy hai, par muscle nahi banti! Retrieval practice ka matlab hai blank paper par bina dekhe recall karna: jo mental zor lagta hai, wahi neurons ke beech ka connection mazboot karta hai.',
  },
  'calibrated-feedback': {
    title: 'Car Ka GPS Re-Routing',
    analogy: 'Jab aap confident hote ho ki right turn lena hai aur galti ho jati hai, toh GPS turant bolta hai: "Re-routing in 50 meters". Brain bhi high-confidence errors par sabse tezi se neural pathways repair karta hai — isko Hypercorrection Effect kehte hain.',
  },
};
