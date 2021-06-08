let closeUrl = "./icons/close.svg";
let openUrl = "./icons/list.svg";


let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("touchstart", mostrarMenu);
let menu = document.getElementById("menu");
let darkWindow = document.getElementById("darkWindow");
let imagenMenu = document.getElementById("img-menu");

let headerMenu = document.getElementById("header-menu");

headerMenu.addEventListener("click", clickEnMenu);
// menu.addEventListener("touchstart", touchEnMenu);


function touchEnMenu(){
    console.log("hola mamu");
}

function clickEnMenu(evento){
    console.log(evento);
    if(evento.target.nodeName === "A"){
        let seleccion = evento.target;
        seleccion.classList.add("is-active");
        let hermanoLeft = seleccion.parentNode.previousElementSibling;
        let hermanoRigth = seleccion.parentNode.nextElementSibling;
        
        while(hermanoLeft != undefined){
            hermanoLeft = hermanoLeft.firstChild;
            hermanoLeft.classList.remove("is-active");
            hermanoLeft = hermanoLeft.parentNode.previousElementSibling;
        }

        while(hermanoRigth != undefined){
            hermanoRigth = hermanoRigth.firstChild;
            hermanoRigth.classList.remove("is-active");
            hermanoRigth = hermanoRigth.parentNode.nextElementSibling;
        }
        
        

    }
}

function mostrarMenu(evento){
    evento.preventDefault();
    imagenMenu.src = closeUrl;
    imagenMenu.width = 16;
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
    imagenMenu.width = 20;
    
    
}