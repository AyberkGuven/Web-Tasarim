var sonraki=0;

function sliderImg(){
    if (sonraki < 6200) {
        sonraki+=1240;
        document.getElementsByClassName("img")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    } 
    console.log(sonraki);
}

function sliderImg2(){
    if (sonraki > 0) {
        sonraki-=1240;
        document.getElementsByClassName("img")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    }
    console.log(sonraki);
}
function changeImg(d){
    var image = "img/banner"+d+".jpg";
    document.getElementById("translate1").src = image;
    // document.getElementById("translate2").src = image;
    // document.getElementById("translate3").src = image;
    // document.getElementById("translate4").src = image;
    // document.getElementById("translate5").src = image;
    // document.getElementById("translate6").src = image;
}
var content2=0;

function urunImg(){
    if (content2 < 1760) {
        content2+=220;
        document.getElementsByClassName("content2 a")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    } 
    console.log(content2);
}

function urunImg2(){
    if (content > 0) {
        content-=220;
        document.getElementsByClassName("content2 a")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    }
    console.log(content);
}