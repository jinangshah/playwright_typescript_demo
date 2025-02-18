import { products } from "../data/products"

export const Elements = {
    listedProduct1: `//div[contains(text(), '${products.product1}')]`,
    listedProduct2: `//div[contains(text(), '${products.product2}')]`,
    addToCartButton: "//button[@id='add-to-cart']",
    shoppingCartCount: "//span[@class='shopping_cart_badge']",
    shoppingCartLink: "//a[@class='shopping_cart_link']",
    removeButton: "//button[@id='remove']",
    cartPageTitle: "//span[@class='title']",
    itemInfo: "//div[@class='inventory_item_name']",
    BtnCheckout: "//button[@id='checkout']",
    formFirstName: "//input[@id='first-name']",
    formLastName: "//input[@id='last'-name']",
    formPostCode: "//input[@id='postal-code']",
    BtnContinue: "//input[@id='continue']",
    BtnFinish: "//button[@id='finish']",
    orderPlacedMsg: "//h2[@class='complete-header']",
    BtnBackToHome: "button[@id='back-to-products']",
    cartItemsDiv: "//div[@class='cart_item']",
    BtnContinueShopping: "//button[@id='continue-shopping']",
    errorBlankShippingInfo: "//div[@class='error-message-container error']",
    itemPricesLocator: "//div[@class='inventory_item_price']",
    itemTotalLocator: "//div[@class='summary_subtotal_label']",
    taxTotalLocator: "//div[@class='summary_tax_label']",
    totalPriceLocator: "//div[@class='summary_total_label']"
}