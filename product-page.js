// Function to display products
function displayProducts(filteredProducts) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-xl-3 col-lg-4 col-md-6 mb-4 custom-max-width";
    productCard.innerHTML = `
        <div class="card product-card" onclick="redirectToProduct(${product.id})">
          <div class="d-flex justify-content-center">
            <img src="${product.image}" class="card-img-top card-img-product" alt="${product.name}">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <div class="card-body text-center d-flex justify-content-between align-items-center">
            <p class="card-text m-0"><strong class="text-success">${product.price}</strong></p>
            <button id="add-to-cart-${product.id}" class="btn btn-success btn-buy">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    container.appendChild(productCard);

    // แก้ไขปุ่ม Add to Cart เพื่อเปลี่ยนเส้นทางไปยังหน้ารายละเอียดสินค้า
    document
      .getElementById(`add-to-cart-${product.id}`)
      .addEventListener("click", (event) => {
        window.location.href = `product-detail.html?id=${product.id}&action=add-to-cart`;
        event.stopPropagation();
      });

    // // Add event listener to the "Add to Cart" button
    // document.getElementById(`add-to-cart-${product.id}`).addEventListener('click', (event) => {
    //     addToCart(product.id);
    //     event.stopPropagation();
    // });
  });
}

// Function to filter products by category
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

// Function to handle product card click
function redirectToProduct(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// Function to search products
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});
