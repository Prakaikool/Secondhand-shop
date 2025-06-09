# Shupa Shupa Secondhand Shop

This project is a **fullstack e-commerce** web app built to sell secondhand clothes from my own wardrobe. The project promotes sustainability and aims to reduce fast fashion by giving garments a second life.
Users can browse available items, view product details, and add them to a shopping cart. The admin interface **(hidden from public view)** allows me to upload and manage listings.

## Target Audience

This project is intended for:

- Customers interested in buying secondhand clothes
- Admin users who manage the product inventory
- Developers who want to explore a basic fullstack e-commerce implementation

---

## Features

### User
- Browse all products with name, price, image, and stock
- Filter products by category
- Search by product name or category
- Add items to cart (with cart total and quantity)
- Disable "Add to Cart" for out of stock products
- View individual product detail pages

### Admin
- Login with admin credentials
- Add new products with image upload
- Edit and delete existing products
- See a product count summary
- Logout with confirmation popup
- Access protected admin dashboard

---

## Technologies

### Frontend
- React (Vite)
- React Router
- Context API (shopping cart)
- Custom CSS styling
- Cloudinary (for optional hosted images)

### Backend
- Node.js with Express
- PostgreSQL (via `pg`)
- Multer (for local file uploads)
- CORS

### Database
PostgreSQL:
- `products` – all product data
- `categories` – product categorization
- `users` – admin user authentication

---

## Screenshots

### Home Page

![Image](https://github.com/user-attachments/assets/ca32bd33-a3dd-4574-85a0-98013459d2df)

### Admin Dashboard

![Image](https://github.com/user-attachments/assets/3871bda3-523a-48b6-aa73-61bde1b06ea5)

---

### Shopping Cart

![Image](https://github.com/user-attachments/assets/8a9902a2-dfea-4888-a2dc-c505a7a6120c)
---

### Product Detail

![Image](https://github.com/user-attachments/assets/b9f30c26-b153-4f0e-b1a8-fed3710f3da2)

---

### New Product Listings

![Image](https://github.com/user-attachments/assets/24a8b691-9da9-4732-883d-86f8f4b96a72)

---

## Installation

```bash
git clone https://github.com/your-username/secondhand-shop.git
cd secondhand-shop
```

---

## Running the App Locally

### 1. Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 2. Database Setup Example

If you want others (or your future self) to recreate the database quickly:

```sql
-- PostgreSQL tables example
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC NOT NULL,
    image_url TEXT,
    size TEXT,
    stock INTEGER,
    category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'admin'
);
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

---

## Demo Admin Login

```txt
Email: admin@admin.com
Password: admin123
```

---

## Future Improvements

- Implement user registration and order history
- Add order checkout and confirmation
- Responsive design improvements
- Upload product images directly to Cloudinary
