# Human Learning Platform

> **An evidence-grounded cognitive engineering manual for the biological human mind.**  
> Master how neural systems acquire, consolidate, index, and retrieve knowledge across **7 Parts**, **26 Chapters**, and **53 Lessons**.

---

## 🌟 Key Architecture & Capabilities

1. **Complete 53-Lesson Empirical Curriculum**:
   - Zero stubs, zero placeholders. Every single lesson implements the strict **15-Point Quality Standard** (authentic empirical hook, interactive prediction with comparison matrix, 3 deep core explanation modules with mechanism descriptions and caveats, 5-stage interactive process diagram, 4-scenario diagnostic exercise lab, 4-question verification quiz, and 3-step practical actionable protocol).

2. **3-Column Cognitive Workspace**:
   - **Left Column**: Responsive Chapter & Lesson tree navigation with accordion state and spaced review counters.
   - **Center Column**: Distraction-free, long-form editorial lesson reader with active interactive widgets.
   - **Right Column**: Integrated AI Socratic Companion with multi-turn Groq API streaming (`openai/gpt-oss-120b`) and an instant offline local Socratic knowledge fallback.

3. **Local-First Memory & Review Engine**:
   - Versioned schema v2 (`human_learning_memory_v2`) tracking concept retrievability, stability, and due dates.
   - Zero external database dependencies: all learner progress and spaced retrieval telemetry persist safely in browser storage with automated corrupted storage recovery.

4. **Production-Ready & Enterprise-Grade**:
   - 100% Vitest pass rate across 65 test suites (780+ unit and integration tests).
   - Clean static analysis with Oxlint (0 warnings, 0 errors).
   - High-speed production bundling with Vite and TypeScript (sub-200ms build).
   - Multi-stage Docker containerization and Vercel edge/static hosting support.

---

## 📚 Curriculum Structure (53 Lessons / 26 Chapters)

| Part | Focus & Scope | Chapters |
| :--- | :--- | :--- |
| **Part 1** | *The Biological & Cognitive Architecture of Learning* | Ch 1 (Architecture), Ch 2 (Retrieval & Spacing), Ch 3 (Feedback & Deliberate Practice), Ch 4 (Attention & Executive Control) |
| **Part 2** | *Focus, Encoding & Memory Consolidation* | Ch 5 (Synaptic Plasticity & LTP), Ch 6 (Sleep & Replay), Ch 7 (Interference & Reconsolidation) |
| **Part 3** | *Deep Understanding & Mental Representation* | Ch 8 (Chunking & Hierarchies), Ch 9 (Analogy & Abstraction), Ch 10 (Dual Coding & Visualization) |
| **Part 4** | *Conceptual Mastery & Desirable Difficulties* | Ch 11 (Categorization & Prototypes), Ch 12 (Deliberate Practice), Ch 13 (Skill Proceduralization & Automation) |
| **Part 5** | *Generative Problem Solving & Transfer* | Ch 14 (Interleaving & Variation), Ch 15 (Productive Failure & Errors), Ch 16 (Transfer of Learning), Ch 17 (Problem Solving Heuristics) |
| **Part 6** | *Metacognition, Drive & Emotional Regulation* | Ch 18 (Metacognitive Calibration), Ch 19 (Incubation & Creativity), Ch 20 (Motivation & Dopamine), Ch 21 (Stress & Emotional Regulation), Ch 22 (Self-Efficacy & Mindset) |
| **Part 7** | *Meta-Learning Architecture & Decadal Permastore* | Ch 23 (First-Principles Domain Mapping), Ch 24 (The Extended Mind & Note Systems), Ch 25 (Social & Adversarial Calibration), Ch 26 (The Lifetime Learning Architecture & Synthesis Engine) |

---

## 🚀 Quickstart & Development

### Prerequisites
- Node.js 22+
- npm 10+

### Installation & Local Run
```bash
# 1. Clone repository and install dependencies
git clone https://github.com/your-username/human-learning.git
cd human-learning
npm install

# 2. (Optional) Provide Groq API key for live AI Companion
cp .env.example .env
# Edit .env and set GROQ_API_KEY="your-api-key"

# 3. Start local development server (with HMR)
npm run dev
# App accessible at http://localhost:3000
```

---

## 🧪 Testing & Verification

```bash
# Run unit and integration tests (Vitest)
npm test

# Run Oxlint static analysis
npm run lint

# Run full end-to-end user journey simulation (via CDP)
npm run test:e2e

# Build production bundle
npm run build
```

---

## 🐳 Docker & Containerization

### One-Command Startup with Docker Compose
```bash
docker compose up --build
# Access the platform at http://localhost:3000
```

### Standalone Docker Build
```bash
docker build -t human-learning-platform .
docker run -p 3000:3000 -e GROQ_API_KEY="your-key" human-learning-platform
```

---

## ☁️ Deployment

- **Node.js Production Server**: Run `npm run build && npm start`.
- **Vercel**: Deploy directly using the provided `vercel.json` configuration.
- **Static Hosting (Cloudflare Pages, Firebase Hosting, Netlify)**: Build via `npm run build` and publish the generated `dist/` directory.

---

## 📄 License
MIT License. Grounded in peer-reviewed empirical cognitive science and educational psychology research.
