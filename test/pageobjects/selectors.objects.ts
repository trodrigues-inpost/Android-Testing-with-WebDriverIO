// This class will serve as a library for IDs and XPaths
class Selectors {
    
    // Checkout Related
    static get checkoutButton()         { return '~test-CHECKOUT'; }
    static get checkoutContinueButton() { return '//android.view.ViewGroup[@content-desc="test-CONTINUE"]'; }
    static get checkoutFirstName()      { return '//android.widget.EditText[@content-desc="test-First Name"]'; }
    static get checkoutLastName()       { return '//android.widget.EditText[@content-desc="test-Last Name"]'; }
    static get checkoutPostalCode()     { return '//android.widget.EditText[@content-desc="test-Zip/Postal Code"]'; }
    static get checkoutFinishButton()   { return '//android.view.ViewGroup[@content-desc="test-FINISH"]'; }
    static get backHome()               { return '//android.view.ViewGroup[@content-desc="test-BACK HOME"]'; }
    
    static get toggleViewButton()       { return '//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView'; }
    
    // Error Messages
    static get errorMessage()           { return '//android.view.ViewGroup[@content-desc="test-Error message"]'; }

    // Uncategorized
    static get priceElements()          { return '//android.widget.TextView[@content-desc="test-Price"]'; }
    static get emptyCartTitle()         { return '//android.widget.TextView[@text="Your cart is empty"]'; }
    static get yourCartTitle()          { return '//android.widget.TextView[@text="YOUR CART"]'; }
    static get cartIcon()               { return '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView'; }
    
    static get productsPage()           { return '~test-PRODUCTS'; }
    
    
    // Indexed XPaths, these need parameters
    static itemTitle(num = 1)           { return `(//android.widget.TextView[@content-desc="test-Item title"])[${num}]`; }
    
    /**
     * Returns the XPath for the add to cart button when in regular view.
     * Don't use this function if the products page isn't in the regular view.
     * @param num The index of the item - Starting at 1.
     * @returns The XPath string.
     */
    static addToCart(num = 1)           { return `(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[${num}]`; }

    /**
     * Returns the XPath for the add to cart button when in LIST MODE.
     * Don't use this function if the products page isn't in list mode
     * @param num The index of the item - Starting at 1.
     * @returns The XPath string.
     */
    static addToCartLM(num?: number) {
        if (!num) {
            return '//android.widget.TextView[@text="+"]';
        }
        return `(//android.widget.TextView[@text="+"])[${num}]`;
    }
}

export default Selectors;