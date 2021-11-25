var y=0;
document.addEventListener("scroll", fixed);
function fixed(){
    console.log(y);
    document.getElementById("demo").innerHTML = "Hello World";
    // document.getElementById("fixed").style.display="block";
}