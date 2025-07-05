# 📌 Helpdesk Mockup App

A simple React.js helpdesk system built as an internship assignment.

---

## 🚀 Live Demo

🌐 **Deployed on Netlify:**  
[https://helpdeskmockup.netlify.app/](https://helpdeskmockup.netlify.app/)

---

## ✨ Features

✅ User Sign In / Sign Up  
✅ Dashboard with:
- Ticket list
- Status badges (Pending / Resolved)
- Ticket summary counters (Total / In Progress / Resolved)

✅ Create new tickets  
✅ Edit ticket status  
✅ Logout functionality  



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

The backend uses [JSON Server](https://github.com/typicode/json-server) to mock ticket data.

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

This is a demo project.  
✅ You can sign up with any email and password to log in.

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
