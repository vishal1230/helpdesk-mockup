# 📌 Helpdesk Mockup App

A simple React.js helpdesk system built as an internship assignment.

---

## 🚀 Live Demo

🌐 **Deployed on Netlify:**  
[https://helpdeskmockup.netlify.app/](https://helpdeskmockup.netlify.app/)

---

## ✨ Features

✅ User Sign In / Sign Up  
✅ Role-Based Authentication (Admin / User)  
✅ Admins can update ticket statuses (Pending / In Progress / Resolved)  
✅ Dashboard with:
- Ticket list
- Status badges (Pending / Resolved / In Progress)
- Ticket summary counters (Total / In Progress / Resolved / Pending)

✅ Create new tickets  
✅ Logout functionality  

---

## 🔐 Role-Based Authentication

When you **sign up**, you can choose to create a **User** or **Admin** account.

**✅ Admin Sign Up Key:**  
To register as an Admin, enter this key in the **Admin Key field** during sign up:

```
ADMIN123
```

If you leave the key blank or incorrect, the account will default to a regular User.

---

## ⚙️ Tech Stack

- **React.js** (Frontend)
- **Tailwind CSS** (Styling)
- **JSON Server** (Mock Backend API)

---

## 💻 Local Setup

Clone the repository:

```
git clone https://github.com/vishal1230/helpdesk-mockup.git
cd helpdesk-mockup
```

Install dependencies:

```
npm install
```

---

### 🟢 Running the Frontend

Start the React app:

```
npm start
```

This will open [http://localhost:3000](http://localhost:3000)

---

### 🟢 Running the Backend API

The backend uses [JSON Server](https://github.com/typicode/json-server) to mock user and ticket data.

To start the API server:

```
npm run start:api
```

API is available at [http://localhost:5000](http://localhost:5000)

Available endpoints:
- `/tickets`
- `/users`

---

## 🧪 Credentials

✅ **Sign Up with any email and password**  
✅ To create an **Admin** account, enter `ADMIN123` as the Admin Key during sign up.

---

## 📂 Project Structure

```
helpdesk-mockup/
├── backend/
│   └── db.json          # JSON Server data
├── public/
├── src/
│   ├── components/      # Shared components
│   ├── pages/           # Page components (SignIn, SignUp, Dashboard, NewTicket)
│   ├── App.jsx          # Routing setup
│   └── index.js
├── tailwind.config.js
└── package.json
```

---

## 📝 License

This project is for educational and demonstration purposes.

---

## 🙋‍♂️ Contact

Created by **Vishal Yadav**

🌐 [GitHub Profile](https://github.com/vishal1230)

---

⭐️ *If you like this project, please consider giving it a star!*
