document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>Price:</strong> $${product.price}</p>
          <button class="remove-from-cart">Remove</button>
        `;
        cartItems.appendChild(cartItem);
  
        cartItem.querySelector('.remove-from-cart').addEventListener('click', function() {
          const updatedCart = cart.filter(p => p.title !== product.title);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          alert('Product removed from cart.');
          location.reload();
        });
      });
    }
  });
  