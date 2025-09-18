const fs = require('fs');
const { test, expect } = require('@playwright/test');

// Read CSV as text
const fileContent = fs.readFileSync('..T', 'utf-8');

// Convert CSV to array of users
const users = fileContent
  .trim()
  .split('\n')          // split lines
  .slice(1)             // skip header
  .map(line => {
    const [username, password] = line.split(',');
    return { username, password };
  });

// Run one test per user
for (const user of users) {
  test(`Login test for ${user.username}`, async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.click('#login2');
    await page.fill('#loginusername', user.username);
    await page.fill('#loginpassword', user.password);
    await page.click('//button[normalize-space()="Log in"]');

    await expect(page.locator('#logout2')).toBeVisible();

    await page.click('#logout2');
    await page.waitForTimeout(1000);
  });
}
