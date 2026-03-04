import { test, expect } from '@playwright/test';

test.describe('Dashboard Features', () => {
  test('Overview dashboard should show stats', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Active Monitors')).toBeVisible();
    await expect(page.getByText('1,245')).toBeVisible();
    await expect(page.getByText('AI Insights')).toBeVisible();
  });

  test('Analytics dashboard should render charts', async ({ page }) => {
    await page.goto('/analytics');
    await expect(page.getByText('Market Position Matrix')).toBeVisible();
    await expect(page.getByText('Category Pricing Index')).toBeVisible();
    await expect(page.getByText('Share of Voice')).toBeVisible();
  });

  test('Alerts dashboard should show high priority items', async ({ page }) => {
    await page.goto('/alerts');
    await expect(page.getByText('Alert Center')).toBeVisible();
    // Assuming mock data exists
    await expect(page.getByText('Sony WH-1000XM4')).toBeVisible();
  });
});
