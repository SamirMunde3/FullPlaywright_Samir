// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a testa
test('Take screenshot in playwright', async ({ page }) => {

    await test.step('Go to URL', async () => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    });
       //element screenshot
    await test.step('Take a element screenshot', async () => {
        await page.locator("//input[@placeholder='Username ']").screenshot({ path: './screenshots/element.png' })
    });
      //page screenshot
    await test.step('Capture a page screenshot', async () => {
        await page.screenshot({ path: './screenshots/page.png' });
    });
        //full screenshot
    await test.step('Take a full page screenshot', async () => {
        await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true });
        await page.waitForTimeout(5000);
    });
})