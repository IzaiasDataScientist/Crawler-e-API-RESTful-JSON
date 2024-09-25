import { WebScraper } from '../crawler/webScraper.js';
import { CreateProducts } from '../utils/createProducts.js';
import { FilterProductsLenovo } from '../utils/filterProductsLenovo.js';
import { OrderProductsByPrice } from '../utils/orderProductsByPrice.js';

class ProductService {
    // Function to scrape and process products
    async fetchAndProcessProducts() {
        try {
            const webScraper = new WebScraper();
            const data = await webScraper._webScraper();

            const createProducts = new CreateProducts(data.names, data.prices, data.descriptions, data.stars, data.reviews);
            return await createProducts._createProducts();
        } catch (error) {
            console.error('Error collecting and processing products:', error);
            throw new Error('Error processing data.');
        }
    }

    // Function to filter and sort Lenovo products
    async fetchFilteredAndOrderedLenovoProducts(products) {
        try {
            const filter = new FilterProductsLenovo(products);
            const productsLenovo = await filter._filterProductsLenovo();

            const orderProductsByPrice = new OrderProductsByPrice(productsLenovo);
            return await orderProductsByPrice._orderProductsByPrice();
        } catch (error) {
            console.error('Error filtering and sorting Lenovo products:', error);
            throw new Error('Error processing Lenovo products.');
        }
    }

    // Function to filter products by the minimum number of stars
    async fetchProductsByStars(stars) {
        try {
            const products = await this.fetchAndProcessProducts();

            // Filtering products by number of stars
            const filteredProducts = products.filter(produto => parseInt(produto.newStars) >= parseInt(stars));

            return filteredProducts;
        } catch (error) {
            console.error('Error filtering products by stars:', error);
            throw new Error('Error filtering products by stars:' + error.message);
    }
};
}

export default new ProductService();
