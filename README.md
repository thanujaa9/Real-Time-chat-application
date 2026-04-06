# 💬 Real-Time Chat Application

🚀 Live Demo: https://real-time-chat-application-pearl.vercel.app/

---

## 📌 Overview

A full-stack real-time chat application built using the MERN stack.
Users can send and receive messages instantly with a clean and responsive chat interface.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* Socket.io Client
* Tailwind CSS (optional styling)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.io

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ✨ Features

* 💬 Send and receive messages
* ⚡ Real-time communication using WebSockets
* 📦 Persistent chat storage with MongoDB
* 🎨 Clean and responsive UI
* 🔄 Auto-fetch latest messages

---

## 📂 Project Structure

```
chat-app/
├── backend/
│   ├── models/Message.js
│   ├── routes/messages.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── components/
│   └── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
```

Create `.env`:

```
VITE_API_URL=http://localhost:5000
```

Run frontend:

```
npm run dev
```

---

## 🔗 API Endpoints

### Get Messages

```
GET /api/messages
```

### Send Message

```
POST /api/messages
```

---

## 🚀 Future Improvements

* 👤 User authentication (JWT)
* 🟢 Online/offline status
* 📩 Private chat rooms
* 📱 Mobile responsiveness improvements
* 🔔 Notifications

---

## 🧠 Learnings

* Built REST APIs using Express
* Integrated MongoDB with Mongoose
* Implemented real-time communication with Socket.io
* Deployed full-stack apps using Vercel & Render
* Managed environment variables securely



