// default data 
let creationDate;
const author = document.querySelector('#author');


// inputs creacion de post 
const title_post_Input = document.querySelector('#title_post');
const body_post_Input = document.querySelector('#body_post');
const foot_post_Input = document.querySelector('#foot_post');
const tags_Select = document.querySelector('#tags_Select');
const tags_selected = document.querySelector('#tags_selected');

//Buttons
const cancel_Btn = document.querySelector('#cancel');
const preview_Btn = document.querySelector('#preview');
const back_edit_Btn = document.querySelector('#back_edit');
const post = document.querySelector('#post');


// Preview post 
const fecha_publicacion_preview = document.querySelector('#fecha_publicacion');
const titulo_publicacion_preview = document.querySelector('#titulo_publicacion');

const cuerpo_publicacion_preview = document.querySelector('#cuerpo_publicacion');
const contador_char = document.querySelector('#contador_char');
const body_post_alert = document.querySelector('#body_post_alert');

const pie_publicacion_preview = document.querySelector('#pie_publicacion');
const autor_post_preview = document.querySelector('#autor_post');
const autor_post_repsonsive = document.querySelector('#autor_post_repsonsive');

const tags_list = document.querySelector('#tags_list');
const tags_publicacion = document.querySelector('#tags_publicacion');
const tags_publicacion_Responsive = document.querySelector('#tags_publicacion_Responsive');



// const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

const postData = {
    titulo: null,
    cuerpo: null,
    pie: null,
    fecha: null,
    autor: author.value
}
const tags = ['Programacion', 'Diseño', 'Musica', 'Web', 'Emprendimiento'];
let tags_Selected = [];


//Editar formato de fecha TO-DO
crearPostModalBtn.addEventListener('click', () => {
    post.disabled = true;
    creationDate = moment().locale('es').format('YYYY-MM-DD, h:mm');
    postData.fecha = creationDate;
    llenarTagsSelect(tags);
});
title_post_Input.addEventListener('change', () => {
    postData.titulo = title_post_Input.value;
});
body_post_Input.addEventListener('input', (evt) => {
    contador_char.textContent = evt.target.value.length;
    postData.cuerpo = body_post_Input.value;
    if (evt.target.value.length === 420 || evt.target.value.length >= 30) {
        body_post_alert.hidden = true;
        contador_char.classList.remove('text-danger');
        contador_char.classList.add('textoV2');
    } else if (evt.target.value.length < 30) {
        body_post_alert.hidden = false;
    }
});
foot_post_Input.addEventListener('change', () => {
    postData.pie = foot_post_Input.value;

});
preview_Btn.addEventListener('click', () => {
    post.disabled = true;
    llenarPreview();
    validarCamposPost();
});
back_edit_Btn.addEventListener('click', () => {
    post.disabled = true;
    validarCamposPost();
});
cancel_Btn.addEventListener('click', () => {
    resetPostData();
});

tags_Select.addEventListener('change', mostrarTags);

function llenarPreview() {
    fecha_publicacion_preview.textContent = postData.fecha;
    titulo_publicacion_preview.textContent = postData.titulo;
    cuerpo_publicacion_preview.textContent = postData.cuerpo;
    pie_publicacion_preview.textContent = postData.pie;
    autor_post_preview.textContent = postData.autor;
    autor_post_repsonsive.textContent = postData.autor;
    llenarTagsPreview();
}

function validarCamposPost() {
    if (postData.titulo.length != 0 &&
        postData.cuerpo.length > 30) {
        post.disabled = false;
    }
}

function resetPostData() {
    contador_char.textContent = '0';
    postData.cuerpo = null;
    postData.fecha = null;
    postData.pie = null;
    postData.titulo = null;

    title_post_Input.value = null;
    body_post_Input.value = null;
    foot_post_Input.value = null;
}
function llenarTagsSelect(tags = []) {
    limpiarHTML(tags_Select);
    tags.forEach(option => {
        const tag = document.createElement('option');
        tag.value = option;
        tag.textContent = option;
        tags_Select.appendChild(tag);
    });
}

function mostrarTags(e) {
    const tag = document.createElement('LI');
    tags_Selected.push(e.target.value);
    tag.textContent = e.target.value;
    tags_selected.appendChild(tag);
    const btnClose = document.createElement('BUTTON');
    btnClose.classList.add('btn');
    btnClose.innerHTML = `<i class="fa-solid fa-xmark icons"></i>`;
    tag.appendChild(btnClose);

    btnClose.addEventListener('click', () => {
        tag.remove()
        tags_Selected.pop(tag);
    })

}

function llenarTagsPreview() {
    limpiarHTML(tags_publicacion);
    limpiarHTML(tags_publicacion_Responsive);
    tags_Selected.forEach(tag => {
        const li_tag = document.createElement('LI');
        li_tag.classList.add('dropdown-item','primario');
        li_tag.innerHTML=`
        <i class="fa-solid fa-tag icons"></i>
        ${tag}
        `
        tags_publicacion.appendChild(li_tag);
        tags_publicacion_Responsive.appendChild(li_tag);
    })
}

function limpiarHTML(selector){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}


// Responsive de area de creacion de tags 
document.addEventListener('DOMContentLoaded',()=>{
    if(screen.width <= 480 ){
        tags_list.classList.remove('col-7') ;
        tags_list.classList.add('col-12');   
    }else{
        tags_list.classList.remove('col-12') ;
        tags_list.classList.add('col-7'); 
    }
})

window.addEventListener('resize',()=>{
    if(screen.width <= 480 ){
        tags_list.classList.remove('col-7') ;
        tags_list.classList.add('col-12');   
    }else{
        tags_list.classList.remove('col-12') ;
        tags_list.classList.add('col-7'); 
    }
})


