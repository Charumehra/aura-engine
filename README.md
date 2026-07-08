# 🚀 Aura Enterprise Engine

A scalable full-stack inventory management system built with the MERN stack. The application enables warehouse managers to efficiently manage over **50,000 inventory products** with advanced search, filtering, analytics, and real-time inventory insights.

---

## 📌 Features

### 📦 Inventory Management
- View 50,000+ inventory products
- Server-side pagination
- Product search (Name & SKU)
- Category filtering
- Price range filtering
- Low stock filtering
- Product sorting
- Full CRUD operations
- CSV Export

### 📊 Analytics Dashboard
- Total SKUs
- Total Inventory Value
- Out of Stock Items
- Inventory Value by Category (Pie Chart)
- Low Stock Products (Bar Chart)

### 🎨 Frontend
- Responsive Dashboard
- Skeleton Loading
- Server-side Pagination
- Debounced Search
- Reusable Components
- Modern UI with Tailwind CSS
- Interactive Charts using Recharts

### ⚙ Backend
- RESTful API
- Repository-Service-Controller Architecture
- MongoDB Aggregation Pipelines
- Pagination & Filtering
- Error Handling Middleware
- MongoDB Atlas Integration

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- TanStack React Table
- Recharts
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

# 📁 Project Structure

```
Aura-Enterprise-Engine
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│
└── README.md
```



# 📊 API Endpoints

## Inventory

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/inventory` | Get Products |
| POST | `/api/inventory` | Create Product |
| GET | `/api/inventory/:id` | Get Product |
| PUT | `/api/inventory/:id` | Update Product |
| DELETE | `/api/inventory/:id` | Delete Product |

---

## Analytics

| Method | Endpoint |
|---------|----------|
| GET | `/api/analytics` |

---

# 🔍 Inventory Features

- Search by Product Name
- Search by SKU
- Category Filter
- Maximum Price Filter
- Low Stock Filter
- Sorting
- Pagination
- CSV Export

---

# 📈 Dashboard Features

- Total Products
- Inventory Value
- Out of Stock Products
- Category Distribution
- Low Stock Analytics

---


# 🚀 Deployment

## Frontend

Deploy using **Vercel**

## Backend

Deploy using **Render**

