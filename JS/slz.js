function Start(){


    window.scrollTo(0, document.documentElement.scrollHeight-document.documentElement.clientHeight);

}

function Cart(){
    window.location.replace("checkout.html");
}


function His(){
    alert(5)
}




setInterval (function ti(){

    let today = new Date()
    document.getElementById("time").innerHTML = today
    1000
})
function ti(){
    
}


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