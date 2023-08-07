function Start(){


    window.scrollTo(0, document.documentElement.scrollHeight-document.documentElement.clientHeight);
}

function Cart(){
    alert(5)
}


function His(){
    alert(5)
}


var flag=true;

function show_menu(){
    var SmallMenu = document.getElementById("SmallMenu");
    if(flag){
        SmallMenu.style.display="block";
        flag = false;
    }else{
        SmallMenu.style.display="none";
        flag = true;
    }
}


function show_SmallMenu(){
    var SmallMenu = document.getElementById("SmallMenu");
    SmallMenu.style.display="none";
    flag = true;
}


