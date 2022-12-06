const { Browser, default: puppeteer } = require("puppeteer");

describe('Basic user flow for Website', () => {
    // visit the homepage 
    beforeAll(async () => {
      await page.goto('https://cse110-fa22-group17.github.io/cse110-fa22-group17/source/homePage.html');
    });

    it("Checking create event button exists", async () => {
        const handle = await page.$$(".plan-event-btn");
        expect(handle.length).toBe(1);
        
    })
    
    it("Checking Search bar exists", async () => {
        const handle = await page.$$(".search-bar");
        expect(handle.length).toBe(1);
    })

    it("Create event", async () => {
        const handle = '.plan-event-btn'
        await page.evaluate((handle) => document.querySelector(handle).click(), handle); 
        const title = '.eTitle';
        const org = '.eOrg';
        const desc = '.eDesc';
        const loc = '.eMedium';
        
        await page.waitForSelector(title);
        await page.type(title, "This is my title");
        

    })





});



