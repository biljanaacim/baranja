var unos = document.getElementById("unos"),
    sacuvaj = document.getElementById("sacuvaj"),
    prikazi = document.getElementById("prikazi"),
    ponisti = document.getElementById("ponisti");
 

sacuvaj.addEventListener("click", function()
{
    window.localStorage["kljuc"] = unos.value;
});

prikazi.addEventListener("click", function(){
    alert(window.localStorage["kljuc"]);
});

ponisti.addEventListener("click", function(){
    window.localStorage.clear();
});

