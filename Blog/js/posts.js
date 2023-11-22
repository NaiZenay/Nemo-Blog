// default data 
let creationDate;
const author = document.querySelector('#author');

// inputs creacion de post 
const title_container = document.querySelector('#title_container');
const contador_char_title = document.querySelector('#contador_char_title');
const title_post_Input = document.querySelector('#title_post');

const body_container = document.querySelector('body_container');
const body_post_Input = document.querySelector('#body_post');
const contador_char_body = document.querySelector('#contador_char_body');

const foot_container = document.querySelector('#foot_container');
const foot_post_Input = document.querySelector('#foot_post');

const tags_Select = document.querySelector('#tags_Select');
const tags_selected = document.querySelector('#tags_selected');
const abrirCreacionTag = document.querySelector('#abrirCreacionTag');
const formCrearTag = document.querySelector('#formCrearTag');
const crearTagInput = document.querySelector('#crearTagInput');
const crearTagModal = document.querySelector('#crearTag');
const crearTagContainer = document.querySelector('#crearTagContainer');

//Buttons
const cancel_Btn = document.querySelector('#cancel');
const preview_Btn = document.querySelector('#preview');
const back_edit_Btn = document.querySelector('#back_edit');
const post = document.querySelector('#post');
const crearTagBtn = document.querySelector('#crearTagBtn');


//Alerts
const title_post_alert = document.querySelector('#title_post_alert');
const body_post_alert = document.querySelector('#body_post_alert');
const foot_post_alert = document.querySelector('#foot_post_alert');


// Preview post 
const fecha_publicacion_preview = document.querySelector('#fecha_publicacion');
const titulo_publicacion_preview = document.querySelector('#titulo_publicacion');
const cuerpo_publicacion_preview = document.querySelector('#cuerpo_publicacion');

const pie_publicacion_preview = document.querySelector('#pie_publicacion');
const autor_post_preview = document.querySelector('#autor_post');
const autor_post_repsonsive = document.querySelector('#autor_post_repsonsive');

const tags_list = document.querySelector('#tags_list');
const tags_publicacion = document.querySelector('#tags_publicacion');
const tags_publicacion_Responsive = document.querySelector('#tags_publicacion_Responsive');


const postData = {
    titulo: null,
    cuerpo: null,
    pie: null,
    fecha: null,
    autor: author.value
}
const camposValidados = {
    titulo: false,
    cuerpo: false,
    pie: false,
    tag: false
}
let tags = ['Tags','Programacion', 'Diseño', 'Musica', 'Web', 'Emprendimiento'];
let tags_Selected = [];



