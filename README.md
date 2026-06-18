# Darep (Data Analyst Replacement)

A conversational data analysis platform designed for business intelligence. Darep allows users to connect their data sources (CSVs, Excel, PostgreSQL, MySQL) and ask questions in plain English. The platform acts as an autonomous AI agent, securely generating and executing SQL/Pandas code to provide instant insights, tables, and beautiful charts.

## 🚀 Current Status: Frontend Complete

The frontend interface is built and fully responsive. It provides a clean, enterprise-grade UX for interacting with the AI agent.

### What's Built
- **Design System**: A polished, light-mode enterprise UI tailored for data analysis.
- **Authentication Flow**: Clean UI for Landing, Login, and Sign-up pages. (Auth is temporarily bypassed for development viewing).
- **Dashboard Application Shell**:
  - **Chat Panel**: A conversational interface for users to type natural language queries.
  - **Results Panel**: A dedicated section to render generated tables, code snippets, and Plotly-based charts.
  - **Data Connection Modal**: UI flows for uploading local files (CSV/Excel) or securely connecting to external databases.
- **Client-Side Routing**: Configured with React Router and fully compatible with Vercel SPA deployments (`vercel.json` included).

---

## 🚧 Roadmap: Backend Architecture (To Be Built)

The backend is where the core intelligence and security of Darep will live. To make this a functional product (and a highly competitive hackathon submission), the following systems must be built:

### 1. LLM Orchestration & Agentic Workflow
- **Text-to-SQL / Text-to-Pandas API**: Integrating with an LLM (e.g., Gemini Pro, Anthropic, or OpenAI) to interpret user queries based on the provided data schema.
- **Autonomous Error Correction**: Implementing a loop where if the generated code fails, the error is fed back to the LLM to write a fix autonomously before returning to the user.

### 2. Secure Code Execution (Sandboxing)
- **Isolated Execution Environment**: Setting up a secure sandbox (e.g., Docker containers, WebAssembly, or gVisor) to safely run the AI-generated Python/Pandas code against the user's data without compromising the host server.

### 3. Data Engineering & Memory Management
- **File Parsing & Storage**: Efficiently ingesting and parsing large CSV, Excel, JSON, and Parquet files (potentially using DuckDB or SQLite for memory-efficient querying).
- **Database Connection Pooling**: Securely managing live connections to user-provided PostgreSQL/MySQL databases.

### 4. Data Serialization & Streaming
- **Chart Generation**: Serializing Pandas DataFrames into structured JSON formats that the frontend Plotly library can render.
- **Real-Time Streaming**: Implementing WebSockets or Server-Sent Events (SSE) to stream thought processes and responses to the frontend, preventing timeout issues during heavy analysis.

### 5. Multi-Tenant Security
- Ensuring strict data isolation so that one user's agent cannot access another user's database or uploaded files.
