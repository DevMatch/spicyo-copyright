// @ts-check
const { test, expect } = require('@playwright/test');
const superagent = require('superagent')

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
});

test.describe('SPICYIO_COPYRIGHT', () => {
  // Make sure the old elements are not present
  test('REMOVE_STATIC_HTML', async ({ page }) => {
    // await expect(page.locator('.resip_section')) .not.toContainText('Homemade');
    // await expect(page.locator('.resip_section')) .not.toContainText('Noodles');
    // await expect(page.locator('.resip_section')) .not.toContainText('Egg');
    // await expect(page.locator('.resip_section')) .not.toContainText('Sushi Dizzy');
    await expect(page.locator('.copyright')).not.toContainText('2019');
  });

});

