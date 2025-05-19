// This class will serve as a library for IDs and XPaths
class Selectors {
    static get emptyCartTitle() { return '//android.widget.TextView[@text="Your cart is empty"]'; }
    static get yourCartTitle() { return '//android.widget.TextView[@text="YOUR CART"]'; }
    static get cartIcon() { return '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView'; }
    // Checkout Related
    static get checkoutButton() { return '~test-CHECKOUT'; }
    static get checkoutContinueButton() { return '//android.view.ViewGroup[@content-desc="test-CONTINUE"]'; }
    static get checkoutFirstName() { return '//android.widget.EditText[@content-desc="test-First Name"]'; }
    static get checkoutLastName() { return '//android.widget.EditText[@content-desc="test-Last Name"]'; }
    static get checkoutPostalCode() { return '//android.widget.EditText[@content-desc="test-Zip/Postal Code"]'; }
    static get checkoutFinishButton() { return '//android.view.ViewGroup[@content-desc="test-FINISH"]'; }

    static itemTitle(num) {
        return `(//android.widget.TextView[@content-desc="test-Item title"])[${num}]`;
    }

    static addToCart(num) {
        return `(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[${num}]`;
    }
}

export default Selectors;