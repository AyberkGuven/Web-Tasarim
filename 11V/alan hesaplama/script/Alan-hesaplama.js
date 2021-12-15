function hesapla() {
    var Uzun=document.getElementById("Uzun").value;
    var Kısa=document.getElementById("Kısa").value;
    var Sonuc;
    Sonuc=Uzun*Kısa;
    if (Uzun == "" || Kısa == "") {
        alert("Bu alanı boş bırakamazsınız");
        return false;
    }
    if (isNaN(Uzun)==true || isNaN(Kısa)==true) {
        alert("sayı girniz");
        return false;
    }else{
        document.getElementById("Sonuç").style.display="block";
        document.getElementById("Sonuc").value=Sonuc;
    }
}