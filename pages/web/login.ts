import { Page, expect } from "@playwright/test";
import { Elements } from "../locators/loginLocators"
import { envLinks } from "../data/environments"
import { validLoginCredentials, invalidLoginCredentials } from "../data/loginData"

export default class loginPage {

    constructor(private page: Page) { }

    public async navigateToLoginPage() {
        await this.page.goto(envLinks.BASE_URL, { waitUntil: 'domcontentloaded', timeout: 600000 });
        await expect(this.page.locator(Elements.pageTitle)).toContainText('Swag Labs');
        console.log('Landed on Login Page');
    }

    public async validLogin() {
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(Elements.emailInput).fill(validLoginCredentials.userName);
        await this.page.locator(Elements.passwordInput).fill(validLoginCredentials.password);
        await this.page.locator(Elements.logInButton).click();
        console.log('Entered Email and Password and clicked login');
        await expect(this.page.locator(Elements.dashboard)).toContainText('Swag Labs');
        console.log('Successfully logged in and landed on Dashboard');
        await this.page.waitForLoadState('networkidle');
    }

    public async invalidLogin() {
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(Elements.emailInput).fill(invalidLoginCredentials.userName);
        await this.page.locator(Elements.passwordInput).fill(invalidLoginCredentials.password);
        await this.page.locator(Elements.logInButton).click();
        console.log('Entered Email and Password and clicked login');
        await expect(this.page.locator(Elements.errorMessage)).toBeVisible();
        console.log('Login Failed');
        await this.page.waitForLoadState('networkidle');
    }

    public async loginSuccess() {
        await expect(this.page.locator(Elements.dashboard)).toContainText('Swag Labs');
        console.log('Successfully logged in and landed on Dashboard');
        await this.page.waitForLoadState('networkidle');
    }

    public async loginFail() {
        console.log('Entered Email and Password and clicked login');
        await expect(this.page.locator(Elements.errorMessage)).toContainText('Epic sadface');
        console.log('Invalid Login');
        await this.page.waitForLoadState('networkidle');
    }

    public async navToInventoryWithoutLogin(){
        // verifying user is unable to access Inventory without logging in
        await this.page.goto(envLinks.BASE_URL);
        await expect(this.page.locator(Elements.dashboard)).not.toBeHidden();
        await expect(this.page.locator(Elements.errorMessage)).toContainText('Epic sadface');
    }
}
