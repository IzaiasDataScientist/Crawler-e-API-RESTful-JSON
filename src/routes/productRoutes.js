import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

// Route to get all products
router.get('/productsAll', ProductController.getAllProducts);

// Route to get filtered and ordered Lenovo products
router.get('/productsLenovo', ProductController.getFilteredLenovoProducts);

// Route to search for products filtered by stars
router.get('/products/stars', ProductController.getProductsByStars);

// Route to search for product by ID
router.get('/products/:id', ProductController.getProductById); // Route for getting product by ID

export default router;

