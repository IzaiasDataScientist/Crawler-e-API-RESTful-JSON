class CreateProducts {

    constructor (names, prices, descriptions, stars, reviews) {
        this.names = names;
        this.prices = prices;        
        this.descriptions = descriptions;
        this.stars = stars;
        this.reviews = reviews;
    }

    _createProducts() {
        return this.prices.map((price, index) => ({
            id: index + 1,
            newNameProduct: this.names[index],
            price,            
            newDescriptionProduct: this.descriptions[index],
            newStars: this.stars[index],
            newReviews: this.reviews[index]
        }));
    }
}

export { CreateProducts };