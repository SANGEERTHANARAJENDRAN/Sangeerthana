// Product Data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "https://4.imimg.com/data4/BV/MI/MY-20926192/ground-nut-11-1000x1000.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "https://i.etsystatic.com/23616083/r/il/41bff1/3551200287/il_1080xN.3551200287_8dfa.jpg" },
    { id: 3, name: "Product 3", price: 39.99, image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9531/iStock-481114390.jpg" },
  ];
  
  // Cart Array
  let cart = [];
  
  // Display Products
  const productList = document.getElementById('product-list');
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  // Update Cart
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current cart
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price.toFixed(2)}</p>
        <button class="btn" onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  }
  
  // Remove from Cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Checkout
  document.getElementById('checkout').addEventListener('click', () => {
    alert(`Thank you for your purchase! Total: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`);
    cart = [];
    updateCart();
  });
  