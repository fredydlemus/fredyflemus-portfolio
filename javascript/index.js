closeUrl = "./icons/close.svg";
openUrl = "./icons/list.svg";

menuButton = document.getElementById("menu-button");
menuButton.addEventListener("touchstart", mostrarMenu);
menu = document.getElementById("menu");
darkWindow = document.getElementById("darkWindow");
imagenMenu = document.getElementById("img-menu");



function mostrarMenu(evento){
    evento.preventDefault();
    imagenMenu.src = closeUrl;
    
    menu.classList.add("show");
    darkWindow.classList.add("shadow");
    darkWindow.addEventListener("touchstart", cerrarMenu);
    menuButton.addEventListener("touchstart", cerrarMenu);
}

function cerrarMenu(evento){
    evento.preventDefault();
    menu.classList.remove("show");
    darkWindow.classList.remove("shadow");
    darkWindow.removeEventListener("touchstart", cerrarMenu);
    menuButton.removeEventListener("touchstart", cerrarMenu);
    imagenMenu.src = openUrl;
    
    
}