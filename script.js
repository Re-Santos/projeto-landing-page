function openNav(){
    var menu = document.getElementById("navigation")
    if(menu.className==="navigation"){
        menu.className += " menujs";
        document.getElementById("menu-icon").innerHTML="&Cross;";
    }else{
        menu.className="navigation"
        document.getElementById("menu-icon").innerHTML="&#9776;";
    }
}