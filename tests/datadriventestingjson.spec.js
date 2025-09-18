// Include playwright module
import { test, expect } from '@playwright/test';
import testData from '../test-data/qa/file.json' assert { type: 'json' }; // ✅ import JSON with assert

// Data-driven test (loop through users)
for (const user of testData.users) {
  test(`Data Driven Testing USING JSON: ${user.username}`, async ({ page }) => {
    // Go to URL (from JSON or .env if you want)
    //await page.goto(testData.url);
    await page.goto(process.env.url);

    // Perform login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill(user.username);
    await page.locator('#loginpassword').fill(user.password);
    await page.locator('//button[normalize-space()="Log in"]').click();

    // Verify logout button
    await expect(page.locator('#logout2')).toBeVisible();

    // Wait a bit
    await page.waitForTimeout(2000);

    // Logout for clean state
    await page.locator('#logout2').click();
    await page.waitForTimeout(2000);
  });
}
