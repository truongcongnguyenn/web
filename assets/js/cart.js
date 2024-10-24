//Hiển thị giỏ hàng
const cart = [];
let sttGH = 1;
// Cập nhật bộ chọn để phù hợp với lớp nút mới
const buttons = document.querySelectorAll('.shop-now-btn');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert('Đã thêm vào giỏ hàng!');
    const product = e.target.parentElement.parentElement;
    let productInfo = {
      index: sttGH++,
      img: product.querySelector('.img-item-uudai').src, // Cập nhật bộ chọn hình ảnh
      name: product.querySelector('.uudai-detail-text').textContent, // Cập nhật bộ chọn tiêu đề
      quantity: 1, // Cập nhật bộ chọn số lượng
      price: product.querySelector('.uudai-detail-gia').textContent,
    };
    cart.push(productInfo);
    localStorage.setItem('carts', JSON.stringify(cart));
    localStorage.setItem('sttGH', sttGH);
    showCart();
  });
});

//Thông đã gửi
$("#btnGui").click(function (e) { 
  alert("Đã gửi thông tin!");
});
