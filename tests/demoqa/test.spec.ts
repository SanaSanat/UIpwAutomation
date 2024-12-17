import {test as it, expect} from '@playwright/test';

it.describe('LOGIN', () => {
    it.beforeEach(async({page})=>{
        await page.goto('https://demoqa.com/books')
    })
    it('Verify authentication and log out button', async ({page, browserName}) => {
        const logOutButton = page.locator('#submit')
        await expect(logOutButton).toHaveText('Log out')
        await page.screenshot({path:`screenshot/${browserName}-profile.png`})
    });
});