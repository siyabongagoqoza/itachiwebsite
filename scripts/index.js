function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}


window.onscroll = function() {scrollFunctionNavBar()};

var topnav = document.getElementById("myTopnav");
var sticky = topnav.offsetTop;

function scrollFunctionNavBar(){
    if (window.pageYOffset >= sticky){
        topnav.classList.add("sticky");
    }else {
        topnav.classList.remove("sticky");
    }
}

//var senderEmail = document.getElementById("email")

var idsharingan = document.getElementsByClassName("isharingan");
var srcsharingan = document.getElementsByClassName('isharingan');


function changeEye() {
    
    
     console.log(srcsharingan);
     console.log(idsharingan[0].id);
    if (idsharingan[0].id == 'sharinganold'){
        srcsharingan.src = "../images/eye2.png";
        idsharingan[0].id = "sharingannew";

    } else if (idsharingan[0].id == 'sharingannew'){
        srcsharingan.src = "../images/eye1.png";
        idsharingan[0].id = "sharinganold";  
    }
}

