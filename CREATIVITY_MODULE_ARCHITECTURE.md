# Creativity Module Ecosystem Architecture

## 1. System Architecture Flow
The Creativity Ecosystem is built on a modular Next.js architecture using Client Components for interactivity and Server Actions (conceptually) for data fetching.

**Flow:**
1.  **User Interface Layer (Client)**:
    - `CreativityClient.tsx` acts as the orchestrator.
    - Sub-modules (Playground, Arena, Vault, etc.) are lazy-loaded or rendered as distinct components.
    - State is managed locally for UI interactions (Framer Motion) and via React Context/Hooks for data.
2.  **Service Layer (API/Actions)**:
    - `AI Service`: Handles requests to LLMs (OpenAI/Gemini) for prompt generation, story building, and mentoring.
    - `Gamification Service`: Manages challenges, points, badges, and leaderboards.
    - `Content Service`: Handles Idea Vault CRUD operations.
3.  **Data Layer (Database)**:
    - Stores user profiles, generated content, challenge submissions, and progress.

## 2. Database Schema (Prisma/SQL Model)

```prisma
// User Profile & Gamification
model User {
  id              String   @id @default(uuid())
  username        String
  email           String   @unique
  xp              Int      @default(0)
  level           Int      @default(1)
  badges          Badge[]
  submissions     Submission[]
  savedIdeas      SavedIdea[]
  learningProgress LearningPathProgress[]
}

model Badge {
  id          String @id @default(uuid())
  name        String
  icon        String
  description String
  users       User[]
}

// 1. AI Creativity Playground
model SavedIdea {
  id        String   @id @default(uuid())
  userId    String
  type      String   // 'idea', 'story', 'design_prompt', 'startup'
  content   String   // JSON or Text content
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}

// 2. Creative Challenges Arena
model Challenge {
  id          String   @id @default(uuid())
  title       String
  description String
  type        String   // 'weekly', 'monthly'
  startDate   DateTime
  endDate     DateTime
  submissions Submission[]
}

model Submission {
  id          String   @id @default(uuid())
  userId      String
  challengeId String
  contentUrl  String
  votes       Int      @default(0)
  user        User     @relation(fields: [userId], references: [id])
  challenge   Challenge @relation(fields: [challengeId], references: [id])
}

// 3. Idea Vault
model SharedIdea {
  id          String   @id @default(uuid())
  userId      String
  title       String
  description String
  category    String
  tags        String[]
  likes       Int      @default(0)
  createdAt   DateTime @default(now())
}

// 6. Creative Learning Paths
model LearningPath {
  id          String   @id @default(uuid())
  title       String   // e.g., "UI/UX Designer Path"
  modules     Json     // Structured content
}

model LearningPathProgress {
  id             String @id @default(uuid())
  userId         String
  pathId         String
  completedSteps String[]
  user           User   @relation(fields: [userId], references: [id])
}
```

## 3. API Endpoints Structure

### AI Playground
- `POST /api/ai/generate-idea`: Generates ideas based on topic.
- `POST /api/ai/generate-story`: Creates short stories from keywords.
- `POST /api/ai/generate-prompt`: Generates UI/UX or Art prompts.
- `POST /api/ai/brainstorm`: Interactive brainstorming session.

### Challenges Arena
- `GET /api/challenges/active`: Fetch current weekly/monthly challenges.
- `POST /api/challenges/submit`: Upload a submission.
- `POST /api/challenges/vote`: Vote for a submission.
- `GET /api/challenges/leaderboard`: Get top users.

### Idea Vault
- `GET /api/ideas`: List shared ideas with filters/search.
- `POST /api/ideas`: Create a new shared idea.
- `POST /api/ideas/:id/like`: Like an idea.

### AI Mentor
- `POST /api/mentor/chat`: Send message to AI mentor.
- `GET /api/mentor/roadmap`: Get personalized roadmap.

### Learning Paths
- `GET /api/paths`: List available paths.
- `POST /api/paths/progress`: Update user progress.

## 4. Component Structure

```
src/components/pages/
  CreativityClient.tsx (Parent)
    ├── CreativityPlayground.tsx
    │     ├── IdeaGenerator.tsx
    │     ├── StoryBuilder.tsx
    │     └── DesignPrompts.tsx
    ├── CreativeChallenges.tsx
    │     ├── ChallengeCard.tsx
    │     ├── SubmissionUploader.tsx
    │     └── Leaderboard.tsx
    ├── IdeaVault.tsx
    │     ├── IdeaCard.tsx
    │     └── FilterBar.tsx
    ├── AIMentor.tsx
    │     └── ChatInterface.tsx
    ├── CreativityTools.tsx
    │     └── ToolCard.tsx
    ├── LearningPaths.tsx
    │     └── PathProgressMap.tsx
    └── DailyBooster.tsx
          └── MicroChallenge.tsx
```

## 5. Admin Panel Controls
- **Challenge Management**: Create/Edit challenges, set dates, pick winners.
- **Content Moderation**: Review Idea Vault submissions, ban users/content.
- **Analytics Dashboard**: View active users, generation stats, popular tools.
- **Learning Path Editor**: Update curriculum and milestones.
