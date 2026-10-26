import type { TutorKnowledgeEntry, TutorPrompt } from './tutorKnowledge.ts';

export const TUTOR_PROMPTS_HINGLISH: TutorPrompt[] = [
  {
    id: 'p-fluency',
    label: 'Fluency Illusion',
    query: 'Rereading karne se false confidence kyu aata hai jabki real exam me recall nahi hota?',
    conceptTarget: 'illusion-of-competence',
  },
  {
    id: 'p-working-mem',
    label: 'Working Memory Limits',
    query: 'Working memory ka 4-chunk limit kya hai aur experts isse bypass kaise karte hain?',
    conceptTarget: 'working-memory',
  },
  {
    id: 'p-retrieval-code',
    label: 'Retrieval in Practice',
    query: 'Programming aur engineering seekhte waqt Active Retrieval kaise apply karein?',
    conceptTarget: 'retrieval-practice',
  },
  {
    id: 'p-feedback-loop',
    label: 'Prediction Errors',
    query: 'Galti karke feedback lene se retention passive reading se better kyu hota hai?',
    conceptTarget: 'calibrated-feedback',
  },
  {
    id: 'p-evidence-vs-models',
    label: 'Models vs Evidence',
    query: 'Cognitive models aur actual neurobiological brain facts me kya difference hai?',
    conceptTarget: 'scientific-status',
  },
];

const HINGLISH_OVERRIDES: Record<string, Partial<TutorKnowledgeEntry>> = {
  'The Illusion of Competence & Perceptual Fluency': {
    title: 'The Illusion of Competence (Fluency ka Dhoka)',
    summary: 'Rereading se sirf recognition hoti hai, recall nahi.',
    takeaway: 'Rereading easy lagti hai kyunki aakhein familiar words pehchaan leti hain, lekin real problem solving ke liye bina dekhe recall karne ki zaroorat hoti hai.',
    detailedResponse: 'Jab tum baar-baar highlighted notes ya code reread karte ho, toh visual cortex familiar patterns dekhkar relax ho jata hai. Brain is processing fluency ko permanent memory samajh leta hai. Asali test me jab blank screen milti hai, toh recall nahi ho pata kyunki passive reading se retrieval pathway kabhi build hi nahi hua.',
    socraticChallenge: 'Screen se nazar hatao: Kya tum bina notes dekhe 1 simple sentence me samjha sakte ho ki "recognition" aur "recall" me kya asali fark hai?',
  },
  'Working Memory Architecture & The 4-Chunk Limit': {
    title: 'Working Memory Architecture & 4-Chunk Limit',
    summary: 'Conscious working memory simultaneously sirf ~3-4 novel items hold kar sakti hai.',
    takeaway: 'Working memory ek small scratchpad ki tarah hai jo 3-4 se zyada novel elements aane par saturate ho jati hai. Senior engineers isse "Schema Chunking" se bypass karte hain.',
    detailedResponse: 'Jab tum koi unfamiliar topic seekhte ho, toh tumhara conscious working memory scratchpad sirf 3 se 4 novel elements hold kar sakta hai (Cowan, 2001; Sweller, 1988). Agar unorganized explanations ya distraction ho, toh dimag choke ho jata hai. Experts ka dimag biologically bada nahi hota—unhone saare pieces ko "Schema Chunks" me compress kar liya hota hai, jo sirf 1 slot lete hain.',
    socraticChallenge: 'Apne kisi aise topic ke baare me socho jo pehle bahut complex lagta tha par ab intuitive hai. Kaunse patterns ko tumne single chunk me master kiya?',
  },
  'The Tripartite Model of Cognitive Load': {
    title: 'The Tripartite Model of Cognitive Load (3 Types ka Load)',
    summary: 'Total load = Intrinsic + Extraneous + Germane. Extraneous waste ko khatam karo.',
    takeaway: 'Extraneous friction ko eliminate karo taaki working memory bandwidth durable schemas banane (Germane Load) ke liye liberate ho sake.',
    detailedResponse: 'Cognitive Load Theory (John Sweller, 1988) dimagi expenditure ko 3 channels me baant-ti hai:\n1. Intrinsic Load: Subject ki inherent real complexity (jise simplify nahi kiya ja sakta).\n2. Extraneous Load: Kharab layout, split-attention, ya confusing notes se aane wala faltu mental friction.\n3. Germane Load: Schemas consolidate karne me lagne wali productive mehnat.\nKyunki working memory me sirf ~3-4 novel slots hain, extraneous load ko zero karna padta hai taaki seekhne ke liye bandwidth bachi rahe.',
    socraticChallenge: 'Apni current study routine me aisi kaun si ek split-attention cheez hai jise tum aaj hi eliminate kar sakte ho?',
  },
  'The Testing Effect: Retrieval as Memory Modification': {
    title: 'The Testing Effect: Retrieval se Memory Re-write Hoti Hai',
    summary: 'Recall karna memory ko sirf check nahi karta, balki use permanently modify karta hai.',
    takeaway: 'Bina notes dekhe dimag se answer nikalne ki koshish (retrieval practice) synaptic connections ko reinforce karti hai aur forgetting curve ko flatten karti hai.',
    detailedResponse: 'Jab bhi tum kisi memory ko effortful recall ke through bahar nikaalte ho, neural trace temporarily labile ho jata hai aur synaptic reconsolidation initiate hoti hai. Rereading karne se memory passive rehti hai, lekin active testing se associative pathways deepen hote hain. Isliye recall karte waqt jo dimagi zor lagta hai, wahi asali learning hai.',
    socraticChallenge: 'Apne agle 1 ghante ke study session me passive reading ki jagah blank paper pe active recall kaise include karoge?',
  },
  'Prediction Errors & Calibrated Feedback': {
    title: 'Prediction Errors & Calibrated Feedback (Galti se Seekhna)',
    summary: 'High-confidence galti ke baad explanation milne par sabse tezi se neural update hota hai.',
    takeaway: 'Jab aap confident guess galat karte ho aur turant scientific feedback milta hai, toh brain hypercorrection effect ke through instantly model update karta hai.',
    detailedResponse: 'Brain discrepancy signals par kaam karta hai. Jab aap kisi cheez me 100% sure hote ho aur wo galat nikalti hai, toh prefrontal monitoring circuits strong prediction error trigger karte hain. Turant accurate explanatory feedback milne par brain us faulty link ko permanently repair kar leta hai (Butterfield & Metcalfe, 2001).',
    socraticChallenge: 'Kabhi kisi technical concept me aisi galti hui jisme pehle poora confidence tha? Kya uske baad sahi answer hamesha ke liye yaad ho gaya?',
  },
};

