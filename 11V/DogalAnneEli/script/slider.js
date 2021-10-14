function Img(){
    const myImage=new Image(); 
    myImage.closeTransformPrev();
    myImage.closeTransformNext();
}
class Image {
    closeTransformPrev(){
        var closeTransformPrev = document.getElementById("button");
        closeTransformPrev.classList.add("prev")
    }
    closeTransformNext(){
        var closeTransformNext = document.getElementById("button");
        closeTransformNext.classList.add("next")
    }
}