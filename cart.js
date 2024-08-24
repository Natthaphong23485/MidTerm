function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart);
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-price');
    console.log('Cart Container:', cartContainer);
    console.log('Total Container:', totalContainer);
    let totalPrice = 0;

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>Color: ${item.color}</span>
            <span>Size: ${item.size}</span>
            <span>Quantity: ${item.quantity}</span>
            <span>Price: ${item.price}</span>
            <span>Total: ${item.price * item.quantity}</span>
            <button onclick="editCartItem(${item.id}, '${item.color}', '${item.size}')">Edit</button>
        `;
        cartContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    totalContainer.textContent = `Total Price: ${totalPrice}`;
}

document.addEventListener('DOMContentLoaded', renderCart);

function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!address || !city || !postalCode || !paymentMethod) {
        alert('Please fill in all the required fields');
        return;
    }

    const orderDetails = {
        cart,
        address,
        city,
        postalCode,
        paymentMethod,
        totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    console.log('Order placed:', orderDetails);
    alert('Thank you for your order!');

    localStorage.removeItem('cart');
    window.location.href = "./order-confirmation.html";
}

function editCartItem(productId, color, size) {
    window.location.href = `product-detail.html?id=${productId}&color=${color}&size=${size}&action=edit`;
}