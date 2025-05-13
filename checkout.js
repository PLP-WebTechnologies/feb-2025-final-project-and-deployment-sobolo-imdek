const checkoutForm = document.getElementById('checkout-form');

checkoutForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = event.target.name.value;
    const address = event.target.address.value;
    const creditCard = event.target['credit-card'].value;

    alert(`Thank you, ${name}! Your order will be shipped to ${address}.`);
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});
