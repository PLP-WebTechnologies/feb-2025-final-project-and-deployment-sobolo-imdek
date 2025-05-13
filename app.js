let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        const productElement = event.target.closest('.product-item');
        const productId = productElement.getAttribute('data-product-id');
        const productName = productElement.querySelector('h2').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

        cart.push({ id: productId, name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.length;
    });
});

cartCount.textContent = cart.length;
