let products = []; // ประกาศตัวแปร products ในระดับ global

// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to get product details based on ID
function getProductById(id) {
    return products.find(product => product.id == id);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const productId = getQueryParam('id');
    const color = getQueryParam('color');
    const size = getQueryParam('size');
    const action = getQueryParam('action');
    
    console.log('Product ID:', productId);
    console.log('Color:', color);
    console.log('Size:', size);
    console.log('Action:', action);
    
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            console.log('Products:', products);
            const product = getProductById(productId);
            console.log('Product:', product);

            if (product) {
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-description').textContent = product.description;
                document.getElementById('product-price').textContent = product.price;
                document.getElementById('product-image').src = product.image;
                document.getElementById('product-detail').textContent = product.details;

                const colorOptionsContainer = document.getElementById('color-options');
                product.colors.forEach(productColor => {
                    const colorOption = document.createElement('div');
                    colorOption.className = 'color-option';
                    colorOption.style.backgroundColor = productColor.code;
                    colorOption.addEventListener('click', () => {
                        updateSelectedColor(productColor.name);
                    });
                    colorOptionsContainer.appendChild(colorOption);
                });

                const sizeOptionsContainer = document.getElementById('size-options');
                product.sizes.forEach(productSize => {
                    const sizeOption = document.createElement('div');
                    sizeOption.className = 'size-option';
                    sizeOption.textContent = productSize;
                    sizeOption.addEventListener('click', () => {
                        updateSelectedSize(productSize);
                    });
                    sizeOptionsContainer.appendChild(sizeOption);
                });

                if (action === 'edit') {
                    if (color) updateSelectedColor(color);
                    if (size) updateSelectedSize(size);

                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const existingItem = cart.find(item => item.id == productId && item.color == color && item.size == size);
                    if (existingItem) {
                        document.getElementById('quantityInput').value = existingItem.quantity;
                    }
                }
            } else {
                document.querySelector('#product-detail').innerHTML = '<p>Product not found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
            document.querySelector('#product-detail').innerHTML = '<p>Error loading product data.</p>';
        });
});

function updateSelectedColor(colorName) {
    document.getElementById('selected-color').textContent = colorName;
}

function updateSelectedSize(size) {
    document.getElementById('selected-size').textContent = size;
}
