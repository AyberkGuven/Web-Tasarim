function Hesaplama() {
    var Taban=document.getElementById("Taban").value;
    var Yukseklik=document.getElementById("Yükseklik").value;
    var Yaricap=document.getElementById("Yarıçap").value;
    sonuc1=Taban*Yukseklik
    sonuc2=Taban*Yukseklik/2
    sonuc3=3.14*Yaricap*Yaricap
    if (document.getElementById("DikdörtgenKareTabanı").checked) {
        document.getElementById("sonuç").innerHTML=sonuc1;
    }if (document.getElementById("ÜçgenTabanı").checked) {
        document.getElementById("sonuç").innerHTML=sonuc2;
    }if (document.getElementById("DaireTabanı").checked) {
        document.getElementById("sonuç").innerHTML=sonuc3;
    }
}
function Hesaplanacaklar(l) {
    if (l==1) {
        document.getElementsByClassName("intext1")[0].style.display="block";
        document.getElementsByClassName("intext1")[1].style.display="block";
    }else{
        document.getElementsByClassName("intext1")[0].style.display="none";
        document.getElementsByClassName("intext1")[1].style.display="none";
    }if (l==2) {
        document.getElementsByClassName("intext2")[0].style.display="block";
        document.getElementsByClassName("intext2")[1].style.display="block";
    }else{
        document.getElementsByClassName("intext2")[0].style.display="none";
        document.getElementsByClassName("intext2")[1].style.display="none";
    }
}