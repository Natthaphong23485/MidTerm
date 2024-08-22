// Assuming this function is in the same file as fetch.js or in an accessible file
function addToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Product ${productId} added to cart`);
    } else {
        console.error('Product not found');
    }
}
