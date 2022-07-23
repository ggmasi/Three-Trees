var btn = document.getElementById("notifyButton");
var form = document.getElementById("form");

function ShowForm(){
    btn.style.display = "none";
    form.style.display = "block";
    setTimeout(function(){
        form.style.marginLeft = "0px";
        form.style.transition = "0.4s";
    },5)
    
}