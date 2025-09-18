const {test, expect} =require('@playwright/test')


test("Soft assertions",async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    //Hard assertions
   /* await expect(page).toHaveTitle('STORE123');
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();
*/
    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})

// Write a test
test('Soft Assertions in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://www.flipkart.com/search?q=mobiles')
    

    // assert url
    await expect.soft(page).toHaveURL('https://www.flipkart.com/search?q=mobiles')

    // assert title
    await expect(page).toHaveTitle('Mobiles- Buy Products Online at Best Price in India - All Categories | Flipkart.com')
    


})