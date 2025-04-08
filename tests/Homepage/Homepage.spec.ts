import { test, expect } from '@playwright/test';
import { Homepage } from '../../pages/home-page';

const url = 'https://www.gov.uk/';

test('Homepage assertions', async ({ page }) => {
  await page.goto(url);
  // Confirm the title of the website.
  await expect(page).toHaveTitle('Welcome to GOV.UK');
});

test('Menu scenarios', async ({ page }) => {
    await page.goto(url);
    const menuButton = new Homepage(page);
    await menuButton.homePageMenu();
})