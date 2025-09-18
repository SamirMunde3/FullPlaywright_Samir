// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test

test ('Mouse hover', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const mousehover=await page.locator("//button[@id='mousehover']")
    await page.waitForTimeout(5000)
    //mouse hover
    await mousehover.hover()
    await page.waitForTimeout(5000)
})

//double click
test ('Mouse Double Click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy=await page.locator('//button[normalize-space()="Copy Text"]')

    //double click
    await btnCopy.dblclick()

    const f2=await page.locator('#field2')

    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)

})

test ('Mouse Right Click', async ({page})=>{

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button=await page.locator('//span[normalize-space()="right click me"]')

    //right click action
    await button.click({button: 'right'});

    await page.waitForTimeout(5000)
   })

   

    // Go to URL
 //   await page.goto('https://www.google.com/search?q=selenium+testing');
    

    // click
    //await page.getByRole('link',{name:'Testers Talk'}).first().click();

    // double click 
    //await page.getByRole('link',{name:'Testers Talk'}).first().dblclick();

    // mouse right click
    // await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'right'})

    // mouse middle click
    //await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'middle'})

    // mouse left click
    //await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'left'})

    // mouse hover
  //  await page.locator("[aria-label='Search by voice']").hover();

  //  await page.waitForTimeout(5000);

// })

    