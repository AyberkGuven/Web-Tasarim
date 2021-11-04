var sonraki=0;

function linkImage(){
    if (sonraki > 0) {
        sonraki-=400;
        document.getElementsByClassName("img")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    }
    console.log(sonraki);
}

function linkImage2(){
    if (sonraki < 1600) {
        sonraki+=400;
        document.getElementsByClassName("img")[0].style.transform = "translate3d(-"+sonraki+"px, 0, 0)";
    } 
    console.log(sonraki);
}