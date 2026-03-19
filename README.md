# 🎓 CampusFind — College Lost & Found System

> A full-stack web portal that helps college students report, search, and reclaim lost items on campus through an automated matching system and admin-controlled approval workflow.

---

## 🚀 Features

- **Authentication** — Secure register/login with JWT-based session management
- **Report Items** — Students can report lost or found items with image uploads
- **Smart Matching** — Automated algorithm matches lost and found items by category, location, and keywords
- **Browse & Search** — Filter all items by type, category, and keyword search
- **My Reports** — Track status of all your submitted reports
- **Admin Dashboard** — Review matched pairs, approve returns, and manage unmatched items
- **Role-Based Access** — Student and Admin roles with protected routes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Authentication | JWT (JSON Web Tokens) |
| File Uploads | Multer |
| Environment | dotenv |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/thorrwho/college-lost-found-system.git
cd college-lost-found-system
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Configure environment variables
Create a `.env` file inside the `backend` folder:
```env
MONGODB_URI=mongodb://localhost:27017/lost-found
PORT=5000
JWT_SECRET=your_secret_key
```

### 4. Start the backend server
```bash
node server.js
```

### 5. Serve the frontend
```bash
cd ../frontend
npx live-server .
```

App will be running at `http://127.0.0.1:8080`

---

## 👤 Roles

| Role | Access |
|------|--------|
| Student | Register, login, report items, browse, view own reports |
| Admin | All student access + admin dashboard, approve/reject matches |

To set a user as admin, update their role in MongoDB:
```javascript
db.getSiblingDB('lost-found').users.updateOne(
  { email: "your@email.com" },
  { $set: { role: "admin" } }
)
```

---

## 📁 Project Structure

```
college-lost-found-system/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
└── frontend/
    ├── js/
    ├── css/
    ├── index.html
    ├── login.html
    ├── register.html
    ├── dashboard.html
    ├── history.html
    ├── browse.html
    └── admin.html
```

---

## 🏫 Developed for
Vidyavardhaka College of Engineering - Student Project
