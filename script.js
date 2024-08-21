// // Mockup Data
// const products = [
//     { id: 1, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_13_removebg.png' },
//     { id: 2, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_1_removebg.png' },
//     { id: 3, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_25_removebg.png' },
//     { id: 4, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_14_removebg.png' },
//     { id: 5, name: 'Women\'Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_2_removebg.png' },
//     { id: 6, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_26_removebg.png' },
//     { id: 7, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_15_removebg.png' },
//     { id: 8, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_3_removebg.png' },
//     { id: 9, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_27_removebg.png' },
//     { id: 10, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_16_removebg.png' },
//     { id: 11, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_4_removebg.png' },
//     { id: 12, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_28_removebg.png' },
//     { id: 13, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_17_removebg.png' },
//     { id: 14, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_5_removebg.png' },
//     { id: 15, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_29_removebg.png' },
//     { id: 16, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_18_removebg.png' },
//     { id: 17, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_6_removebg.png' },
//     { id: 18, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_30_removebg.png' },
//     { id: 19, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_19_removebg.png' },
//     { id: 20, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_7_removebg.png' },
//     { id: 21, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_31_removebg.png' },
//     { id: 22, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_20_removebg.png' },
//     { id: 23, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_8_removebg.png' },
//     { id: 24, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_32_removebg.png' },
//     { id: 25, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_21_removebg.png' },
//     { id: 26, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_9_removebg.png' },
//     { id: 27, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_33_removebg.png' },
//     { id: 28, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_22_removebg.png' },
//     { id: 29, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_10_removebg.png' },
//     { id: 30, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_34_removebg.png' },
//     { id: 31, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_23_removebg.png' },
//     { id: 32, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_11_removebg.png' },
//     { id: 33, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_35_removebg.png' },
//     { id: 34, name: 'Men\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$19.99', category: 'men', image: './Frontend_Assets/product_24_removebg.png' },
//     { id: 35, name: 'Women\'s Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$29.99', category: 'women', image: './Frontend_Assets/product_12_removebg.png' },
//     { id: 36, name: 'Kids\' Clothes', description: 'Lorem ipsum dolor sit amet consectetur.', price: '$24.99', category: 'kids', image: './Frontend_Assets/product_36_removebg.png' },
//     // Add more products as needed
// ];

// // Function to display products
// function displayProducts(filteredProducts) {
//     const container = document.getElementById('productContainer');
//     container.innerHTML = '';

//     filteredProducts.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.className = 'col-xl-3 col-lg-4 col-md-6 mb-4 custom-max-width';
//         productCard.innerHTML = `
//         <div class="card product-card" onclick="redirectToProduct(${product.id})">
//           <div class="d-flex justify-content-center">
//             <img src="${product.image}" class="card-img-top card-img-product" alt="${product.name}">
//           </div>
//           <div class="card-body text-center">
//             <h5 class="card-title">${product.name}</h5>
//             <p class="card-text">${product.description}</p>
//             <div class="card-body text-center d-flex justify-content-between align-items-center">
//             <p class="card-text m-0"><strong class="text-success">${product.price}</strong></p>
//             <button class="btn btn-success btn-buy" onclick="addToCart(${product.id}); event.stopPropagation();">Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       `;
//         container.appendChild(productCard);
//     });
// }

// // Initial display of all products
// displayProducts(products);

// // Function to filter products by category
// function filterProducts(category) {
//     if (category === 'all') {
//         displayProducts(products);
//     } else {
//         const filteredProducts = products.filter(product => product.category === category);
//         displayProducts(filteredProducts);
//     }
// }

// // Function to handle product card click
// function redirectToProduct(productId) {
//     window.location.href = `product-detail.html?id=${productId}`;
// }

// // Function to add product to cart
// // function addToCart(productId) {
// //     alert(`Product ${productId} added to cart`);
// //     // Implement actual cart functionality here
// // }
// function addToCart() {
//     const productId = getQueryParam('id');
//     alert(`Product ${productId} added to cart`);
//     // Implement actual cart functionality here
// }

// // Function to search products
// document.getElementById('searchInput').addEventListener('input', function () {
//     const searchTerm = this.value.toLowerCase();
//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm) ||
//         product.description.toLowerCase().includes(searchTerm)
//     );
//     displayProducts(filteredProducts);
// });

// // Function to get product details based on ID
// function getProductById(id) {
//     return products.find(product => product.id == id);
// }

// // Function to get query parameter from URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Load product details on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const productId = getQueryParam('id');
//     console.log("Product ID:", productId);
//     const product = getProductById(productId);
//     // console.log("Product:", product);

//     if (product) {
//         document.getElementById('product-name').textContent = product.name;
//         document.getElementById('product-description').textContent = product.description;
//         document.getElementById('product-price').textContent = product.price;
//         document.getElementById('product-image').src = product.image;
//     } else {
//         // Handle product not found case
//         document.querySelector('.product-detail').innerHTML = '<p>Product not found.</p>';
//     }
// });