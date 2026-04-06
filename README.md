# 💬 Real-Time Chat Application

🚀 **Live Demo**: https://real-time-chat-application-pearl.vercel.app/

---

## 📌 Overview

A full-stack **real-time chat application** built using the MERN stack, designed to simulate modern messaging platforms.
The application supports **instant messaging, selective message deletion, pinning, and user-specific message visibility**, delivering a dynamic and interactive user experience.

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (Vite)
* Axios
* Socket.io Client
* Tailwind CSS

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.io

### 🔹 Deployment

* Frontend: Vercel
* Backend: Render

---

## ✨ Key Features

### 💬 Real-Time Messaging

* Instant message synchronization using WebSockets
* Event-driven updates across all connected clients

### 🗑️ Smart Message Deletion

* **Delete for Everyone** → Removes message globally
* **Delete for Me** → Hides message only for specific user
* Implemented using **soft delete strategy** (no permanent data loss)

### 📌 Message Pinning

* Pin/unpin important messages
* Helps highlight critical conversations

### 👤 User-Based Message Visibility

* Messages dynamically filtered per user
* Ensures personalized chat experience

### ⚡ Scalable Backend Design

* RESTful API architecture
* Modular folder structure for easy feature expansion

---

## 📂 Project Structure

```id="v5yw2y"
chat-app/
├── backend/
│   ├── models/
│   │   └── Message.js
│   ├── routes/
│   │   └── messages.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── components/
│   └── package.json
│
└── README.md
```

---

## 🔗 API Endpoints

### 📥 Get Messages

```http id="p4ssy3"
GET /api/messages
```



Returns all messages excluding those deleted for the specific user.

---

### 📤 Send Message

```http id="n3b1ow"
POST /api/messages
```


Creates a message and triggers real-time update.

---

### 🗑️ Delete Message

```http id="n1u84c"
DELETE /api/messages/:id
```



### 📌 Pin / Unpin Message

```http id="g6h84j"
PATCH /api/messages/:id/pin
```

Toggles pinned state of a message.

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```id="w6cbn7"
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Backend Setup

```id="2h1w8u"
cd backend
npm install
```

Create `.env`:

```id="dlv63l"
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run:

```id="eh0mwg"
npm run dev
```

---

### 3️⃣ Frontend Setup

```id="z9glce"
cd frontend
npm install
```

Create `.env`:

```id="qj8q7v"
VITE_API_URL=http://localhost:5000
```

Run:

```id="o3v59s"
npm run dev
```

---

## 🧠 System Design Highlights

* 🔄 **Event-Driven Architecture** using WebSockets
* 🧩 **Decoupled Frontend & Backend**
* 🗄️ **Efficient Data Handling** with MongoDB
* 🔐 Designed to easily integrate authentication (JWT)

---

## 🚀 Future Enhancements

* 🔐 User Authentication (JWT)
* 🟢 Online/Offline Status
* 👥 Group Chat Support
* ✅ Read Receipts
* 🔔 Push Notifications

---

## 📸 Demo

👉 Try it here:
https://real-time-chat-application-pearl.vercel.app/

---

## 🙌 Conclusion

This project demonstrates strong understanding of **full-stack development, real-time systems, and scalable API design**, making it suitable for production-level enhancements.

---

