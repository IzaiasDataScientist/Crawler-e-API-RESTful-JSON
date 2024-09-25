import { firefox } from 'playwright';

class Browser {

    constructor() {
        this.browser = null;
        this.page = null;
    }    

    async start() {
        this.browser = await firefox.launch({headless: true});
        this.page = await this.browser.newPage({
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            extraHTTPHeaders: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding':	'gzip, deflate, br',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
                'Connection': 'keep-alive',
            }
        });        
    }

    async close() {
        await this.browser.close();
    }

    async _navigateToPage(url) {
        await this.page.goto(url);
        await this.page.waitForURL(url);
        await this.page.waitForTimeout(500); 
        await this.page.setViewportSize({ width: 1080, height: 1024 }); 
    }

    async _clickIfVisible(selector) {
        const visible = await this.page.locator(selector).isVisible();
        if (visible) {
            await this.page.locator(selector).click();
        }
    }
}

export { Browser };