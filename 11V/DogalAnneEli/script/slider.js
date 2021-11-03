function Img(){
    const myImage=new Image(); 
    myImage.closeTransformPrev();
    myImage.closeTransformNext();
    myImage.closeOnmouseover();
}
class Image {
    closeTransformPrev(){
        var closeTransformPrev = document.getElementById("prev");
        closeTransformPrev.classList.add("button-prev-1")
    }
    closeTransformNext(){
        var closeTransformNext = document.getElementById("next");
        closeTransformNext.classList.add("button-next-1")
    }
    closeOnmouseover(){
        var closeOnmouseover = document.getElementById("button")
    }
}
var sonraki=0;

function changeImage(){
    if (sonraki < 1600) {
        sonraki+=400;
        document.getElementsByClassName("img")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    } 
    console.log(sonraki);
}
var onceki=0;

function changeImage2(){
    if (onceki = 400) {
        onceki-=400
        document.getElementsByClassName("img")[0].style.transform = "translate3d("+onceki+"px, 0, 0)";
    }
    console.log(onceki);
}
// function changeImage(f){
//     var foto = "images/pic"+f+".jpg";
//      document.getElementById("image").src = foto;
//      //console.log(f);
// }
// function Img(f){
//     var foto = "images/pic"+f+".jpg";
//     document.getElementById("button").src = foto;
//     //console.log(f);
// }
// var x;
// function slider1(x){
//     for (var x = 0; x < 2000; x++) {
//         if (x < 2000) {
//             x++;
//         }
        
//     }
//     // if (px < 2000) {
//     //     x++;
//     // }
//     // else (px >= 2000); {
//     //     x = 0;        
//     // }
//     var px = x + "px";
//     console.log(x + " " + px)
//     document.getElementById("slide").style.right = px;
// }
// var x;
// function slider2(x){
//     var px = x + "px";
//     console.log(x + " " + px)
//     document.getElementById("slide").style.left = px;
// }