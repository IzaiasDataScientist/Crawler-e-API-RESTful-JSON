class FilterProductsLenovo {

    constructor (products) {
        this.products = products;
    }

    _filterProductsLenovo() {
        return this.products.filter(product => product.newNameProduct.includes('Lenovo'));
    }
}

export { FilterProductsLenovo };