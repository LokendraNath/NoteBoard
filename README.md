# 🎯 NoteBoard

> NoteBoard is a simple MERN stack note-taking application.
> You can create, view, edit, and delete notes. The UI is minimal — the goal is to showcase MERN logic.

[![MERN](https://img.shields.io/badge/Stack-MERN-blue)](https://developer.mozilla.org/)
[![TypeScript](https://img.shields.io/badge/Types-TypeScript-blueviolet)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

---

## 📸 Screenshot / Demo

![Notes List View](/Frontend/src/assets/preview.png)

---

## 🧾 Description

NoteBoard is a minimal note-taking app where users can:

- Add a new note (title + content)
- View all notes
- View and edit a single note
- Delete a note

The UI is built with **Tailwind CSS + DaisyUI**, icons from **Lucide**, frontend using **React + TypeScript**, backend with **Node.js + Express**, and **MongoDB** as the database.

---

## 🧰 Tech Stack

- **Frontend:** React + TypeScript
- **UI / Styling:** Tailwind CSS + DaisyUI
- **Icons:** Lucide
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Atlas or local)
- **HTTP Client:** Axios

---

## 🗂 Project Structure (Suggested)

![Project Structure](/Frontend/src/assets/project-structure.png)

---

## ⚙️ Setup & Run (Local)

### Prerequisites

- Node.js (LTS)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
# Create a .env file with:
# MONGODB_URI and PORT
npm run dev
```

### Example .env file:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/noteboard
PORT=5000
```

### Frontend Setup

```
cd frontend
npm install
# Optionally create .env (e.g. REACT_APP_API_URL)
npm start
```