//Editar formato de fecha TO-DO
crearPostModalBtn.addEventListener('click', () => {
    post.disabled = true;
    creationDate = moment().locale('es').format('YYYY-MM-DD, h:mm');
    postData.fecha = creationDate;
    llenarTagsSelect(tags);
});
title_post_Input.addEventListener('input', () => {
    postData.titulo = title_post_Input.value;
    contador_char_title.textContent = title_post_Input.value.length;
    if ((title_post_Input.value === '' || title_post_Input.value === null || title_post_Input.value === ' ')&&(title_post_Input.value.length<0)) {
        contador_char_title.classList.add('text-danger');
        contador_char_title.classList.remove('textoV2');
        title_post_alert.hidden = false;
        camposValidados.titulo = false;
    } else {
        contador_char_title.classList.remove('text-danger');
        contador_char_title.classList.add('textoV2');
        title_post_alert.hidden = true;
        camposValidados.titulo = true;
    }

});
body_post_Input.addEventListener('input', (evt) => {

    contador_char_body.textContent = evt.target.value.length;
    postData.cuerpo = body_post_Input.value;
    if (evt.target.value.length >= 30) {
        body_post_alert.hidden = true;
        contador_char_body.classList.remove('text-danger');
        contador_char_body.classList.add('textoV2');
        camposValidados.cuerpo = true;
    } else if (evt.target.value.length < 30) {
        contador_char_body.classList.add('text-danger');
        contador_char_body.classList.remove('textoV2');
        body_post_alert.hidden = false;
        camposValidados.cuerpo = false;
    }
});
foot_post_Input.addEventListener('change', () => {
    postData.pie = foot_post_Input.value;
    if (validateLink(postData.pie) || foot_post_Input.value === null) {
        foot_post_alert.hidden = true;
        camposValidados.pie = true;
    } else {
        foot_post_alert.hidden = false;
        camposValidados.pie = false;
    }

});
preview_Btn.addEventListener('click', () => {
    llenarPreview();
});
back_edit_Btn.addEventListener('click', () => {
    post.disabled = true;
    validarCamposPost();
});
cancel_Btn.addEventListener('click', () => {
    resetPostData();
});
abrirCreacionTag.addEventListener('click', () => {
    crearTagContainer.classList.remove('no-Visible');
});
crearTagBtn.addEventListener('click', crearTag);
crearTagInput.addEventListener('input', (e) => {
    if (e.target.value === null || e.target.value === '' || e.target.value === ' ') {
        crearTagBtn.disabled = true;
    } else {
        crearTagBtn.disabled = false;
    }
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
    validarCamposPost();
}
function validarCamposPost() {
    if (camposValidados.titulo &&
        camposValidados.cuerpo &&
        camposValidados.pie &&
        camposValidados.tag
    ) {
        post.disabled = false;
    } else {
        post.disabled = true;
    }
}
function resetPostData() {
    contador_char_body.textContent = '0';
    postData.cuerpo = null;
    postData.fecha = null;
    postData.pie = null;
    postData.titulo = null;

    title_post_Input.value = null;
    body_post_Input.value = null;
    foot_post_Input.value = null;
}
function llenarTagsSelect(tags) {
    limpiarHTML(tags_Select);
    tags.forEach(option => {
        const tag = document.createElement('option');
        if(option.textContent === 'Tags') {
            option.selected = true;
            option.disabled = true;
        }
        tag.value = option;
        tag.textContent = option;
        tags_Select.appendChild(tag);
    });
}
function mostrarTags(e) {
    if(!tags_Selected.includes(e.target.value)) {
        const tag = document.createElement('LI');
        tags_Selected.push(e.target.value);
        tag.textContent = e.target.value;
        tags_selected.appendChild(tag);
        const btnClose = document.createElement('BUTTON');
        btnClose.classList.add('btn', e.target.value);
        btnClose.innerHTML = `<i class="fa-solid fa-xmark icons"></i>`;
        tag.appendChild(btnClose);
    
        btnClose.addEventListener('click', () => {
            tag.remove()
            tags_Selected.pop(tag);
            tags.push(tag.textContent);
            llenarTagsSelect(tags);
        }); 
        console.log(e.target.value  )
        tags = tags.filter((tag) => tag !== e.target.value);
        llenarTagsSelect(tags);
        console.log(tags_Selected);
        if(tags_Selected.length!==0){
            camposValidados.tag=true;
        }else{
            camposValidados.tag=false;
        }
    }

}
function llenarTagsPreview() {
    limpiarHTML(tags_publicacion);
    limpiarHTML(tags_publicacion_Responsive);
    tags_Selected.forEach(tag => {
        const li_tag = document.createElement('LI');
        li_tag.classList.add('dropdown-item', 'primario');
        li_tag.innerHTML = `
        <i class="fa-solid fa-tag icons"></i>
        ${tag}
        `
        const li_tag_Responsive = document.createElement('LI');
        li_tag_Responsive.classList.add('dropdown-item', 'primario');
        li_tag_Responsive.innerHTML = `
        <i class="fa-solid fa-tag icons"></i>
        ${tag}
        `
        tags_publicacion.appendChild(li_tag);

        tags_publicacion_Responsive.appendChild(li_tag_Responsive);
    })
}
function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}
function crearTag(e) {
    e.preventDefault();
    tags.push(crearTagInput.value);
    console.log(tags);
    llenarTagsSelect(tags);
    const mensaje = document.createElement('DIV')
    mensaje.classList.add('alert', 'alert-success');
    mensaje.textContent = `Tag "${crearTagInput.value}" creada`;
    crearTagContainer.appendChild(mensaje);
    setTimeout(() => {
        mensaje.remove();
        crearTagContainer.classList.add('no-Visible');
    }, 2000);
}
function validateLink(link) {
    const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return patronURL.test(link);
}
// Responsive de area de creacion de tags 
document.addEventListener('DOMContentLoaded', () => {
    if (screen.width <= 480) {
        tags_list.classList.remove('col-7', 'me-3');
        tags_list.classList.add('col-10', 'm-2', 'mx-auto');
        tags_Select.classList.add('ms-3');
    } else {
        tags_list.classList.remove('col-10', 'm-2', 'mx-auto');
        tags_list.classList.add('col-7', 'me-3');
        tags_Select.classList.remove('ms-3');

    }
});
window.addEventListener('resize', () => {
    if (screen.width <= 480) {
        tags_list.classList.remove('col-7', 'me-3');
        tags_list.classList.add('col-10', 'm-2', 'mx-auto');
        tags_Select.classList.add('ms-3');
    } else {
        tags_list.classList.remove('col-10', 'm-2', 'mx-auto');
        tags_list.classList.add('col-7', 'me-3');
        tags_Select.classList.remove('ms-3');

    }
});


