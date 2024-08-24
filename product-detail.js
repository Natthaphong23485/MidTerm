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


// let products = [];

// // Function to get product details based on ID
// function getProductById(id) {
//     return products.find(product => product.id == id);
// }

// // Function to get query parameter from URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Function to update selected color
// function updateSelectedColor(colorName) {
//     document.getElementById('selected-color').textContent = colorName;
// }

// // Function to update selected size
// function updateSelectedSize(size) {
//     document.getElementById('selected-size').textContent = size;
// }

// // Load product details on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const productId = getQueryParam('id');

//     fetch('products.json')
//         .then(response => response.json())
//         .then(data => {
//             products = data;
//             const product = getProductById(productId);

//             if (product) {
//                 document.getElementById('product-name').textContent = product.name;
//                 document.getElementById('product-description').textContent = product.description;
//                 document.getElementById('product-price').textContent = product.price;
//                 document.getElementById('product-image').src = product.image;
//                 document.getElementById('product-detail').textContent = product.details;

//                 // Display colors
//                 const colorOptionsContainer = document.getElementById('color-options');
//                 product.colors.forEach(color => {
//                     const colorOption = document.createElement('div');
//                     colorOption.className = 'color-option';
//                     colorOption.style.backgroundColor = color.code;
//                     colorOption.addEventListener('click', () => {
//                         updateSelectedColor(color.name);
//                     });
//                     colorOptionsContainer.appendChild(colorOption);
//                 });

//                 // Display sizes
//                 const sizeOptionsContainer = document.getElementById('size-options');
//                 product.sizes.forEach(size => {
//                     const sizeOption = document.createElement('div');
//                     sizeOption.className = 'size-option';
//                     sizeOption.textContent = size;
//                     sizeOption.addEventListener('click', () => {
//                         updateSelectedSize(size);
//                     });
//                     sizeOptionsContainer.appendChild(sizeOption);
//                 });

//                 // Add quantity input listener
//                 document.getElementById('quantityInput').addEventListener('input', function() {
//                     const quantity = this.value;
//                     console.log(`Quantity selected: ${quantity}`);
//                 });
//             } else {
//                 // Handle product not found case
//                 document.querySelector('#product-detail').innerHTML = '<p>Product not found.</p>';
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching product data:', error);
//             document.querySelector('#product-detail').innerHTML = '<p>Error loading product data.</p>';
//         });
// });
