<<<<<<< HEAD
# InterviewTask
=======
# 📋 Technical Assessment: Single-Page Chat Interface

- **Time Limit:** 40 minutes
- **Environment:** React + Vite + TypeScript
- **Allowed Tools:** Any AI coding assistant, chatbot, or IDE agent (e.g., Cursor, GitHub Copilot, ChatGPT, Claude)

---

## 🚀 Objective

Your task is to implement the ChatInterface.tsx component from scratch. An asynchronous utility module (src/utils/api.ts) has already been configured for you, exporting a function called fetchLiveAIResponse that accepts a string prompt and returns a Promise resolving to a string.

You are free to use any AI tools to generate, modify, or structure your code. The evaluation will focus on your engineering judgment, your ability to guide and audit AI-generated code, and the robustness of the application shell you build around this asynchronous core.

---

## 🧱 Requirements

### 1. Core Chat Workflow

- Implement state management to handle a continuous conversation timeline.
- Display the message history chronologically, distinguishing between the user's inputs and the system's responses.

### 2. Asynchronous State Handling

- Account for the application state while an API call is in flight.
- Implement protection mechanisms to ensure data consistency and prevent unintended interactions during pending asynchronous operations.

### 3. Application Resilience

- Ensure the interface can gracefully handle scenarios where the core utility function fails or rejects without locking up or breaking the UI layout.

### 4. Code Quality & Scope

- Ensure the component is type-safe and correctly handles common web interface edge cases.

---

## 📤 Submission

- Before the end of the 40-minute session, you are required to push your completed codebase to a public repository on your personal **GitHub** account.
- Share the repository URL directly with the interviewer before the time expires.
>>>>>>> 67fe45b (Implement chat interface)
