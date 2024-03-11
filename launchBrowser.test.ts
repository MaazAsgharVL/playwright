import { chromium } from "playwright"
import { describe } from "node:test";

describe('Launch Browser', () => {
    test('Open LetCode', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.instagram.com/accounts/login/")
        await page.fill("input[name='username']", 'didevac4133')
        await page.fill("input[name='password']", 'saad.shah@2024')
        await page.click('button:text("Log in")')
        await browser.close();
    })
})