document.querySelector('.btn-buy').addEventListener('click', () => {
  const cartItems = [];
  document.querySelectorAll('.cart-box').forEach(item => {
    const title = item.querySelector('.cart-product-title').innerText;
    const price = item.querySelector('.cart-price').innerText;
    const quantity = item.querySelector('.cart-quantity').value;
    const image = item.querySelector('.cart-img').src;
    cartItems.push({ title, price, quantity, image });
  });

  const total = document.querySelector('.total-price').innerText;

  localStorage.setItem('cart', JSON.stringify(cartItems));
  localStorage.setItem('total', total);

  window.location.href = 'checkout.html';
});// JavaScript Document

