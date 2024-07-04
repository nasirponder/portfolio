var menu = document.getElementById("menu");
var not_show = document.getElementById("not_showing");
var showing = document.getElementById("showing");
var check = 1;
function showMenu(){
    check++;
    if (check % 2){
        menu.style.display = "none";
        not_show.style.display = "flex";
        showing.style.display = "none";
        console.log(check);
    }
    else{
        menu.style.display = "flex";
        not_show.style.display = "none";
        showing.style.display = "flex";
        console.log("nope");
    }
}