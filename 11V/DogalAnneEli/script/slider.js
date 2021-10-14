function Img(){
    const myImage=new Image(); 
    myImage.closeTransformPrev();
    myImage.closeTransformNext();
}
class Image {
    closeTransformPrev(){
        var closeTransformPrev = document.getElementById("button");
        closeTransformPrev.classList.add("button-prev-1")
    }
    closeTransformNext(){
        var closeTransformNext = document.getElementById("button");
        closeTransformNext.classList.add("button-next-1")
    }
}