# 🛍️ ShopZone — Modern E-Commerce Single Page Application (SPA)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

> A fully functional, high-performance E-Commerce frontend where users can browse inventory, view product details, manage a global shopping cart, and access protected checkout routes — all without triggering a browser page reload.

## 🔗 Live Project Links
- **🚀 Live Deployment:** [Insert Vercel Live URL Here]
- **🎥 Demo Video:** [Insert YouTube/Drive Video URL Here]

---

## 📑 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features & Architecture](#-key-features--architecture)
3. [Tech Stack](#-tech-stack)
4. [Folder Structure](#-folder-structure)
5. [Getting Started (Local Setup)](#-getting-started-local-setup)
6. [Engineering Decisions (The "Why")](#-engineering-decisions)
7. [AI Usage Policy](#-ai-usage-policy)
8. [Author](#-author)
9. [License](#-license)

---

## 💡 About The Project
**ShopZone** was built as part of Sprint 6 (Phase 3: Core Engineering). The primary goal was to architect the connective tissue of modern web platforms by stitching isolated components into a fully functional Single Page Application (SPA). 

This project simulates an enterprise-level e-commerce environment focusing on client-side routing, global state management, and route protection.

---

## ⚡ Key Features & Architecture

### 🛣️ Phase 1: Base Routing Architecture (P0)
- **Client-Side Routing:** Utilizes `react-router-dom` v6 for seamless, instant navigation.
- **Static Routes:** `/` (Home), `/shop` (Inventory), `/contact` (Form UI).
- **Dynamic Routing:** Clicking a product routes to `/product/:id` using `useParams()` to hydrate specific product data.
- **API Integration:** Consumes the `https://dummyjson.com/products` REST endpoint.

### 🛒 Phase 2: Global State Management (P1)
- **Context API:** Implemented a custom `CartContext` to avoid prop drilling (No Redux used).
- **State Mutation & Deduplication:** "Add to Cart" logic checks for existing items by `id`. If found, it mutates the `quantity`; otherwise, pushes a new item payload.
- **UI Synchronization:** A persistent `<Navbar />` features a dynamic cart badge that instantly reflects global state.
- **Cart Route:** `/cart` calculates the aggregate total price and maps over selected items.

### 🔐 Phase 3: Auth Mocking & Route Protection (P2)
- **State Persistence:** Both Cart and Auth states are synced with `localStorage`. Data survives hard browser refreshes.
- **Mock Authentication:** `/login` route features a "Login as Guest" action that toggles global user state.
- **Protected Routes:** `/checkout` is guarded via a custom `ProtectedRoute` wrapper. Unauthorized users are intercepted and redirected to `/login` using `<Navigate replace />` to prevent back-button loops.

---

## 🛠️ Tech Stack
- **Framework:** React (via Vite for lightning-fast HMR)
- **Routing:** React Router DOM (v6)
- **State Management:** React Context API + Hooks (`useState`, `useEffect`, `useContext`)
- **Styling:** Vanilla CSS (Inline & Modules)
- **Deployment:** Vercel
- **Code Quality:** ESLint

---

## 📂 Folder Structure

```text
shopzone/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI (Navbar, ProtectedRoute)
│   ├── context/          # Global State (CartContext, AuthContext)
│   ├── pages/            # Route Views (Home, Shop, ProductView, Cart, etc.)
│   ├── App.jsx           # Route definitions
│   ├── main.jsx          # App entry point (Providers & BrowserRouter)
│   └── index.css         # Global styles
├── vercel.json           # SPA routing rewrite rules
├── Prompts.md            # AI debugging log
└── package.json


## 💻 Getting Started (Local Setup)
Follow these steps to run the project locally on your machine:

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/shopzone.git
```

Navigate to the project directory:

```bash
cd shopzone
```

Install dependencies:


```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.


## 🧠 Engineering Decisions
1. Vercel SPA Fallback Routing:
Standard "404 Not Found" errors on page refresh in Vercel are prevented by including a vercel.json file at the root:

json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
This ensures all traffic is handled by React Router instead of Vercel looking for physical files.

2. Avoiding Hard Reloads:
Standard <a> tags were strictly avoided. React Router's <Link> component is used across the app to ensure the DOM is not reloaded, preserving the global cart state.

## 🤖 AI Usage Policy
In accordance with the "Learn, Don't Copy" mandate, AI was used strictly as an architectural pair-programmer. I manually wrote and understood all the execution logic.

All AI interactions, debugging sessions, and my personal learnings are documented in the Prompts.md file located in the root directory.

## 👨‍💻 Author
Yash Raj

GitHub: @y-ro9

Sprint: 6 — Phase 3 (Core Engineering)

## 📄 License
This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026 Yash Raj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<p align="center"> <i>Built with ❤️ for Sprint 6 Evaluation.</i> </p>