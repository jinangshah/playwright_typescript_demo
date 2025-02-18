import { test } from "playwright/test";
import dashboard from "../pages/web/mainDashBoard";

test.describe('Dashboard Tests', () => {
    
    test('User is on Dashboard Page', async ({ page }) => {
        const dash = new dashboard(page);
        await dash.verifyDashBoard();
    });

    test('Verify one of the products listed', async ({ page }) => {
        const dash = new dashboard(page);
        await dash.verifyProduct();
    });

    // expect this test to fail
    test.fail('Verify cart is empty', async ({ page }) => {
        const dash = new dashboard(page);
        await dash.verifyEmptyCart();
    });
});
