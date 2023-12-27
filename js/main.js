document.getElementById("NYl2").addEventListener("click", TurnOnOff);
NYlights = document.getElementById("NYl");
var clicker = 1;


function TurnOnOff(){
    if (clicker == 1){
        clicker = 0;
        NYlights.style.backgroundImage = ("url(assets/HappyNewYear/NYoff.png)");}
    else{
        clicker = 1;
        NYlights.style.backgroundImage = ("url(assets/HappyNewYear/NYon.png)");}

}