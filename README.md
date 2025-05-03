# 🛍️ Multi-Vendor E-commerce Platform

A full-featured multivendor eCommerce web application built with **Spring Boot**, **React + TypeScript**, **Tailwind CSS**, and **MySQL**. Includes customer, seller, and admin portals — complete with payment integration and chatbot support.

---

## 🚀 Tech Stack

**Frontend:**
- React + TypeScript
- Redux Toolkit
- Tailwind CSS + MUI
- React Router DOM
- Axios
- React Chart.js
- Formik + Yup

**Backend:**
- Spring Boot
- Spring Security + JWT
- Java Mail Sender
- MySQL (JPA/Hibernate)

**Payments:**
- Stripe (global)

---

## 🎯 Features

### 👤 Customer
- Browse & search products
- Wishlist, cart & checkout
- Apply coupons
- View order history & cancel orders
- Write reviews
- Chatbot for assistance

### 🛒 Seller
- Dashboard with earnings chart
- Manage products & orders
- View transactions
- Profile management

### 🔧 Admin
- Manage sellers (approve/suspend)
- Add/edit/delete coupons
- Customize home page
- View reports & analytics

---

## 📦 Project Structure

ecommerce-backend/ --> Spring Boot backend
ecommerce-frontend/ --> React frontend
docker-compose.yml --> Combined startup


---

## 🐳 Docker Usage

### 🔧 1. Prerequisites
- Docker & Docker Compose installed
- `.env` files configured in both `frontend` and `backend` folders

### ▶️ 2. Start Application

```bash
docker-compose up --build

```
Frontend: http://localhost:3000
Backend API: http://localhost:8080/api

🧪 Sample Accounts
Customer:
Email: customer@example.com

Password: customer123

Seller:
Email: seller@example.com

Password: seller123

Admin:
Email: admin@example.com

Password: admin123