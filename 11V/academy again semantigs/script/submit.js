// function closssubmit(){
//     document.getElementById("submit").style.display="none";
// }
function tt(){
    const myTest=new Test(); 
    ///myTest.closeAdver();
    myTest.closeTransitionOpacity();
   // myTest.closeTransitionTop();
}
class Test {
    // constructor(name, year) {
    //   this.name = name;
    //   this.year = year;
    // }
    // closeAdver() {
    //   console.log("Çalıştı");
      
    // }
    closeTransitionOpacity(){
        var closeTransitionOpacity = document.getElementById("submit");
        closeTransitionOpacity.classList.add("move")
        // document.getElementById("submit").style.transition="5s";
        // document.getElementById("submit").style.opacity="0";
    }
    // closeTransitionTop(){
    //     var closeTransitionTop = document.getElementById("submit");
    //     closeTransitionTop.classList.add("height")
    // }
}
// function height(){
//     var closeTransitionTop = document.getElementById("submit");
//     closeTransitionTop.classList.add("height")
// }