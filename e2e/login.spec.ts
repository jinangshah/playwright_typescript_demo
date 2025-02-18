import { test } from "playwright/test";
import LoginPage from "../pages/web/login";



test.describe('Login Tests', () => {
    
    test('Successful login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.validLogin();
        await login.loginSuccess();
    });

    test('Invalid login attempt', async ({ page }) => {
        const login = new LoginPage(page);
        await login.invalidLogin();
        await login.loginFail();
    });

    test('Verify Inventory is not visible if user is not logged in', async ({page}) => {
        const login = new LoginPage(page);
        await login.navToInventoryWithoutLogin();
    });
});
