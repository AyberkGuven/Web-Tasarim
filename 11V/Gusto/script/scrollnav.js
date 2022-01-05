document.addEventListener("scroll", scrollNav);
function scrollNav() {
    console.log(window.scrollY);
    if (window.scrollY > 133) {
        var nav = document.getElementsByClassName("nav");
        nav[0].classList.add("scroll-nav1");
        nav[0].classList.remove("scroll-nav2");
        document.getElementsByClassName("nav2")[0].style.paddingTop ="12px";
    }else{
        var nav = document.getElementsByClassName("nav");
        nav[0].classList.add("scroll-nav2");
        nav[0].classList.remove("scroll-nav");
        document.getElementsByClassName("nav2")[0].style.paddingTop ="3%";
    }
}
document.addEventListener("scroll", fixed);
function fixed(){
    console.log(window.scrollY);
    if (window.scrollY < 140) {
        document.getElementById("scroll0").style.display = "none";
    }else {
        document.getElementById("scroll0").style.display = "block";
    }
}
function scroll0(){
    console.log("worked");
    $('html, body').animate({scrollTop:0}, 'slow');
}

// function colorRed(i) {
//     if (i == 1) {
//         document.getElementById("SPECIALS").style.color ="#ff0000";
//     }
// }
// function myFunction() {
//     var element = document.getElementsByClassName("nav");
//     element[0].classList.add("mystyle");
//  }