class OrderProductsByPrice {
    constructor(products) {
        this.products = products;
    }

    _orderProductsByPrice() {
        return this.products.sort((a, b) => this._converterPrice(a.price) - this._converterPrice(b.price));
    }

    _converterPrice(price) {
        return parseFloat(price.replace('$', ''));
    }
}

export { OrderProductsByPrice };