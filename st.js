//funicion que muestra el menu resposive
function resposiveMenu(){
    var x = document.getElementById("nav")
    if(x.className == "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}