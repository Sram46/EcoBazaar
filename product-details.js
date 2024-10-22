document.addEventListener('DOMContentLoaded', function() {
    const productDetails = document.getElementById('product-details');
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
  
    if (selectedProduct) {
      productDetails.innerHTML = `
        <img src="${selectedProduct.image}" alt="${selectedProduct.title}">
        <h2>${selectedProduct.title}</h2>
        <p>${selectedProduct.description}</p>
        <p><strong>Price:</strong>₹${selectedProduct.price}</p>
        <p><strong>Category:</strong> ${selectedProduct.category}</p>
        <button class="add-to-cart">Add to Cart</button>
        <button class="buy-now">Buy Now</button>
        <p><strong>Uploader Email:</strong> ${selectedProduct.uploader}</p>
        <a href="mailto:${selectedProduct.uploader}" class="contact-uploader">Contact the Uploader</a>
      `;
    }
  
    document.querySelector('.add-to-cart').addEventListener('click', function() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(selectedProduct);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart.');
      updateCartCount();
    });
  
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      document.getElementById('cart-count').textContent = `(${cart.length})`;
    }
  
    updateCartCount();
  });
  