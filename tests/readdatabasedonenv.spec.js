//ENV=staging npx playwright test
//npx playwright test-by taking qa default


// Include playwright module
import { test, expect } from '@playwright/test';
//import testData from '../test-data/qa/file.json' assert { type: 'json' }; // ✅ import JSON with assert
import testData from '../test-data/stage/testdata.json' assert { type: 'json' };


const env = process.env.ENV || 'qa';
const config = testData.environments[env];

for (const user of config.users) {
  test(`Login test for ${user.username} in ${env}`, async ({ page }) => {
    // Navigate to the env-specific URL
    await page.goto(config.url);

    // Perform login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill(user.username);
    await page.locator('#loginpassword').fill(user.password);
    await page.locator('//button[normalize-space()="Log in"]').click();

    // Verify logout button
    await expect(page.locator('#logout2')).toBeVisible();

    // Logout for clean state
    await page.locator('#logout2').click();
    await page.waitForTimeout(1000);
  });
}