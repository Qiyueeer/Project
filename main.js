function Start(){
    window.scrollTo(0, document.documentElement.scrollHeight-document.documentElement.clientHeight);
}

function Cart(){
    window.location.replace("checkout.html");
}

setInterval (function ti(){

    let today = new Date()
    document.getElementById("time").innerHTML = today
    1000
})
function ti(){ 
}








const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");


searchButton.addEventListener("click", performSearch);


function performSearch() {

    const keyword = searchInput.value;


    displaySearchResults(keyword);
}


function displaySearchResults(keyword) {

    searchResults.innerHTML = "";


    const results = ["结果1", "结果2", "结果3"];


    results.forEach(result => {
        const resultElement = document.createElement("p");
        resultElement.textContent = result;
        searchResults.appendChild(resultElement);
    });}


function confirm(){
    var a = document.getElementById("last").value
    var b = document.getElementById("first").value
    var c = document.getElementById("email").value


    if(a.length > 0  && b.length > 0 && c.length > 0){
        alert("the items have been added")
    }else{
        alert("please enter you info")
    }
  
}
















let cartItems = [];


function confirm() {
    const program = document.querySelector("select[name='program']").value;
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const warrantyTime = document.querySelector("input[name='year']:checked").value;

    if (program && firstName && lastName && email && warrantyTime) {
        const item = {
            program: program,
            firstName: firstName,
            lastName: lastName,
            email: email,
            warrantyTime: warrantyTime
        };

        cartItems.push(item);
        updateCart();
    } else {
        alert("请输入所有必填信息");
    }
}


function updateCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `Program: ${item.program}, Name: ${item.firstName} ${item.lastName}, Email: ${item.email}, Warranty: ${item.warrantyTime}`;
        cartList.appendChild(listItem);
    });
}

function cart(){
    alert("the items have been added")
}



const cart = [];
    
    function updateCartTotal() {
      const totalElement = document.getElementById('cart-total');
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      totalElement.textContent = total;
    }
    
    function addItem(name, price) {
      const item = { name, price };
      cart.push(item);
      
      const cartItems = document.getElementById('cart-items');
      const li = document.createElement('li');
      li.textContent = `${name} - $${price}`;
      cartItems.appendChild(li);
      
      updateCartTotal();
    }
    
    function checkout() {
      alert('Thank you for your purchase!');
      cart.length = 0; // Clear the cart
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = ''; // Clear the cart items displayed
      updateCartTotal();
    }





















