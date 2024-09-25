import { Browser } from '../browser/browser.js';
import { DataCollector } from '../utils/dataCollector.js';

class WebScraper {
    constructor() {
        this.browser = new Browser();
        this.baseUrl = 'https://webscraper.io/test-sites/e-commerce/static/computers/laptops';
        this.selectors = {
            acceptCookies: ".acceptCookies",
            prices: ".col-lg-9 > div:nth-child(2) > div > div > div > div > h4:nth-child(1)",
            nameProduct: ".col-lg-9 > div:nth-child(2) > div > div > div > div > h4:nth-child(2) > a",
            descriptionProduct: ".col-lg-9 > div:nth-child(2) > div > div > div > div:nth-child(2) > p",
            reviewsProduct: ".col-lg-9 > div:nth-child(2) > div > div > div > div:nth-child(3) > p:nth-child(1)",
            starProduct: "p[data-rating]",
            nextPage: "li.page-item:nth-child(15) > a:nth-child(1)"
        };
        this.dataCollector = new DataCollector(this.browser, this.selectors);
    }

    async _webScraper() {        
        try {  
            await this.browser.start()  
            await this.browser._navigateToPage(this.baseUrl);
            await this.browser._clickIfVisible(this.selectors.acceptCookies)
            // Collects data and stores it in a variable
            const dados = await this.dataCollector._dataCollector();

            return dados
        } catch (error) {
            console.error(`Error loading page: ${error}`);
        } finally {
            await this.browser.close();
        }
    }
}

export { WebScraper };
