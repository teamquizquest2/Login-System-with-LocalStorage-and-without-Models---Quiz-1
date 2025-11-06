# QuizQuest-2-033-048-103-C
🧠 QuizQuest-2
# 🌟 MERN Stack Project — Assignment 1 & Quiz 1

This repository contains the frontend and backend code for **Assignment 1** and **Quiz 1**, developed using the **MERN (MongoDB, Express, React, Node.js)** stack.  
The project demonstrates a complete login and registration system with form validation, database integration, and dynamic routing between pages.

---

## 🧭 Overview

This project is a **full-stack web application** that connects a responsive React frontend to a Node.js and Express backend with MongoDB as the database.  
It showcases practical implementation of authentication, form validation (client and server side), and component-based UI development.

### 🧩 Tech Stack Used
| Layer | Technology |
|--------|-------------|
| Frontend | React.js, HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Tools | Postman, npm, Git, VS Code |

---

## 📁 Folder Structure

project-root/
│
├── frontend/
│ ├── public/
│ ├── src/
│ └── package.json
│
├── backend/
│ ├── myFiles/ # API routes, controllers, DB config, etc.
│ ├── server.js # Main backend entry point
│ └── package.json
│
└── README.md

yaml
Copy code

---

## 🚀 How to Run the Project Locally

Follow these steps to set up and run the project on your computer:


### MongoDB Configuration
Create a .env file inside your backend folder and add:

ini
Copy code
MONGO_URI = your_mongodb_connection_string
Example:

bash
Copy code
MONGO_URI = mongodb://localhost:27017/myDatabase
Make sure your MongoDB server or Atlas connection is active before starting the backend.

🔗 Project Navigation
Once both servers are running:

Page	Path	Description
🏠 Home	/	Landing page with summary and header section
🔐 Login	/login	Login form with validation
📝 Register	/register	Registration form that stores user data in MongoDB
📊 Dashboard	/dashboard	Displays user data only if logged in (Token required)
🧰 Services	/services	Shows project-related services
👩‍💼 About	/about	Shows author details and map location
✉️ Contact	/contact	Includes a contact form and brief description
🔝 Navbar & Footer	Shared across all pages	

🧪 Testing the Backend API (Optional)
You can test API endpoints using Postman or any REST client.

Example endpoints:

Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and receive a token
GET	/api/users	Retrieve all users (for admin)

### ⚠️ Important Notes
node_modules are not included in this repository.
→ Run npm install in both frontend and backend before starting.

The project is not deployed, but can be fully tested locally by following the above setup.

Ensure your MongoDB connection string in .env is correct and the MongoDB server is running.

Folder hierarchy may differ slightly from your local setup — all imports are correctly managed in the project code.

### 💡 Troubleshooting
Issue	Possible Fix
❌ MongoDB not connecting	Check .env connection string or ensure MongoDB service is running
⚠️ Port already in use	Stop existing process or change port in server.js
🔒 Dashboard not opening	Ensure valid token exists in browser’s localStorage
⛔ Frontend not loading	Re-run npm install inside /frontend and then npm start

Authentication: JWT (Token stored in LocalStorage)
## 🎥 Project Demo

[![Watch the video](thumbnail.png)](https://drive.google.com/file/d/1vi6URxxlUxOxkSvF-_rCq4MmagVpB1X_/view?usp=drive_link)

> Click the image above to watch the full demo video.

