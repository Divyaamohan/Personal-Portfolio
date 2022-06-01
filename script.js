let menuBtn = document.getElementsByClassName("menu-btn");
let cancelBtn = document.getElementsByClassName("cancel-btn");
let navBar = document.getElementsByClassName("navbar");
menuBtn.oneclick =function(){
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents ="none";
    navBar.classList.add("active");
}
cancelBtn.oneclick =function(){
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents ="auto";  
    navBar.classList.remove("active");  
}
