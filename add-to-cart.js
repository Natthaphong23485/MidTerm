// add-to-cart.js

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}
