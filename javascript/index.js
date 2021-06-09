$(window).on("scroll", function(){

    if($(window).scrollTop() > $("#hola").offset().top - 50){
        $("#hola-menu").addClass("is-active");
        $("#hola-hmenu").addClass("is-active");
        

    }else{
        $("#hola-menu").removeClass("is-active");
        $("#hola-hmenu").removeClass("is-active");
        
    }

    if($(window).scrollTop() > $("#proyectos").offset().top - 50){
        $("#proyectos-menu").addClass("is-active");
        $("#hola-menu").removeClass("is-active");
        $("#proyectos-hmenu").addClass("is-active");
        $("#hola-hmenu").removeClass("is-active");

    }else{
        
        $("#proyectos-menu").removeClass("is-active");
        $("#proyectos-hmenu").removeClass("is-active");
    }

    if($(window).scrollTop() > $("#contacto").offset().top - 50){
        $("#contacto-menu").addClass("is-active");
        $("#proyectos-menu").removeClass("is-active");
        $("#contacto-hmenu").addClass("is-active");
        $("#proyectos-hmenu").removeClass("is-active");

    }else{
        
        $("#contacto-menu").removeClass("is-active");
        $("#contacto-hmenu").removeClass("is-active");
    }
    
})



let closeUrl = "./icons/close.svg";
let openUrl = "./icons/list.svg";


let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("touchstart", mostrarMenu);
let menu = document.getElementById("menu");
let darkWindow = document.getElementById("darkWindow");
let imagenMenu = document.getElementById("img-menu");

let headerMenu = document.getElementById("header-menu");

headerMenu.addEventListener("click", clickEnMenu);
menu.addEventListener("touchstart", touchEnMenu, true);



function touchEnMenu(evento){
    evento.preventDefault();
    

    
    // moverseA(evento.target.href);
    
    if(evento.target.nodeName === "A"){
        
       
        document.querySelector(evento.target.attributes[0].nodeValue).scrollIntoView({
            behavior: 'smooth'
          });
        

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

    cerrarMenu(evento);
}

function clickEnMenu(evento){
    // console.log(evento.target.attributes[0].nodeValue);
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

// function moverseA(idElemento){
//     location = idElemento;
// }


