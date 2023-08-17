
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

// 更新购物车内容的函数
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