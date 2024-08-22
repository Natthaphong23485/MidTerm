// fetch.js
let products = [];

// Function to fetch products data from products.json
async function loadProducts() {
    try {
        const response = await fetch('./products.json'); // เปลี่ยน 'path/to/products.json' ให้ตรงกับที่อยู่ของไฟล์ JSON ของคุณ
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products = await response.json();
        displayProducts(products);
        // detailProducts(products);
        renderCart(products);
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