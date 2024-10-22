// Function to add a new product
document.getElementById('product-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const imageFile = document.getElementById('image').files[0];
  
    const reader = new FileReader();
    reader.onload = function() {
      const image = reader.result;
  
      const newProduct = { title, description, price, category, image };
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      storedProducts.push(newProduct);
  
      localStorage.setItem('products', JSON.stringify(storedProducts));
      alert('Product added successfully!');
      window.location.href = 'index.html'; // Redirect to home page
    };
  
    reader.readAsDataURL(imageFile);
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById('product-list');
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  
    storedProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>Price:</strong> ₹${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <label for="quantity-${product.title}">Quantity:</label>
        <input type="number" id="quantity-${product.title}" class="quantity-input" min="1" value="1">
        <button onclick="addToCart('${product.title}', ${product.price})">Add to Cart</button>
        <button onclick="buyNow('${product.title}', ${product.price})">Buy Now</button>
      `;
      productList.appendChild(productCard);
    });
  });
  
  
  // Add to cart function
  function addToCart(title, price, availableQuantity) {
    const quantityInput = document.getElementById(`quantity-${title}`).value;
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (quantityInput > availableQuantity) {
      alert('Not enough stock available!');
      return;
    }
  
    const productInCart = cartItems.find(item => item.title === title);
    if (productInCart) {
      productInCart.quantity += parseInt(quantityInput);
    } else {
      cartItems.push({ title, price, quantity: parseInt(quantityInput) });
    }
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();
    alert('Added to cart!');
  }
  
  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cartItems.length;
  }
  
  updateCartCount(); // Update cart count on page load
  
  // Buy now function
  function buyNow(title, price) {
    localStorage.setItem('checkoutItem', JSON.stringify({ title, price, quantity: 1 }));
    window.location.href = 'checkout.html';
  }
  
