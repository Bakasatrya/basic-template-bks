function addToCart(productName) {
    const cartItems = document.getElementById("cart-items");
    const newItem = document.createElement("li");
    newItem.textContent = productName + " has been added to your cart.";
    cartItems.appendChild(newItem);
    alert(`${productName} has been added to your cart!`);
  }
  