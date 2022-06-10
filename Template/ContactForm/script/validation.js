function Kontrol(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var mesaj=document.getElementById("mesaj").value;
    if (name =="" && email =="" && phone =="" && mesaj=="") {
        document.getElementById("wname").style.display="block";
        document.getElementById("wemail").style.display="block";
        document.getElementById("wphone").style.display="block";
        document.getElementById("wmesaj").style.display="block";
        return false;
    }else{
        document.getElementById("wname").style.display="none";
        document.getElementById("wemail").style.display="none";
        document.getElementById("wphone").style.display="none";
        document.getElementById("wmesaj").style.display="none";
    }
    if (name == "") {
        document.getElementById("wname").style.display="block";
    }else{
        document.getElementById("wname").style.display="none";
        document.getElementById("wemail").style.display="block";
        document.getElementById("wphone").style.display="block";
        document.getElementById("wmesaj").style.display="block";
        return false;
    }
    if (email=="") {
        document.getElementById("wemail").style.display="block";
    }else{
        document.getElementById("wemail").style.display="none";
        document.getElementById("wname").style.display="block";
        document.getElementById("wphone").style.display="block";
        document.getElementById("wmesaj").style.display="block";
        return false;
    }
    if (phone=="") {
        document.getElementById("wphone").style.display="block";
    }else{
        document.getElementById("wphone").style.display="none";
        document.getElementById("wname").style.display="block";
        document.getElementById("wemail").style.display="block";
        document.getElementById("wmesaj").style.display="block";
        return false;
    }
    if (mesaj=="") {
        document.getElementById("wmesaj").style.display="block"; 
    }else{
        document.getElementById("wmesaj").style.display="none";
        document.getElementById("wname").style.display="block";
        document.getElementById("wemail").style.display="block";
        document.getElementById("wphone").style.display="block";
        return false;
    }
    return true;
}