const renk = ["Mavi", "Yeşil", "Mor"];

function sayColor(deger){
    console.log(deger);
    switch(deger){
        case 1:
            console.log(renk[0]);
            break;
        case 2:
            console.log(renk[1]);
            break;
        case 3:
            console.log(renk[2]);
            break;
        default:
            console.log("geçersiz deger")
            break;
    }
}