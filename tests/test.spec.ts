// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('Loads more games on scroll', async ({ page }) => {
//   await page.goto('/');
//   const initialGameItems = page.getByTestId('game-item');
//   await expect(initialGameItems).toHaveCount(10);
//   await page.getByTestId('load-more-trigger').scrollIntoViewIfNeeded();
//   await page.waitForFunction(
//     () => document.querySelectorAll('[data-testid="game-item"]').length > 10
//   );  
//   const gameItems = page.getByTestId('game-item');
//   await expect(gameItems).toHaveCount(30);
// });
