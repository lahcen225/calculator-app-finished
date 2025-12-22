import { test, expect } from '@playwright/test';

test('PXL Sid-in end-to-end test', async ({ page }) => {
  // 1️⃣ Open de PXL website
  await page.goto('https://www.pxl.be/');

  // 2️⃣ Assert text: "Socials" moet aanwezig zijn
  await expect(page.getByText('Socials')).toBeVisible();

  // 3️⃣ Klik op link "sid-in"
  await page.getByRole('link', { name: /sid-in/i }).click();

  // 4️⃣ Controleer paginatitel (EXACT zoals gevraagd)
  await expect(page).toHaveTitle('SID-in | Hogeschool PXL');

  // 5️⃣ Assert visibility: "Sid-in Genk"
  await expect(page.getByText('Sid-in Genk')).toBeVisible();

  // 6️⃣ Klik op "Sid-in Genk"
  await page.getByRole('link', { name: 'Sid-in Genk' }).click();

  // 7️⃣ Assert visibility: datum
  await expect(
    page.getByText('Zaterdag 31 januari 2026')
  ).toBeVisible();
});

