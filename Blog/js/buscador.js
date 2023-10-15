const searchBar = document.querySelector('#searchBar');
const searchByTags = document.querySelector('#searchByTag');
const searchByTitlePost = document.querySelector('#searchByTitlePost');
const searchByUser = document.querySelector('#searchByUser');


searchByTags.addEventListener('click', e => cambioBuscador(e, 'Busca por tags ej: Programacion Web'));
searchByUser.addEventListener('click', e => cambioBuscador(e, 'Busca por nombre de Usuario o Apodo ej: Nemo'));
searchByTitlePost.addEventListener('click', e => cambioBuscador(e, 'Busca por Titulo de Post ej:Ver-Gas'));

function cambioBuscador(e, mensaje) {
    e.preventDefault();
    searchBar.disabled = false;
    searchBar.placeholder = mensaje;
}