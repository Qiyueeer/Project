let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartList");
    const totalElement = document.getElementById("totalPrice");
    cartList.innerHTML = "";

    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - 价格：$${item.price}`;
        cartList.appendChild(listItem);
    });

    totalElement.textContent = `总价格：$${totalPrice}`;
}

function goToCheckout() {
    const params = new URLSearchParams();
    params.append("cartItems", JSON.stringify(cartItems));
    params.append("totalPrice", totalPrice);
    window.location.href = `checkout.html?${params.toString()}`;
}