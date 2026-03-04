import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between all major screens', async ({ page }) => {
    // Start at overview
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Dashboard Overview' })).toBeVisible();

    // Navigate to Competitors
    await page.getByRole('link', { name: 'Competitors' }).click();
    await expect(page.getByRole('heading', { name: 'Competitors' })).toBeVisible();

    // Navigate to Alerts
    await page.getByRole('link', { name: 'Alerts' }).click();
    await expect(page.getByRole('heading', { name: 'Alert Center' })).toBeVisible();

    // Navigate to Analytics
    await page.getByRole('link', { name: 'Analytics' }).click();
    await expect(page.getByRole('heading', { name: 'Analytics & Reporting' })).toBeVisible();

    // Navigate to Settings
    await page.getByRole('link', { name: 'Settings' }).click();
    await expect(page.getByRole('heading', { name: 'Settings & Account' })).toBeVisible();
  });
});
