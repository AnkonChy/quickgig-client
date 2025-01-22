# QuickGig

QuickGig is a micro-task and earning platform where users can complete small tasks, such as liking social media posts, writing reviews, or photo editing, to earn money. Buyers can post tasks, and admins oversee platform operations. Designed for efficiency and scalability, QuickGig ensures a seamless experience for workers, buyers, and admins.

![QuickGig Banner](https://via.placeholder.com/1200x400?text=QuickGig+Banner)

---

## 🚀 Features

### **For Workers**

- Browse and accept tasks.
- Submit tasks for review.
- Track task history and earnings.
- Withdraw earnings (20 coins = $1, minimum 200 coins).

### **For Buyers**

- Post tasks with specific instructions.
- Manage submissions (approve/reject).
- Track spending and task analytics.
- Purchase coins via Stripe.

### **For Admins**

- Manage users, tasks, and withdrawals.
- View platform analytics (users, payments, tasks).
- Approve/reject withdrawal requests.
- Update user roles.

---

## 🛠️ Tech Stack

### **Frontend**

- React.js (with hooks and context API)
- Tailwind CSS
- React Router for navigation

### **Backend**

- Node.js with Express.js
- MongoDB (Mongoose for schema management)
- Firebase Authentication

### **Other Tools**

- Stripe for payments
- JWT for secure route protection
- Postman for API testing

## 🌐 Live Site URL

Visit the live version of QuickGig here: [QuickGig Live Site](https://your-live-site-url.com)

---

## ⚙️ Installation

### Clone the Repository

```bash
https://github.com/your-username/quickgig.git
cd quickgig
```

### Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file in the `server` directory with:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
STRIPE_SECRET=<your-stripe-secret>
FIREBASE_API_KEY=<your-firebase-api-key>
```

### Start the Application

#### Backend

```bash
cd server
npm run dev
```

#### Frontend

```bash
cd client
npm start
```

---

## 🧪 Testing

1. Use Postman to test API endpoints.
2. Check role-based dashboards for proper access.
3. Test responsiveness on various devices.

---

## 📂 Folder Structure

```
quickgig/
├── client/              # Frontend Code
├── server/              # Backend Code
├── .gitignore           # Files to ignore in Git
├── README.md            # Project Documentation
└── package.json         # Dependency Manager
```

---

## 📊 Analytics

- **Users:** Track active workers and buyers.
- **Tasks:** Monitor pending, approved, and completed tasks.
- **Payments:** View earnings and withdrawals.

---

## 🤝 Contributions

### How to Contribute

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Added feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For queries or suggestions, feel free to contact:

- **Name:** Your Name
- **Email:** ankonchy1@gmail.com
- **GitHub:** [your-username](https://github.com/AnkonChy)

---

_Crafted with ❤️ by QuickGig Team_
