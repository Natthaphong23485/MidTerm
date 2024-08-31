document.getElementById('add-to-cart-detail').addEventListener('click', () => {
    const selectedColor = document.getElementById('selected-color').textContent.trim();
    const selectedSize = document.getElementById('selected-size').textContent.trim();
    const quantity = parseInt(document.getElementById('quantityInput').value, 10);

    if (!selectedColor || !selectedSize || !quantity || quantity <= 0) {
        alert('กรุณาเลือกสี, ขนาด และจำนวนสินค้าที่ถูกต้อง');
        return;
    }

    const productId = getQueryParam('id');
    const product = getProductById(productId);

    if (!product) {
        alert('สินค้าหมายเลขนี้ไม่พบ');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // ใช้ findIndex เพื่อตรวจสอบสินค้าที่มีอยู่ในตะกร้า
    const existingProductIndex = cart.findIndex(item =>
        item.id === product.id.toString() &&  // เปรียบเทียบเป็นสตริงเพื่อความสม่ำเสมอ
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingProductIndex > -1) {
        // อัพเดตข้อมูลสินค้าที่มีอยู่ในตะกร้า (ลบข้อมูลเก่าแล้วเพิ่มข้อมูลใหม่)
        cart.splice(existingProductIndex, 1); // ลบข้อมูลเก่าออก
    }

    // เพิ่มสินค้าข้อมูลใหม่ที่แก้ไขแล้วลงในตะกร้า
    cart.push({
        id: product.id.toString(), // แปลง id เป็นสตริงเพื่อความสม่ำเสมอ
        image: product.image,
        name: product.name,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: product.price
    });

    // บันทึกข้อมูลใหม่ใน localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('เพิ่มสินค้าในตะกร้าแล้ว');
    window.location.href = "cart.html";
});
