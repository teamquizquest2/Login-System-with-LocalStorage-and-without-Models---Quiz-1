# QuizQuest-2-033-048-103-C

## 🧠 QuizQuest-2

### 🌟 MERN Stack Project — Assignment 1 & Quiz 1

This repository contains both the frontend and backend code for **Assignment 1** and **Quiz 1**, built with the **MERN (MongoDB, Express, React, Node.js)** stack.  
It demonstrates a complete login and registration system including form validation, MongoDB integration, and dynamic routing between pages.

---

## 🧭 Overview

This is a **full-stack web application** featuring a responsive React frontend connected to a Node.js + Express backend, with MongoDB as the database.  
Key features include authentication, comprehensive form validation (client and server), and modular, component-based UI design.

---

### 🧩 Tech Stack

| Layer     | Technology                      |
|-----------|---------------------------------|
| Frontend  | React.js, HTML, CSS, JavaScript |
| Backend   | Node.js, Express.js             |
| Database  | MongoDB                         |
| Tools     | Postman, npm, Git, VS Code      |

---

## 📁 Folder Structure

```
project-root/
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── myFiles/      # API routes, controllers, DB config, etc.
│   ├── server.js     # Main backend entry point
│   └── package.json
│
└── README.md
```

---

## 🚀 How to Run the Project Locally

1. **Clone the Repository**
    ```bash
    git clone <repo-url>
    cd project-root
    ```

2. **MongoDB Configuration**

    - In the `backend` folder, create a `.env` file and add:
      ```
      MONGO_URI=your_mongodb_connection_string
      ```
      Example:
      ```
      MONGO_URI=mongodb://localhost:27017/myDatabase
      ```

    - Make sure your MongoDB server or Atlas cluster is active before starting the backend.

3. **Install Dependencies**

    - **Frontend:**
      ```bash
      cd frontend
      npm install
      ```
    - **Backend:**
      ```bash
      cd ../backend
      npm install
      ```

4. **Start Both Servers**

    - **Backend:**
      ```bash
      npm start
      ```
    - **Frontend:** (in a separate terminal)
      ```bash
      cd ../frontend
      npm start
      ```

---

## 🔗 Project Navigation

| Page     | Path         | Description                                               |
|----------|--------------|----------------------------------------------------------|
| 🏠 Home  | `/`          | Landing page with summary and header section             |
| 🔐 Login | `/login`     | Login form with validation                               |
| 📝 Register | `/register` | Registration form, saves user data to MongoDB            |
| 📊 Dashboard | `/dashboard` | Protected user data page (requires valid token)        |
| 🧰 Services | `/services` | Project-related services listing                         |
| 👩‍💼 About | `/about`   | Author details and map location                          |
| ✉️ Contact | `/contact` | Contact form with brief description                      |
| 🔝 Navbar & Footer | *Shared* | Common components present across all pages           |

---

## 🧪 Backend API Testing (Optional)

Test API endpoints using Postman or your preferred REST client.

**Example endpoints:**

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| POST   | `/api/users/register` | Register a new user       |
| POST   | `/api/users/login`    | Login, receive a token    |
| GET    | `/api/users`          | Retrieve all users (admin)|

---

## ⚠️ Important Notes

- `node_modules` are **not** included in the repository.
    - Run `npm install` in both `frontend` and `backend` folders before starting.
- The project is not deployed; everything can be fully tested locally.
- Ensure your MongoDB URI in `.env` is correct and that the server is running.
- Folder names and structure may slightly vary from your setup—imports are managed within the code.

---

## 💡 Troubleshooting

| Issue                       | Possible Solution                                              |
|-----------------------------|---------------------------------------------------------------|
| ❌ MongoDB not connecting    | Check `.env` for correct URI and that MongoDB is running      |
| ⚠️ Port already in use      | Stop the conflicting process or change port in `server.js`    |
| 🔒 Dashboard not opening     | Ensure valid token exists in browser’s `localStorage`         |
| ⛔ Frontend not loading      | Run `npm install` inside `/frontend`, then `npm start`        |

**Authentication uses JWT**, with the token stored in `localStorage`.

---

## 🎥 Project Demo

[![Watch the video](thumbnail.png)](https://drive.google.com/file/d/1vi6URxxlUxOxkSvF-_rCq4MmagVpB1X_/view?usp=drive_link)

> Click the image above to watch the full demo video.
