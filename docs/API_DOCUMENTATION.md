
# ShopEase API Documentation

## Overview
This document outlines the current frontend data structure and future API endpoints for the ShopEase e-commerce application.

## Current Data Structure

### Product Interface
```typescript
interface Product {
  id: string;           // Unique product identifier
  name: string;         // Product name
  price: number;        // Price in USD
  category: string;     // Product category
  image: string;        // Product image URL
  description: string;  // Product description
  stock: number;        // Available quantity
  rating: number;       // Average rating (1-5)
  reviews: number;      // Number of reviews
}
```

### Cart Item Interface
```typescript
interface CartItem {
  product: Product;     // Product details
  quantity: number;     // Quantity in cart
}
```

### User Interface
```typescript
interface User {
  id: string;          // Unique user identifier
  name: string;        // User's full name
  email: string;       // User's email address
  isAdmin?: boolean;   // Admin privileges flag
}
```

## Sample Data

### Available Products
The application currently includes 18 sample products across 5 categories:

#### Electronics (6 products)
- Premium Wireless Headphones - $299.99
- Smart Fitness Watch - $199.99
- Professional Laptop - $1299.99
- Wireless Speaker - $89.99
- Gaming Mouse - $79.99

#### Clothing (3 products)
- Organic Cotton T-Shirt - $29.99
- Winter Jacket - $199.99
- Jeans - $89.99

#### Sports (3 products)
- Running Shoes - $129.99
- Yoga Mat - $39.99
- Basketball - $34.99

#### Home (3 products)
- Coffee Maker - $89.99
- Ceramic Plant Pot - $24.99
- Table Lamp - $69.99

#### Accessories (4 products)
- Designer Sunglasses - $149.99
- Leather Wallet - $49.99
- Smartphone Case - $19.99
- Backpack - $79.99

## Future API Endpoints

### Authentication Endpoints

#### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}
```

#### POST /api/auth/login
Authenticate an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}
```

### Product Endpoints

#### GET /api/products
Retrieve all products with optional filtering.

**Query Parameters:**
- `category` - Filter by category
- `search` - Search in name/description
- `limit` - Number of products per page
- `page` - Page number

**Response:**
```json
{
  "products": [
    {
      "id": "1",
      "name": "Premium Wireless Headphones",
      "price": 299.99,
      "category": "Electronics",
      "image": "image_url",
      "description": "High-quality wireless headphones",
      "stock": 15,
      "rating": 4.8,
      "reviews": 124
    }
  ],
  "total": 18,
  "page": 1,
  "totalPages": 2
}
```

#### GET /api/products/:id
Retrieve a specific product by ID.

**Response:**
```json
{
  "product": {
    "id": "1",
    "name": "Premium Wireless Headphones",
    "price": 299.99,
    "category": "Electronics",
    "image": "image_url",
    "description": "High-quality wireless headphones",
    "stock": 15,
    "rating": 4.8,
    "reviews": 124
  }
}
```

### Cart Endpoints

#### GET /api/cart
Retrieve current user's cart.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "cart": [
    {
      "product": {
        "id": "1",
        "name": "Premium Wireless Headphones",
        "price": 299.99
      },
      "quantity": 2
    }
  ],
  "total": 599.98
}
```

#### POST /api/cart/add
Add a product to cart.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "productId": "1",
  "quantity": 1
}
```

#### PUT /api/cart/update
Update product quantity in cart.

**Request Body:**
```json
{
  "productId": "1",
  "quantity": 3
}
```

#### DELETE /api/cart/remove/:productId
Remove a product from cart.

### Order Endpoints

#### POST /api/orders
Create a new order.

**Request Body:**
```json
{
  "items": [
    {
      "productId": "1",
      "quantity": 2,
      "price": 299.99
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zipCode": "12345"
  },
  "paymentMethod": "credit_card"
}
```

#### GET /api/orders
Retrieve user's order history.

**Response:**
```json
{
  "orders": [
    {
      "id": "order123",
      "date": "2024-01-15",
      "total": 599.98,
      "status": "delivered",
      "items": [
        {
          "product": {
            "name": "Premium Wireless Headphones"
          },
          "quantity": 2,
          "price": 299.99
        }
      ]
    }
  ]
}
```

## Error Handling

All API endpoints return standardized error responses:

```json
{
  "success": false,
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "The requested product was not found"
  }
}
```

### Common Error Codes
- `INVALID_CREDENTIALS` - Authentication failed
- `PRODUCT_NOT_FOUND` - Product doesn't exist
- `INSUFFICIENT_STOCK` - Not enough items in stock
- `CART_EMPTY` - Cannot checkout with empty cart
- `VALIDATION_ERROR` - Request data validation failed

## Rate Limiting
- 100 requests per minute per IP address
- 1000 requests per hour per authenticated user

## Response Format
All API responses follow a consistent format:
- Success responses include `success: true`
- Error responses include `success: false` and error details
- Data is returned in appropriate nested objects
- Timestamps are in ISO 8601 format

---

*Note: This is the planned API structure. Current implementation uses frontend state management.*
