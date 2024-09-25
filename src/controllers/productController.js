import productService from '../services/productService.js';

class ProductController {

    // Controller to search all products
    async getAllProducts(req, res) {
        try {
            const products = await productService.fetchAndProcessProducts();
            res.status(200).json({ products });
        } catch (error) {
            res.status(500).json({ message: 'Error when searching for products.', error: error.message });
        }
    }

    // Controller to search filtered and ordered Lenovo products
    async getFilteredLenovoProducts(req, res) {
        try {
            const products = await productService.fetchAndProcessProducts();
            const orderedProducts = await productService.fetchFilteredAndOrderedLenovoProducts(products);
            res.status(200).json({ orderedProducts });
        } catch (error) {
            res.status(500).json({ message: 'Error searching for Lenovo products.', error: error.message });
        }
    }

    // Controller to search for products based on stars
    async getProductsByStars(req, res) {
        const { stars } = req.query; // Gets the 'stars' parameter from the URL
    
        try {
            // Validate the stars parameter
            if (!stars) {
                return res.status(400).json({ message: 'The "stars" parameter is mandatory.' });
            }
    
            const products = await productService.fetchProductsByStars(stars);
    
            if (products.length === 0) {
                return res.status(404).json({ message: 'No products found with the specified number of stars.' });
            }
    
            res.status(200).json({ products });
        } catch (error) {
            res.status(500).json({ message: 'Error when searching for products by stars.', error: error.message });
        }
    };

    // Controller to search for product by ID
    async getProductById(req, res) {
        const { id } = req.params; 
        // Gets the product ID from the URL parameters
    
        try {
            const products = await productService.fetchAndProcessProducts();
            const product = products.find(prod => prod.id === parseInt(id));

            if (!product) {
                return res.status(404).json({ message: 'Product not found.' });
            }

            res.status(200).json({ product });
        } catch (error) {
            res.status(500).json({ message: 'Error searching for product.', error: error.message });
        }
    }
}

export default new ProductController();
