# PricePulse AI Dashboard

PricePulse AI is a production-ready competitive intelligence dashboard built for high-scale market monitoring. It features real-time data visualization, automated competitor extraction, and predictive AI insights for market strategy.

![PricePulse AI Overview](./verification/overview.png)

## 🚀 Key Features

- **Dashboard Overview:** Real-time stats, AI insights, and promotional activity heatmaps.
- **Competitor Monitoring:** Live tracking of multi-source pricing through Tinyfish agents.
- **Market Analytics:** Advanced data visualization for market position matrices and share-of-voice reporting.
- **Alert Center:** Mobile-optimized priority notification center for price drops and inventory changes.
- **Agentic Layer:** Robust abstraction for Google ADK and Tinyfish API integrations.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **State Management:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Testing:** [Vitest](https://vitest.dev/) (Unit), [Playwright](https://playwright.dev/) (E2E)

## 🎨 Design System

PricePulse AI follows a strict design identity:

- **Midnight Navy:** `#0A1628` (Background/Cards)
- **Primary Cyan:** `#00D4AA` (Actions/Primary)
- **Lavender:** `#8B7BFF` (Secondary/Competitors)
- **Coral:** `#FF6B6B` (Alerts/Destructive)
- **Typography:** Space Grotesk (Headers), Inter (Body), JetBrains Mono (Data/Code)

## 🤖 Agent Integration Architecture

All data fetching and monitoring logic is centralized in `src/lib/agents/` to support seamless scaling:

- **`AgentService`:** High-level orchestration for discovery and monitoring.
- **`TinyfishService`:** Direct integration for web automation and data extraction.
- **`types.ts`:** Strictly typed interfaces for agent configurations, actions, and responses.

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pricepulse-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   *Edit `.env.local` to include your `TINYFISH_API_KEY` and Google ADK credentials.*

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🧪 Testing

### Unit Tests (Vitest)
Verify core agent logic and service singletons:
```bash
npx vitest run
```

### E2E Tests (Playwright)
Verify navigation, dashboard features, and chart rendering:
```bash
npx playwright test
```

## 🏗️ Deployment

Deploy easily to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

*Ensure environment variables from `.env.example` are configured in the Vercel dashboard.*
