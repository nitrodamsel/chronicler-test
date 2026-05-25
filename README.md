# Chronicler

Chronicler is a full-stack monorepo that lets users upload a `.txt` file containing two lists of location IDs, sends the file to a Node.js backend, and returns the calculated total distance between the lists.

## ✨ Features

- Upload a `.txt` file from the browser and automatically submit it to the API
- Validate the file type on the frontend before upload
- Parse the uploaded file on the backend and calculate the total distance between the two sorted lists
- Return structured JSON responses for both success and error cases
- Include a health endpoint for basic service checks

## 🧰 Tech Stack

- Frontend: React 19, TypeScript, Vite, Axios, Tailwind CSS, Vitest, Testing Library
- Backend: Node.js, Express 5, TypeScript, Multer, CORS, Pino, Jest, Supertest
- Tooling: npm workspaces, concurrent root scripts, nodemon for backend development

## 🗂️ Folder Structure

```text
.
├── frontend/            # React app
│   ├── src/
│   │   ├── components/  # Shared UI components
│   │   ├── hooks/       # Upload flow and other client logic
│   │   ├── lib/         # API client and request helpers
│   │   ├── pages/       # Page-level React components
│   │   └── types/       # Shared frontend TypeScript types
│   └── package.json
├── backend/             # Express API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── routes/      # API route definitions
│   │   ├── services/    # Distance calculation logic
│   │   ├── middlewares/ # Logging and error handling
│   │   └── lib/         # Environment, logger, and error utilities
│   └── package.json
├── input.txt            # Sample input file format
└── package.json         # Root workspace scripts
```

## 📦 How to Install

Install dependencies for both workspaces from the repository root:

```bash
npm install
```

This uses npm workspaces to install dependencies for both `frontend` and `backend` in one step.

## ▶️ How to Run

Run both backend and frontend locally in one script from the repository root with:

```bash
npm run dev
```

Available workspace scripts:

```bash
npm run frontend:start   # Start the frontend dev server
npm run frontend:test    # Run frontend tests
npm run frontend:build   # Build the frontend for production
npm run backend:dev      # Start the backend in watch mode
npm run backend:start    # Run the compiled backend
npm run backend:test     # Run backend tests
```

## 🧪 Running Tests

Run tests for each workspace from the repository root using npm workspaces:

```bash
npm run frontend:test
npm run backend:test
```

If you want to focus on one side of the app, run the matching workspace test command directly. The frontend uses Vitest, and the backend uses Jest.

## 🛰️ API Info

The backend exposes a versioned API under `/api/v1`, and the same routes are also mounted without the `/api` prefix for convenience.

### ❤️ Health Check

- `GET /api/v1/health`

Returns a basic health payload with status and timestamp.

Example response:

```json
{
  "status": "ok",
  "timestamp": "2026-05-25T12:00:00.000Z"
}
```

### 📍 Calculate Total Distance

- `POST /api/v1/locations/distance`

Accepts `multipart/form-data` with a single field named `file`.

Requirements:

- The uploaded file must be a `.txt` file
- The file content must follow the two-column location list format shown in `input.txt`

Example success response:

```json
{
  "message": "Total distance calculated successfully.",
  "data": {
    "totalDistance": 11
  }
}
```

Common error responses include missing files, invalid file types, malformed input, and unknown routes.
