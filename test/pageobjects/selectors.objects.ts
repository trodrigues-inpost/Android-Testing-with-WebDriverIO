class Selectors {
    static get emptyCartTitle() { return '//android.widget.TextView[@text="Your cart is empty"]'; }
    static get yourCartTitle() { return '//android.widget.TextView[@text="YOUR CART"]'; }
    static get cartIcon() { return '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView'; }

    static itemTitle(num) {
        return `(//android.widget.TextView[@content-desc="test-Item title"])[${num}]`;
    }

    static addToCart(num) {
        return `(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[${num}]`;
    }
}

export default Selectors;