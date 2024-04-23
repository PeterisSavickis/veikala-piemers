const products = [
    { id: 1, name: "Classic Shoe", price: 50, image: "classic.jpg" },
    { id: 2, name: "Sporty Shoe", price: 75, image: "yellow.jpg" },
    { id: 3, name: "Comfort Sandal", price: 40, image: "sandal.jpg" }
];

function populateProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto;">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

const cart = {};

function addToCart(productId) {
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    cart[productId]++;
    console.log(cart);  // For debugging
}

function showCart() {
    const cartDiv = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    Object.keys(cart).forEach(id => {
        const item = document.createElement('li');
        item.textContent = `${products.find(p => p.id == id).name}: ${cart[id]}`;
        cartItems.appendChild(item);
    });
    cartDiv.style.display = 'block';
}

document.getElementById('view-cart').addEventListener('click', showCart);
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart').style.display = 'none';
});

window.onload = populateProducts;
