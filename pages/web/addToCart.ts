import { Page, expect } from "@playwright/test";
import { Elements } from "../locators/cart&checkoutLocators"

export default class addToCart {
    constructor(private page: Page) { }

    public async selectProduct(){
        // simple test Navigate to Product Page
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(Elements.listedProduct1)).toBeVisible();
        await this.page.locator(Elements.listedProduct1).click();
        console.log('Selected the Product');
    }

    public async verifyAvailability(){
        // simple test to verify product is in stock
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.locator(Elements.addToCartButton)).toBeEnabled();
    }

    public async addProductToCart(){
        // simple test to add Product to cart
        await this.page.locator(Elements.listedProduct1).click();
        await expect(this.page.locator(Elements.shoppingCartCount)).toContainText('1');
        await this.page.locator(Elements.shoppingCartLink).click();
        await expect(this.page.locator(Elements.removeButton)).toBeVisible();
    }

    public async addAnotherProduct() {
        // click continue shopping and add one more product
        await this.page.locator(Elements.BtnContinueShopping).click();
        await this.page.locator(Elements.listedProduct2).click();
        // verify cart count is updated
        await expect(this.page.locator(Elements.shoppingCartCount)).toContainText('2');
        await this.page.locator(Elements.shoppingCartLink).click();
        await expect(this.page.locator(Elements.removeButton)).toBeVisible();
    }
}