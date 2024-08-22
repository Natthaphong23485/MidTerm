let products = [];

// Function to fetch products data from products.json
async function loadProducts() {
    try {
        const response = await fetch('./products.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products = await response.json();
        // Window.products = products;
        displayProducts(products);
        // detailProducts(products);
        // renderCart();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to get a product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Load products data when the page loads
document.addEventListener('DOMContentLoaded', loadProducts);