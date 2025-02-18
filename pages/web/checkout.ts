import { Page, expect } from "@playwright/test";
import { Elements } from "../locators/cart&checkoutLocators";
import { validformInputs, invalidformInputs } from "../data/shippingInfo";
import { products } from "../data/products";

export default class dashboard {
    constructor(private page: Page) { }

    public async verifyCart(){
        // simple test to verify cart page
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.locator(Elements.cartPageTitle)).toContainText('Your Cart');
        // TO DO Passing dynamic xpaths & verifying price against the products
        await expect(this.page.locator(Elements.itemInfo)).toContainText(products.product1);
        await expect(this.page.locator(Elements.itemInfo)).toContainText(products.product2);
        console.log('Verified Cart');
    }

    public async proceedToCheckout(){
        // simple test to proceed to checkout
        await expect(this.page.locator(Elements.BtnCheckout)).toBeVisible();
        await this.page.locator(Elements.BtnCheckout).click();
        console.log('Proceeding to checkout');
    }

    public async fillValidShippingInfo(){
        // simple test to fill up shipping info
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        
        // verifying user is unable to proceed further without entering shipping information
        await this.page.locator(Elements.BtnContinue).click();
        await expect(this.page.locator(Elements.errorBlankShippingInfo)).toBeAttached();

        // now fill out valid shopping information
        await this.page.locator(Elements.formFirstName).fill(validformInputs.firstName);
        await this.page.locator(Elements.formLastName).fill(validformInputs.lastName);
        await this.page.locator(Elements.formPostCode).fill(validformInputs.psotCode);
        await this.page.locator(Elements.BtnContinue).click();
        console.log('Proceeding to Order Summary')
    }

    public async verifyOrderDetails(){
        // simple test to verify order summary
        await expect(this.page.locator(Elements.itemInfo)).toContainText(products.product1);
        await expect(this.page.locator(Elements.itemInfo)).toContainText(products.product2);
        await this.page.locator(Elements.BtnFinish).click();
        console.log('Order Placed');
    }

    public async verifyOrderTotal() {
        // Get all individual item prices
        const itemPrices = await this.page.locator(Elements.itemPricesLocator).allTextContents();
        
        // Convert price strings to numbers and calculate the total item price
        let calculatedItemTotal = 0;
        itemPrices.forEach(price => {
            calculatedItemTotal += parseFloat(price.replace("$", ""));
        })

        // Get displayed values for comparison
        const displayedItemTotal = parseFloat((await this.page.locator(Elements.itemTotalLocator).textContent())?.replace("Item total: $", "") || "0");
        const displayedTax = parseFloat((await this.page.locator(Elements.taxTotalLocator).textContent())?.replace("Tax: $", "") || "0");
        const displayedTotal = parseFloat((await this.page.locator(Elements.totalPriceLocator).textContent())?.replace("Total: $", "") || "0");

        // Calculate expected total
        const expectedTotal = calculatedItemTotal + displayedTax;

        // Verify the calculations
        expect(displayedItemTotal).toBe(calculatedItemTotal);
        expect(displayedTotal).toBe(expectedTotal);
    }

    public async confirmOrder(){
        // simple test to verify placed order
        await expect(this.page.locator(Elements.orderPlacedMsg)).toContainText('Thank you for your order!');
        await expect(this.page.locator(Elements.BtnBackToHome)).toBeVisible();
        this.page.locator(Elements.BtnBackToHome).click();
    }

    public async fillinvalidShippingInfo(){
        // simple test to fill up shipping info
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        
        // verifying user is unable to proceed further without entering shipping information
        await this.page.locator(Elements.BtnContinue).click();
        await expect(this.page.locator(Elements.errorBlankShippingInfo)).toBeAttached();

        // now fill out invalid shopping information
        // assuming form will throw an error
        await this.page.locator(Elements.formFirstName).fill(invalidformInputs.firstName);
        await this.page.locator(Elements.formLastName).fill(invalidformInputs.lastName);
        await this.page.locator(Elements.formPostCode).fill(invalidformInputs.psotCode);
        await this.page.locator(Elements.BtnContinue).click();
        await expect(this.page.locator(Elements.errorBlankShippingInfo)).toBeAttached();
        console.log('Unable to Proceed to Order Summary')
    }
}