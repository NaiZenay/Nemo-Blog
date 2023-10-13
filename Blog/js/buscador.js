const searchBar = document.querySelector('#searchBar');
const searchByTags = document.querySelector('#searchByTag');
const searchByTitlePost = document.querySelector('#searchByTitlePost');
const searchByUser = document.querySelector('#searchByUser');

searchByTags.addEventListener('click', ()=>{
    searchBar.disabled=false;
    searchBar.placeholder='Busca por tags ej: Programacion Web';
});
searchByUser.addEventListener('click', ()=>{
    searchBar.disabled=false;
    searchBar.placeholder='Busca por nombre de Usuario o Apodo ej: Nemo';
});
searchByTitlePost.addEventListener('click', ()=>{
    searchBar.disabled=false;
    searchBar.placeholder='Busca por Titulo de Post ej:Ver-Gas';

});