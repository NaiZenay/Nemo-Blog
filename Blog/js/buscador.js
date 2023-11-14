const searchForm = document.querySelector('#searchForm');
const searchBar = document.querySelector('#searchBar');
const searchByTags = document.querySelector('#searchByTag');
const searchByTitlePost = document.querySelector('#searchByTitlePost');
const searchByUser = document.querySelector('#searchByUser');
const buscar_Btn = document.querySelector('#buscar');

const img_preResult = document.querySelector('#img_preResult');
const post_resultados = document.querySelector('#post_result');


searchByTags.addEventListener('click', e => cambioBuscador(e, 'Busca tags ej: Programacion'));
searchByUser.addEventListener('click', e => cambioBuscador(e, 'Busca Usuario o Apodo ej: Nemo'));
searchByTitlePost.addEventListener('click', e => cambioBuscador(e, 'Busca por Titulo ej:Ver-Gas'));

buscar_Btn.addEventListener('click', (e) => {
    e.preventDefault();
    img_preResult.hidden=true;
    post_resultados.hidden=false;
});

function cambioBuscador(e, mensaje) {
    e.preventDefault();
    searchBar.disabled = false;
    searchForm.hidden = false;
    searchForm.reset();
    searchBar.placeholder = mensaje;
}