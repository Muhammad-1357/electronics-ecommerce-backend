# Electronics E-Commerce Backend

A complete backend API for an electronics e-commerce platform built with Node.js, Express, and MongoDB.

## Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ User Profile Management
- ✅ Product Catalog (CRUD operations)
- ✅ Shopping Cart
- ✅ Order Management
- ✅ Product Reviews & Ratings
- ✅ Role-Based Access Control (Customer/Admin)
- ✅ Product Filtering (by category, price, search)

## Project Structure

```
electronics-ecommerce-backend/
├── config/
│   └── db.js                 # MongoDB connection
├── models/
│   ├── User.js              # User schema
│   ├── Product.js           # Product schema
│   ├── Order.js             # Order schema
│   ├── Cart.js              # Cart schema
│   └── Review.js            # Review schema
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── productController.js # Product operations
│   ├── orderController.js   # Order operations
│   └── reviewController.js  # Review operations
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   ├── productRoutes.js     # Product endpoints
│   ├── orderRoutes.js       # Order endpoints
│   └── reviewRoutes.js      # Review endpoints
├── middleware/
│   └── auth.js              # JWT authentication & admin check
├── server.js                # Main application entry
├── package.json             # Dependencies
└── .env.example             # Environment variables template
```

## Installation

1. **Clone or copy the project**
   ```bash
   cd electronics-ecommerce-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on localhost:27017
   ```

5. **Run the server**
   ```bash
   npm start          # Production mode
   npm run dev        # Development mode with nodemon
   ```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Auth required)
- `PUT /api/auth/profile` - Update profile (Auth required)

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders
- `POST /api/orders` - Create order (Auth required)
- `GET /api/orders/user/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/status` - Update order status (Admin only)
- `GET /api/orders` - Get all orders (Admin only)

### Reviews
- `POST /api/reviews` - Create review (Auth required)
- `GET /api/reviews/product/:productId` - Get product reviews
- `DELETE /api/reviews/:reviewId` - Delete review (Admin only)

## Example Requests

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Muhammad",
    "email": "muhammad@example.com",
    "password": "password123"
  }'
```

### Create Product (Admin)
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "iPhone 15",
    "description": "Latest Apple smartphone",
    "price": 999,
    "category": "Phones",
    "brand": "Apple",
    "stock": 50
  }'
```

### Get Products with Filters
```bash
curl http://localhost:5000/api/products?category=Phones&minPrice=500&maxPrice=1500
```

## Environment Variables (.env)

```
MONGODB_URI=mongodb://localhost:27017/electronics-ecommerce
PORT=5000
JWT_SECRET=your_super_secret_key_here_change_in_production
NODE_ENV=development
```

## Technologies Used

- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-Origin Resource Sharing
- **body-parser** - Request body parsing
- **dotenv** - Environment variables
- **express-validator** - Input validation
- **multer** - File uploads (for product images)

## User Roles

- **Customer**: Can browse products, create orders, leave reviews
- **Admin**: Can manage products, view all orders, update order status

## Next Steps

1. Set up MongoDB locally or use MongoDB Atlas
2. Install dependencies: `npm install`
3. Configure `.env` file
4. Start the server
5. Test API endpoints using Postman or similar tool
6. Consider adding:
   - Payment gateway integration (Stripe, PayPal)
   - Email notifications
   - Shopping cart persistence
   - Advanced search & filtering
   - Image upload functionality

## License

ISC