export function adaptToHinglish(entry: TutorKnowledgeEntry): TutorKnowledgeEntry {
  const override = HINGLISH_OVERRIDES[entry.title];
  if (override) {
    return {
      ...entry,
      title: override.title || entry.title,
      summary: override.summary || entry.summary,
      takeaway: override.takeaway || entry.takeaway,
      detailedResponse: override.detailedResponse || entry.detailedResponse,
      socraticChallenge: override.socraticChallenge || entry.socraticChallenge,
    };
  }

  // General fallback translation wrapper preserving all academic citations and technical precision
  return {
    ...entry,
    title: `${entry.title} (Hinglish Guide)`,
    summary: entry.summary,
    takeaway: `💡 Key Takeaway: ${entry.takeaway}`,
    detailedResponse: `${entry.detailedResponse}\n\n[Hinglish Summary]: Yeh concept batata hai ki human brain me learning passive reading se nahi, balki active retrieval aur schema construction ke through permanent hoti hai. Technical terms same rehte hain par inka intuition daily life se connected hai.`,
    socraticChallenge: `Socratic Sawaal: ${entry.socraticChallenge}`,
  };
}

export const HINGLISH_GENERIC_FALLBACK: TutorKnowledgeEntry = {
  keywords: [],
  title: 'Contextual Socratic Guidance (Hinglish Mode)',
  summary: 'Human Learning ke scientific syllabus par aadharit.',
  takeaway: 'Yeh lesson 5 core mechanisms par focus karta hai: Attention, Working Memory, Schemas, Retrieval Practice, aur Calibrated Feedback.',
  detailedResponse: 'Main aapke query ko cognitive science ke syllabus ke sath match kar raha hoon. Human cognition ke 5 foundational rules hain:\n1. Attention (selective biological gate)\n2. Working Memory (~4 chunks ka limited scratchpad)\n3. Long-Term Memory (schemas me knowledge consolidation)\n4. Retrieval Practice (testing effect se neural modification)\n5. Calibrated Feedback (prediction errors se model repair)\n\nAap upar diye gaye quick prompts me se kisi ek ko select karke deep-dive kar sakte hain.',
  socraticChallenge: 'Aapka doubt Attention, Working Memory, Schemas, Retrieval, ya Feedback me se kisse connect hota hai?',
  referencedSection: 'Lesson 1.1 • Overview of Cognitive Architecture',
};
