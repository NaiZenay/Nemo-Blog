// default data 
let creationDate;
const author = document.querySelector('#author');

const back_edit_Btn = document.querySelector('#back_edit');

// inputs creacion de post 
const title_post_Input = document.querySelector('#title_post');
const body_post_Input = document.querySelector('#body_post');
const foot_post_Input = document.querySelector('#foot_post');

const cancel_Btn = document.querySelector('#cancel');
const preview_Btn = document.querySelector('#preview');

// Preview post 
const fecha_publicacion_preview = document.querySelector('#fecha_publicacion');
const titulo_publicacion_preview = document.querySelector('#titulo_publicacion');

const cuerpo_publicacion_preview = document.querySelector('#cuerpo_publicacion');
const contador_char = document.querySelector('#contador_char');
const body_post_alert=document.querySelector('#body_post_alert');

const pie_publicacion_preview = document.querySelector('#pie_publicacion');
const autor_post_preview = document.querySelector('#autor_post');
const autor_post_repsonsive = document.querySelector('#autor_post_repsonsive');

const post = document.querySelector('#post');

const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

const postData = {
    titulo: null,
    cuerpo: null,
    pie: null,
    fecha: null,
    autor: author.value
}

//Editar formato TO-DO
crearPostModalBtn.addEventListener('click', () => {
    post.disabled = true;
    const fechaCreacion = new Date;
    creationDate = moment().locale('es').format('YYYY-MM-DD, h:mm');
    postData.fecha = creationDate;
});

title_post_Input.addEventListener('change', () => {
    postData.titulo = title_post_Input.value;
});

body_post_Input.addEventListener('input', (evt) => {
    contador_char.textContent = evt.target.value.length;

    if (evt.target.value.length >= 100) {
        body_post_alert.hidden=true;
        contador_char.classList.remove('text-danger');
        contador_char.classList.remove('text-warning');
        contador_char.classList.add('textoV2');
    } else if (evt.target.value.length >= 50) {
        body_post_alert.hidden=false;
        contador_char.classList.remove('text-danger');
        contador_char.classList.remove('textoV2');
        contador_char.classList.add('text-warning');
    } else {
        contador_char.classList.add('text-danger');
        contador_char.classList.remove('textoV2');
        contador_char.classList.remove('text-warning');

    }

    postData.cuerpo = body_post_Input.value;
});

foot_post_Input.addEventListener('change', () => {
    postData.pie = foot_post_Input.value;

});

preview_Btn.addEventListener('click', () => {
    console.log(postData);
    post.disabled = true;
    llenarPreview();
    validarCamposPost();
})

back_edit_Btn.addEventListener('click', () => {
    post.disabled = true;
    validarCamposPost();
})
cancel_Btn.addEventListener('click', () => {
    resetPostData();
})

function llenarPreview() {
    fecha_publicacion_preview.textContent = postData.fecha;
    titulo_publicacion_preview.textContent = postData.titulo;
    cuerpo_publicacion_preview.textContent = postData.cuerpo;
    pie_publicacion_preview.textContent = postData.pie;
    autor_post_preview.textContent = postData.autor;
    autor_post_repsonsive.textContent = postData.autor;
}


function validarCamposPost() {
    if (postData.titulo.length != 0 &&
        postData.cuerpo.length > 100) {
        post.disabled = false;
    }
}

function resetPostData() {
    postData.cuerpo = null;
    postData.fecha = null;
    postData.pie = null;
    postData.titulo = null;

    title_post_Input.value = null;
    body_post_Input.value = null;
    foot_post_Input.value = null;
}



