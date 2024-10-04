const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4000');
  await expect(page).toHaveTitle(/Hexo/);  // Ensure this matches the actual title
});
