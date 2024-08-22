function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // เคลียร์เนื้อหาเดิม
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <button class="remove-button" data-id="${item.id}">Remove</button>
        `;
        
        cartItemsContainer.appendChild(itemElement);
        
        totalPrice += item.price * item.quantity;
    });
    
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        const productId = event.target.getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
});

document.addEventListener('DOMContentLoaded', renderCart);

document.getElementById('checkout-button').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});
