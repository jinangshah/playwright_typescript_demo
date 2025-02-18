import { test } from "playwright/test";
import AddToCartPage from "../pages/web/addToCart";

test.describe('Add Products to Cart Tests', () => {

    test('User should be able to select a product and add it to the cart', async ({ page }) => {
        const cart = new AddToCartPage(page);
        await cart.selectProduct();
        await cart.verifyAvailability();
        await cart.addProductToCart();
        await cart.addAnotherProduct();
    });
});
