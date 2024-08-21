let products = [];

// Function to get product details based on ID
function getProductById(id) {
    return products.find(product => product.id == id);
}

// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load product details on page load
document.addEventListener('DOMContentLoaded', () => {
    const productId = getQueryParam('id');
    console.log("Product ID:", productId);

    // Fetch the mockup data
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            const product = getProductById(productId);

            if (product) {
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-description').textContent = product.description;
                document.getElementById('product-price').textContent = product.price;
                document.getElementById('product-image').src = product.image;
            } else {
                // Handle product not found case
                document.querySelector('.product-detail').innerHTML = '<p>Product not found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
            document.querySelector('.product-detail').innerHTML = '<p>Error loading product data.</p>';
        });
});
