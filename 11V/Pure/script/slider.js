// var l = 0;
// l += 1208;
function slider(i) {
   switch (i) {
       case 1:
        //    l+=1208;
            // l==0;
            // l==0;
           document.getElementsByClassName("switch-case")[0].style.transform = "translate3d(0, 0, 0)";
           break;
       case 2:
        //    l==1208;
           document.getElementsByClassName("switch-case")[0].style.transform = "translate3d(-1208px, 0, 0)";
           break;
       case 3:
        //    l==2416;
            // l==2416;
            // l+=2416;
           document.getElementsByClassName("switch-case")[0].style.transform = "translate3d(-2416px, 0, 0)";
           break;
       default:
           break;
    } 
//    console.log(l);
   console.log(i);
}
// function slider(i){
//      var slider = "image/img-0"+i+".jpg";
//      document.getElementById("5").src = slider;
//      console.log(i);
// }