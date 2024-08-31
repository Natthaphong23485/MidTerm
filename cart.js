function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart:", cart);
  const cartContainer = document.getElementById("cart-container");
  const totalContainer = document.getElementById("total-price");
  console.log("Cart Container:", cartContainer);
  console.log("Total Container:", totalContainer);
  let totalPrice = 0;

  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
        <div class="position-relative card container bg-transparent mb-3 z-0">
            <span class="position-absolute start-0 top-0 bg-light col-md-2 h-100 rounded-start z-1"></span>
            <div class="row g-0">
                <div class="col-md-2 z-2">
                    <img src="${item.image}" class="img-fluid rounded-start" alt="${item.image}">
                </div>
                <div class="col-md-10">
                    <div class="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center h-100">
                        <div class="d-flex flex-column">
                            <h3 class="align-self-center">${item.name}</h3>
                            <p>Color: ${item.color}</p>
                            <p>Size: ${item.size}</p>
                            <p>Quantity: ${item.quantity}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                        <div class="row">
                            <button class="btn btn-primary mb-2" onclick="editCartItem(${item.id}, '${item.color}', '${item.size}')">Edit</button>
                            <button class="btn btn-danger" onclick="removeCartItem(${item.id}, '${item.color}', '${item.size}')">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    cartContainer.appendChild(itemElement);
    totalPrice += item.price * item.quantity;
  });

  totalContainer.innerHTML = `
    <div class="container d-flex justify-content-between">
        <h3>Total Price: </h3><h3 class="text-success">${totalPrice}</h3>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", renderCart);

function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const address = document.getElementById("address").value;
  const postalCode = document.getElementById("postal-code").value;
  const number = document.getElementById("number").value;
  const paymentMethod = document.getElementById("payment-method").value;

  if (!address || !postalCode || !number || !paymentMethod) {
    alert("Please fill in all the required fields");
    return;
  }

  const orderDetails = {
    cart,
    address,
    postalCode,
    number,
    paymentMethod,
    totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  };

  console.log("Order placed:", orderDetails);

  localStorage.removeItem("cart");
  window.location.href = "./order-confirmation.html";
}

function editCartItem(productId, color, size) {
  window.location.href = `product-detail.html?id=${productId}&color=${color}&size=${size}&action=edit`;
}

function editCartItem(productId, color, size) {
    window.location.href = `product-detail.html?id=${productId}&color=${color}&size=${size}&action=edit`;
  }
  
  function removeCartItem(productId, color, size) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // กรอง cart เพื่อลบสินค้าที่ตรงกับ productId, color, และ size
    cart = cart.filter(item => !(item.id == productId && item.color == color && item.size == size));
    
    // บันทึก cart ที่แก้ไขกลับลงใน localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

     // เรียก renderCart เพื่ออัปเดตหน้าจอ
    renderCart();
  }