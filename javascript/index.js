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

const $form = document.querySelector('#form');
// const $buttonMailto = document.querySelector('#mailto');

$form.addEventListener('submit', handleSubmit);
let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("touchstart", mostrarMenu);
let menu = document.getElementById("menu");
let darkWindow = document.getElementById("darkWindow");
let imagenMenu = document.getElementById("img-menu");

// projectSection.innerHTML = listProyects[0];  --- prueba



// let nuevoNodo = document.createElement('div');
// nuevoNodo.innerHTML = listProyects[0];
// nuevoNodo.classList.add("project");
// projectSection.insertBefore(nuevoNodo, contacto);


// let nuevoNodo2 = document.createElement('div');
// nuevoNodo2.innerHTML = listProyects[1];
// nuevoNodo2.classList.add("project");
// projectSection.insertBefore(nuevoNodo2, contacto);

let headerMenu = document.getElementById("header-menu");

headerMenu.addEventListener("click", clickEnMenu);
menu.addEventListener("touchstart", touchEnMenu);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    // $buttonMailto.setAttribute('href', `mailto:fredyflemus@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}`)
    // $buttonMailto.click();
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset();
        alert('Gracias por contactarme, te escribire pronto :)')
    }
}

function touchEnMenu(evento){
    // evento.preventDefault();
    

    
    // moverseA(evento.target.href);
    
    if(evento.target.nodeName === "A" && evento.target.offsetParent.nodeName != "BUTTON"){
        
       
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

    }else if(evento.target.offsetParent.nodeName === "BUTTON"){
        
        window.open('https://drive.google.com/file/d/1I1ZtD2kJoJsg0JaSoXjJ25QPBiDDvOcB/view?usp=sharing', '_blank');
    }

    cerrarMenu(evento);
}

function clickEnMenu(evento){
    // console.log(evento.target.attributes[0].nodeValue);
    if(evento.target.nodeName === "A" && evento.target.offsetParent.nodeName != "BUTTON"){
        
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





