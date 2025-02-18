import { Page, expect } from "@playwright/test";
import { Elements as dashLocators} from "../locators/dashboardLocators"
import { Elements as cartLocators } from "../locators/cart&checkoutLocators";

export default class dashboard {
    constructor(private page: Page) { }

    public async verifyDashBoard(){
        // simple test to verify DashBoard & its contents
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(dashLocators.pageTitle)).toContainText('Swag Labs');
        await expect(this.page.locator(dashLocators.secondaryHeader)).toBeVisible();
        await expect(this.page.locator(dashLocators.secondaryHeader)).toContainText('Products');
        console.log('Landed on the DashBoard');
    }

    public async verifyProduct(){
        // simple test to verify one of the products
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.locator(dashLocators.listedProduct)).toBeVisible();
        await expect(this.page.locator(dashLocators.listedProduct)).toContainText('Sauce Labs Backpack');
    }

    public async verifyEmptyCart() {
        // verifying user is unable to proceed to checkout with none products
        await this.page.locator(cartLocators.shoppingCartLink).click();
        await expect(this.page.locator(cartLocators.BtnCheckout)).toBeDisabled();
        await expect(this.page.locator(cartLocators.cartItemsDiv)).toBeHidden();
    }
}