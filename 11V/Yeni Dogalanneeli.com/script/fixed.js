document.addEventListener("scroll", fixed);
function fixed(){
    console.log(window.scrollY);
    if (window.scrollY < 145) {
        document.getElementById("başa dön").style.display = "none";
    }else {
        document.getElementById("başa dön").style.display = "block";
    }
}
function basaDon(){
    console.log("worked");
    $('html, body').animate({scrollTop:0}, 'slow');
}

// document.addEventListener("onmouseover", basaDon);
// function basaDon(){
//     $('html, body').animate({scrollTop:0}, 'slow');
//     //window.scrollTo(0, 0);
// }