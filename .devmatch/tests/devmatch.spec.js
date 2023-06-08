// @ts-check
const { test, expect } = require('@playwright/test');
const superagent = require('superagent')

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
});

test.describe('SPICYIO_COPYRIGHT', () => {
  // Make sure the old elements are not present
  test('UPDATE_YEAR', async ({ page }) => {
    await expect(page.locator('.copyright')).not.toContainText('2019');
  });

});

