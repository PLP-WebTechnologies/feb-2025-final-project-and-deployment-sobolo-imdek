let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsList = document.getElementById('cart-items-list');
const totalPriceElement = document.getElementById('total-price');

cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
});

const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
totalPriceElement.textContent = totalPrice.toFixed(2);
