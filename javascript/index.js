menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", mostrarMenu);
menu = document.getElementById("menu");
darkWindow = document.getElementById("darkWindow");
imagenMenu = document.getElementById("img-menu");

function mostrarMenu(){
    
    imagenMenu.src = "../icons/close.svg";
    
    menu.classList.add("show");
    darkWindow.classList.add("shadow");
    darkWindow.addEventListener("click", cerrarMenu);
    menuButton.addEventListener("click", cerrarMenu);
}

function cerrarMenu(){
    menu.classList.remove("show");
    darkWindow.classList.remove("shadow");
    darkWindow.removeEventListener("click", cerrarMenu);
    menuButton.removeEventListener("click", cerrarMenu);
    imagenMenu.src = "../icons/list.svg";
}