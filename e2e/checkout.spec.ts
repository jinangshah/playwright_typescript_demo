import { test } from "playwright/test";
import CheckoutPage from "../pages/web/checkout";

test.describe('Checkout Process', () => {

    test('Checkout success with valid Shipping Info', async ({ page }) => {
        const checkout = new CheckoutPage(page);
        await checkout.verifyCart();
        await checkout.proceedToCheckout();
        await checkout.fillValidShippingInfo();
        await checkout.verifyOrderDetails();
        await checkout.verifyOrderTotal();
        await checkout.confirmOrder();
    });

    test('Checkout failed with invalid Shipping Info', async ({ page }) => {
        const checkout = new CheckoutPage(page);

        await checkout.verifyCart();
        await checkout.proceedToCheckout();
        await checkout.fillinvalidShippingInfo();
    });

});
