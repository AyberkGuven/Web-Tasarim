function acilirText() {
    var classText=document.getElementById("yazi").innerHTML;
    if (classText  == "[Göster]") {
        document.getElementById("yazi").innerHTML="[Gizle]";
        document.getElementsByClassName("paragraf")[0].style.height= "150px";
        // myInfo.classInfo();
        // document.getElementsByClassName("hareket")[0].style.display="block";
        // document.getElementsByClassName("hareket")[0].style.transform="translate3d(0 , 150px , 0)";
        // document.getElementsByClassName("hareket")[0].style.opacity="1";
    }else {
        document.getElementById("yazi").innerHTML="[Göster]";
        document.getElementsByClassName("paragraf")[0].style.height="0";
        // myInfo.classShow();
        // document.getElementsByClassName("hareket")[0].style.display="none";
        // document.getElementsByClassName("hareket")[0].style.transform="translate3d(0 , 0 , 0)";
        // document.getElementsByClassName("hareket")[0].style.opacity="0";
    }
}
// class Info{
//     classText(){
//         var classText=document.getElementById("yazi").innerHTML;
//         if (classText == "[Göster]") {
//             document.getElementById("yazi").innerHTML="[Gizle]"; 

//         }else{
//             document.getElementById("yazi").innerHTML="[Göster]";
//         }

//         return classText;
//     }
//     classInfo(){
//         var classInfo = document.getElementById("paragraf");
//         classInfo.classList.add("info")
//     } 
//     classShow(){
//         var classShow = document.getElementById("paragraf");
//         classShow.classList.add("show")
//     }
// }