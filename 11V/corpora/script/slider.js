var degis=0;

function slidernext() {
    if (degis < 3642) {
        degis+=1214;
        document.getElementsByClassName("sliderici")[0].style.transform = "translate3d(-"+degis+"px, 0, 0)";
    }
    console.log(degis);
}
function sliderprev() {
    if (degis > 0) {
        degis-=1214;
        document.getElementsByClassName("sliderici")[0].style.transform = "translate3d(-"+degis+"px, 0, 0)";
    }
    console.log(degis);
}