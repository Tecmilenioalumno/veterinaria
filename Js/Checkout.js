window.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const total = localStorage.getItem('total') || '$0';

  const cartContainer = document.querySelector('.cart-items');
  const totalContainer = document.getElementById('total-price-checkout');

  cartItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width: 50px;" />
      <span>${item.title} x${item.quantity}</span>
      <span>${item.price}</span>
    `;
    cartContainer.appendChild(div);
  });

  totalContainer.textContent = total;
});// JavaScript Document