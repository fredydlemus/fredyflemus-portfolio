const projectSection = document.getElementById("project-section");


let current_page = 1;
let rows = 3;

const pagination_element = document.createElement('div');
pagination_element.classList.add("pagenumbers");
pagination_element.id = "pagination";

function DisplayList(items, wrapper, rows_par_page, page){

    wrapper.innerHTML = "";

    let titulo = document.createElement('h2');
    titulo.classList.add("title");
    titulo.innerText = "Proyectos";
    wrapper.appendChild(titulo);

    wrapper.appendChild(pagination_element);

    let contacto = document.createElement('div');
    contacto.id = "contacto";
    wrapper.appendChild(contacto);

    page--;

    let start = rows_par_page * page;
    let end = start + rows_par_page;
    let paginatedItem = items.slice(start, end);

    for(let i = 0; i < paginatedItem.length; i++){
        let item = paginatedItem[i];

        let item_element = document.createElement('div');
        item_element.classList.add("project");
        item_element.innerHTML = item;
        wrapper.insertBefore(item_element, pagination_element);
    }


}

function setupPagination(items, wrapper, rows_par_page){
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_par_page);
    for(let i = 1; i < page_count + 1; i++){
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}


function paginationButton(page, items){
    let button = document.createElement('button');
    button.innerText = page;
    

    if(current_page == page){
        button.classList.add('active');
    }

    button.addEventListener('click', function(){
        // window.scrollTo(0, 100);
        document.getElementById("proyectos2").scrollIntoView();
        current_page = page;
        DisplayList(items, projectSection, rows, current_page);

        current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');

    })
    return button;
}

DisplayList(listProyects, projectSection, rows, current_page);
setupPagination(listProyects, pagination_element, rows);