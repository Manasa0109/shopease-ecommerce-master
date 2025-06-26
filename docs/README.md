
# ShopEase - E-commerce Web Application

ShopEase is a modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. It provides a complete shopping experience with product browsing, cart management, and user authentication.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse through 18+ products across multiple categories
- **Search & Filter**: Search products by name, description, or category
- **Shopping Cart**: Add, remove, and manage product quantities
- **User Authentication**: Login and registration with form validation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and hover effects

### Product Categories
- Electronics (Headphones, Laptops, Smartwatches, etc.)
- Clothing (T-shirts, Jeans, Winter Jackets)
- Sports (Running Shoes, Yoga Mats, Basketball)
- Home (Coffee Makers, Table Lamps, Plant Pots)
- Accessories (Sunglasses, Wallets, Backpacks)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Navigation.tsx      # Main navigation bar
│   ├── Hero.tsx           # Landing page hero section
│   ├── ProductCard.tsx    # Individual product display
│   ├── ProductCatalog.tsx # Product listing and filtering
│   ├── FeaturedProducts.tsx # Homepage featured products
│   ├── Cart.tsx           # Shopping cart component
│   └── AuthModal.tsx      # Login/Register modal
├── pages/
│   ├── Index.tsx          # Main application page
│   └── NotFound.tsx       # 404 error page
├── types/
│   └── index.ts           # TypeScript type definitions
└── hooks/
    └── use-toast.ts       # Toast notification hook
```

## 🎯 Key Components

### Navigation
- Logo and brand name
- View toggle (Home/Shop/Cart)
- Shopping cart with item count
- User authentication status
- Responsive mobile menu

### Product Catalog
- Grid layout with responsive columns
- Search functionality across name, description, and category
- Category filtering with dropdown
- Product cards with ratings and stock information

### Shopping Cart
- Add/remove products
- Quantity adjustment
- Price calculations
- Continue shopping functionality
- Empty cart state

### Authentication
- Login and registration forms
- Form validation
- User session management
- Profile display in navigation

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## 📱 Usage Guide

### Browsing Products
1. Click "Shop Now" from the homepage or "Shop" in navigation
2. Use the search bar to find specific products
3. Filter by category using the dropdown menu
4. Click on product cards to view details

### Shopping Cart
1. Click "Add to Cart" on any product
2. View cart by clicking the cart icon in navigation
3. Adjust quantities using +/- buttons
4. Remove items with the remove button
5. Continue shopping to return to the catalog

### User Account
1. Click "Login" in the navigation
2. Choose between Login or Register tabs
3. Fill in the required information
4. Your name will appear in the navigation when logged in
5. Click "Logout" to sign out

## 🎨 Design Features

### Responsive Layout
- Mobile-first design approach
- Breakpoints for tablet and desktop
- Flexible grid systems
- Touch-friendly interface

### Visual Elements
- Modern gradient backgrounds
- Smooth hover animations
- Product image overlays
- Rating stars and stock indicators
- Toast notifications for user feedback

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color schemes

## 🔧 Customization

### Adding New Products
Edit the `sampleProducts` array in `src/pages/Index.tsx`:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  price: 99.99,
  category: "Category",
  image: "image-url",
  description: "Product description",
  stock: 25,
  rating: 4.5,
  reviews: 100
}
```

### Styling Modifications
- Colors: Update Tailwind classes throughout components
- Fonts: Modify CSS in `src/index.css`
- Layout: Adjust grid and flexbox classes
- Animations: Update transition and transform classes

## 📈 Future Enhancements

### Planned Features
- Backend API integration
- User profiles and order history
- Payment processing
- Product reviews and ratings
- Wishlist functionality
- Advanced filtering options
- Email notifications
- Admin dashboard

### Technical Improvements
- State management with Redux/Zustand
- API caching with React Query
- Progressive Web App (PWA) features
- Search engine optimization (SEO)
- Performance monitoring
- Automated testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
