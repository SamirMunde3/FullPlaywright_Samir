
const { test, expect } = require('@playwright/test');

import fs from 'fs';
import path  from 'path';
import { parse } from 'csv-parse/sync';

const records = parse (
    fs.readFileSync(path.join(__dirname,"../test-data/qa/testdata.csv")),
    {
        columns:true,
        skip_empty_lines:true,
    });


// Run one test per user

for (const record of records) {

  test(`Data Driven Testing Using CSV in playwright ${record.username}`, async({page}) =>{
   // await page.goto('https://www.demoblaze.com/index.html');
   await page.goto(process.env.URL);

    await page.click('#login2');
    await page.fill('#loginusername', record.username);
    await page.fill('#loginpassword', record.password);
    await page.click('//button[normalize-space()="Log in"]');

    await expect(page.locator('#logout2')).toBeVisible();

    await page.click('#logout2');
    await page.waitForTimeout(1000);
  });

}