# 🚀 AutoLeads.ai

### AI Lead Generation & Sales Automation System

> Turn website visitors into **qualified leads** and convert them into **paying customers — automatically**

---

## 🎯 What This Product Actually Does

AutoLeads.ai is built to solve one core business problem:

> ❌ Businesses don’t get enough leads
> ❌ Even when they do, they don’t convert them

👉 This system fixes BOTH.

---

## 💡 Core Outcome

```text
More Traffic → More Leads → Faster Response → More Sales
```

---

## 🔥 What Makes This Different

Most tools:

* Capture leads ❌
* Or send messages ❌

AutoLeads.ai:

👉 **Captures + responds + follows up + converts**

---

## ⚙️ How It Works (End-to-End Flow)

```text
Visitor lands on website
        ↓
Fills form / clicks CTA
        ↓
Lead captured instantly
        ↓
WhatsApp auto-response triggered
        ↓
Follow-up continues automatically
        ↓
User books demo (Cal.com)
        ↓
Lead stored in database
        ↓
Business converts customer
```

---

## 🧩 Key Features

### 🔹 AI Lead Capture

* High-converting form
* Smart data collection
* Stores all lead info

---

### 🔹 WhatsApp Automation (Core Value)

* Instant response (< 5 seconds)
* Follow-up automation
* Lead nurturing

---

### 🔹 Booking System

* Integrated with Cal.com
* Demo scheduling
* Real-time booking data

---

### 🔹 Backend System

* Node.js + Express
* MongoDB database
* REST API

---

### 🔹 Conversion-Focused UI

* Built for **lead generation**
* Not just design — **sales optimized**

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Hosted on Vercel

### Backend

* Node.js (Express)
* MongoDB (Mongoose)
* Hosted on Render

### Integrations

* Cal.com (booking)
* WhatsApp API (planned)
* OpenAI (future)

---

## 📁 Project Structure

```bash
AutoLeads.ai/
│
├── client/          # Frontend
├── server/          # Backend
├── public/          # Assets
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone

```bash
git clone https://github.com/Nithin0000007/AutoLeads.ai.git
cd autoleads.ai
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
```

```env
VITE_API_URL=http://localhost:5000
VITE_CAL_USERNAME=your_cal_username
VITE_CAL_EVENT=demo
```

---

### 4. Run

```bash
# backend
npm run dev

# frontend
npm run dev
```

---

## 🔌 API Endpoints

### Create Lead

```
POST /api/leads
```

### Cal.com Webhook

```
POST /api/webhooks/cal
```

---

## 🔁 System Architecture

```text
Frontend → Backend API → MongoDB
               ↑
         Cal.com Webhook
```

---

## 📈 Business Value (IMPORTANT)

This system is designed to:

* Increase lead capture rate
* Reduce response time
* Improve conversion rate
* Automate manual work

---

## 🧠 Key Insight

> This is NOT a website.
> This is a **sales system disguised as software**

---

## 🚀 Future Roadmap

* WhatsApp API integration
* AI lead qualification
* Admin dashboard
* Analytics (conversion tracking)
* Multi-client SaaS

---

## ⚠️ Important Notes

* MongoDB Atlas must allow:

```
0.0.0.0/0
```

* Use:

```js
process.env.PORT
```

---

## 🤝 Contributing

PRs are welcome. For major changes, open an issue first.

---

## 👤 Author

**Nithin Kumar Meena**

---
