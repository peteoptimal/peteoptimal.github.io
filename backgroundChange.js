var flipped = true;
var color = "red";
window.onload = setInterval(function(){
if(flipped){
    document.body.style.background = color;
    document.getElementById("wednesday-message").style.color = "black";
    flipped = false;
    color = "yellow";
    }
    else{
        document.body.style.background = color;
        document.getElementById("wednesday-message").style.color = "red";
        flipped = true;
        color = "red";
        }
}, 1000);