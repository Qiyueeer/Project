const urlParams = new URLSearchParams(window.location.search);
const checkoutCartList = document.getElementById("checkoutCartList");
const checkoutTotalPrice = document.getElementById("checkoutTotalPrice");

const cartItems = JSON.parse(urlParams.get("cartItems"));
const totalPrice = parseFloat(urlParams.get("totalPrice"));

cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - 价格：$${item.price}`;
    checkoutCartList.appendChild(listItem);
});

checkoutTotalPrice.textContent = `总价格：$${totalPrice}`;