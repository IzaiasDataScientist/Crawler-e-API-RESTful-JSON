class DataCollector {
    constructor(browser, selectors) {
        this.browser = browser;
        this.selectors = selectors;
    }

    async _dataCollector() {
        let names = [], prices = [], descriptions = [], stars = [], reviews = [];

        while (true) {
            let newNames = await this.browser.page.locator(this.selectors.nameProduct).allTextContents();
            let newPrice = await this.browser.page.locator(this.selectors.prices).allTextContents();            
            let newDescriptions = await this.browser.page.locator(this.selectors.descriptionProduct).allTextContents();
            let newStars = await this.browser.page.$$eval(this.selectors.starProduct, elements => {
                return elements.map(el => el.getAttribute('data-rating'));
            });
            let newReviews = await this.browser.page.locator(this.selectors.reviewsProduct).allTextContents(); 
            
            names = names.concat(newNames);
            prices = prices.concat(newPrice);            
            descriptions = descriptions.concat(newDescriptions);
            stars = stars.concat(newStars);
            reviews = reviews.concat(newReviews);

            const hasNextPage = await this.browser.page.locator(this.selectors.nextPage).isVisible();
            if (!hasNextPage) break;

            await this.browser.page.locator(this.selectors.nextPage).click();
            await this.browser.page.waitForTimeout(250);
        }
        return { names, prices, descriptions, stars, reviews };
    }
}

export { DataCollector };
