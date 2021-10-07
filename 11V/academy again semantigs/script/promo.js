//console.log("çalıştı");
function clossPromo(){
    //alert("çalıştır");
    //console.log("kapat fonksiyonu çalıştır.");
    document.getElementById("promo").style.display="none";
}
// var btn1=document.querySelector("#btn1");
// var header2=document.querySelector("#header2")
// header2.onclick=function(){
//     var red=Math.floor(Math.random()*255);
//     var green=Math.floor(Math.random()*255);
//     var blue=Math.floor(Math.random()*255);
//     // var color='rgb(${red} ,${green} ,${blue})';
//     // header2.style.color="color";
// document.getElementById("")
// }
function renk(){
    var red=Math.floor(Math.random()*255);
    var green=Math.floor(Math.random()*255);
    var blue=Math.floor(Math.random()*255);
    var renk="rgb(" + red + "," + green + ", " + blue + ")";
    document.getElementById("degistir").style.color=renk;
    // console.log(renk);
}