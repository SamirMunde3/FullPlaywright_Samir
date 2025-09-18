// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Read Env File in playwright', async({page}) =>{
    // Go to URL
    await page.goto(process.env.URL);
//    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavanol')
  await page.locator('#loginpassword').fill('test@123')
  await page.locator('//button[normalize-space()="Log in"]').click()

    console.log("Username is : "+process.env.USER_NAME);
    console.log("Password is : "+process.env.PASSWORD);

    await page.waitForTimeout(5000);

})