import { test, expect } from '@playwright/test';

test('bai 1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
});



test('bai 2', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).click();
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('Playwright automation');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).press('Enter');
  await expect(page.getByText('Playwright automation').first()).toBeVisible()
})
