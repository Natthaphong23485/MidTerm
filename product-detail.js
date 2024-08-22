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

// Function to update selected color
function updateSelectedColor(colorName) {
    document.getElementById('selected-color').textContent = colorName;
}

// Function to update selected size
function updateSelectedSize(size) {
    document.getElementById('selected-size').textContent = size;
}

// Load product details on page load
document.addEventListener('DOMContentLoaded', () => {
    const productId = getQueryParam('id');

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
                document.getElementById('product-detail').textContent = product.details;

                // Display colors
                const colorOptionsContainer = document.getElementById('color-options');
                product.colors.forEach(color => {
                    const colorOption = document.createElement('div');
                    colorOption.className = 'color-option';
                    colorOption.style.backgroundColor = color.code;
                    colorOption.addEventListener('click', () => {
                        updateSelectedColor(color.name);
                    });
                    colorOptionsContainer.appendChild(colorOption);
                });

                // Display sizes
                const sizeOptionsContainer = document.getElementById('size-options');
                product.sizes.forEach(size => {
                    const sizeOption = document.createElement('div');
                    sizeOption.className = 'size-option';
                    sizeOption.textContent = size;
                    sizeOption.addEventListener('click', () => {
                        updateSelectedSize(size);
                    });
                    sizeOptionsContainer.appendChild(sizeOption);
                });

                // Add quantity input listener
                document.getElementById('quantityInput').addEventListener('input', function() {
                    const quantity = this.value;
                    console.log(`Quantity selected: ${quantity}`);
                });
            } else {
                // Handle product not found case
                document.querySelector('#product-detail').innerHTML = '<p>Product not found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
            document.querySelector('#product-detail').innerHTML = '<p>Error loading product data.</p>';
        });
});