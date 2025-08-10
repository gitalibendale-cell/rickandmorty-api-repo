# Rick and Morty Characters App

This is a single-page React application that displays characters from the [Rick and Morty API](https://rickandmortyapi.com/). It uses modern React libraries and best practices including TypeScript, TanStack Query, TanStack Router, and TanStack Table.

## Features

- ✅ Fetch characters from the public Rick and Morty REST API
- ✅ Display paginated list of characters
- ✅ Navigate to character detail pages
- ✅ Persist current page in URL (supports refresh and sharing)
- ✅ Refresh button to re-fetch current page
- ✅ Display characters in a table using TanStack Table

## Tech Stack

- [React 18+](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [TanStack Router](https://tanstack.com/router/latest)
- [TanStack Table](https://tanstack.com/table/latest)
- [Vite](https://vitejs.dev/) for development and build

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/rickandmorty-api-repo.git
cd rickandmorty-api-repo

## **Install Dependencies**
npm create vite@latest rick-and-morty-app -- --template react-ts
cd rick-and-morty-app
npm install @tanstack/react-query @tanstack/react-router @tanstack/react-table axios
npm install -D @types/react @types/react-dom


## **Project Structure**
src/
│
├── main.tsx
├── App.tsx
├── pages/
│   ├── Home.tsx
│   └── CharacterDetails.tsx
└── api/
    └── rickAndMorty.ts
