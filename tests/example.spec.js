// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('menu link exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check that the "Get started" link is present in the menu.
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});

test('article heading exists', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have an article heading.
  // Adjust this selector if the actual article heading is different.
  await expect(page.getByRole('heading', { name: /Installation/ })).toBeVisible();
});
