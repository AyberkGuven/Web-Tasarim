var i = 0;
function slider() {
   switch (i <= 3632) {
       case 1:
           i+=0;
           document.getElementById("1").style.transform = "translate3d(-"+i+"px, 0, 0)";
           break;
       case 2:
           i+=1208;
           document.getElementById("2").style.transform = "translate3d(-"+i+"px, 0, 0)";
           break;
       case 3:
           i+=1208;
           document.getElementById("3").style.transform = "translate3d(-"+i+"px, 0, 0)";
           break;
       default:
           break;
   } 
   console.log(i);
}