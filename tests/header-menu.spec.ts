import { test, expect } from '@playwright/test';

test.describe('Header and Menu', () => {
  test('Logo is SVG and visible', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('header img.logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('src', /favicon\.svg$/);
  });

  test('Navigation links are visible and accessible', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('header nav');
    await expect(nav).toBeVisible();
    const links = nav.locator('a');
    await expect(links).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      await expect(links.nth(i)).toBeVisible();
      await expect(links.nth(i)).toHaveAttribute('tabindex', /\d*/);
    }
  });

  test('Hamburger menu appears and toggles on mobile', async ({ page, browserName }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    const hamburger = page.locator('button.hamburger');
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    const nav = page.locator('nav.nav--open');
    await expect(nav).toBeVisible();
    await hamburger.click();
    await expect(nav).not.toBeVisible();
  });

  test('Focus states and ARIA labels are present', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('button.hamburger');
    await expect(hamburger).toHaveAttribute('aria-label', /navigation menu/i);
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('aria-label', /main navigation/i);
  });
});
