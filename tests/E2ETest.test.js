const { Browser, default: puppeteer } = require("puppeteer");
jest.setTimeout(100000);

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



    it("Create 1 event", async () => {
        await createEvent();
        
        // Select the element whose text you want to compare
        const numEvents = await page.$('#numOfEvents');
        // Retrieve the text of the element and remove any leading or trailing whitespace
        const elementText = await page.evaluate(numEvents => numEvents.innerText.trim(), numEvents);
        expect(elementText).toBe("You have 1 events planned!");
    })

    it("Create 5 events", async () => {
        // Clear from previous tests.
        await page.evaluate(() => {
            localStorage.clear();
          });

        for (let index = 0; index < 5; index++) {
            await createEvent();
        }
        
        // Count HTML elements
        const numEventsHTML = await countNumberofEventHTML();
        
        // Select the element whose text you want to compare
        const numEventsText = await page.$('#numOfEvents');
        // Retrieve the text of the element and remove any leading or trailing whitespace
        const elementText = await page.evaluate(numEventsText => numEventsText.innerText.trim(), numEventsText);
        expect(elementText).toBe("You have 5 events planned!");
        expect(numEventsHTML).toBe(5);

    })


    it("Create and delete an event", async () => {
        // Clear from previous tests.
        await page.evaluate(() => {
            localStorage.clear();
          });


        await createEvent();
        await page.waitForFunction(() => document.readyState === "complete");
        const eventCard = await page.$('event-card');
        const shadow = await eventCard.getProperty("shadowRoot");
        const button1 = await shadow.$("button");
        await button1.click();
        await page.waitForFunction(() => document.readyState === "complete");
        await page.click('#edit_event');
        await page.click('#delete');

        const numEventsHTML = await countNumberofEventHTML();
        expect(numEventsHTML).toBe(0);


    })

    it("Create and edit an event", async () => {
        // Clear from previous tests.
        await page.evaluate(() => {
            localStorage.clear();
          });

        await createEvent();
        await page.waitForFunction(() => document.readyState === "complete");
        const eventCard = await page.$('event-card');
        const shadow = await eventCard.getProperty("shadowRoot");
        const button1 = await shadow.$("button");
        await button1.click();
        await page.waitForFunction(() => document.readyState === "complete");
        await page.click('#edit_event');

        const titleField = await page.$('#eTitle',);
        const orgField = await page.$('#eOrg');
        const descripField = await page.$('#eDesc');
        const locField = await page.$('#eMedium');
        const startField = await page.$('#startTime');
        const endField = await page.$('#endTime');

        const modifedTitle = 'CSE 110 Lecture';
        const modifedOrg = 'Professor Powell';
        const modifiedDescrip = 'CSE 110 Final Lecture';
        const modifiedLoc = 'WLH 2001';

        // Clear exisitng text
        
    
        await titleField.click({clickCount: 3});
        
        
        
        
        await titleField.type(modifedTitle);
        await orgField.click({clickCount: 3});
        await orgField.type(modifedOrg);
        await descripField.click({clickCount: 3});
        await descripField.type(modifiedDescrip);
        await locField.click({clickCount: 3});
        await locField.type(modifiedLoc);
        
        await startField.type('12082022');
        await page.keyboard.press("Tab");
        await startField.type('0800p');

        await endField.type('12082022');
        await page.keyboard.press("Tab");
        await endField.type('1000p')
        
        await page.click('#edit');

        await page.click('#ok');

        
        
        await page.waitForFunction(() => document.readyState === "complete");
        const eventCard2 = await page.$('event-card');
        const shadow2 = await eventCard2.getProperty("shadowRoot");
        const button2 = await shadow2.$("button");
        await button2.click();
        await page.waitForFunction(() => document.readyState === "complete");
        
        
        //await button1.click();

        const editStart = await page.$('#start_date');
        const editStartText = await page.evaluate(editStart => editStart.innerText.trim(), editStart);
        expect(editStartText).toBe('Start: 12-08-2022 Time: 8:00 PM');

        const editEnd = await page.$('#end_date');
        const editEndtText = await page.evaluate(editEnd => editEnd.innerText.trim(), editEnd);
        expect(editEndtText).toBe('End: 12-08-2022 Time: 10:00 PM');

        const editOrg = await page.$('#organization');
        const editOrgText = await page.evaluate(editOrg => editOrg.innerText.trim(), editOrg);
        expect(editOrgText).toBe('Organization: ' + modifedOrg);

        const editLoc = await page.$('#location');
        const editLocText = await page.evaluate(editLoc => editLoc.innerText.trim(), editLoc);
        expect(editLocText).toBe('Location: ' + modifiedLoc);

        const editDescrip = await page.$('#description');
        const editDescripText = await page.evaluate(editDescrip => editDescrip.innerText.trim(), editDescrip);
        expect(editDescripText).toBe(modifiedDescrip)

        const editTitle = await page.$('#title');
        const editTitleText = await page.evaluate(editTitle => editTitle.innerText.trim(), editTitle);
        expect(editTitleText).toBe(modifedTitle);

        
    })




});

// Helper method to create sample data in an event.
async function createEvent() {
    await page.click('.plan-event-btn');
    const titleField = await page.$('#eTitle',);
    const orgField = await page.$('#eOrg');
    const descripField = await page.$('#eDesc');
    const locField = await page.$('#eMedium');
    const startField = await page.$('#startTime');
    const endField = await page.$('#endTime');
    
    await titleField.type('This is my title');
    await orgField.type('This is my organizer');
    await descripField.type('This is my description');
    await locField.type('This is my location');


    await startField.type('12292001');
    await page.keyboard.press("Tab");
    await startField.type('1212a');

    await endField.type('12072022');
    await page.keyboard.press("Tab");
    await endField.type('0206a');
    await page.click('.add-event-btns');
    await page.click('#ok');
}


// Helper method to count  eventCard HTML elements
async function countNumberofEventHTML() {
    const elementCount = await page.evaluate(() => {
        return document.querySelectorAll('event-card').length;
      });
    return await elementCount;
}




