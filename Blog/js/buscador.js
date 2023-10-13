const searchBar = document.querySelector('#searchBar');
const searchByTags = document.querySelector('#searchByTag');
const searchByTitlePost = document.querySelector('#searchByTitlePost');
const searchByUser = document.querySelector('#searchByUser');

searchByTags.addEventListener('click', ()=>{
    searchBar.placeholder='Busca por tags ej: Programacion Web';
    searchBar.disabled=false;

});
searchByUser.addEventListener('click', ()=>{
    searchBar.placeholder='Busca por nombre de Usuario o Apodo ej: Nemo';
    searchBar.disabled=false;

});
searchByTitlePost.addEventListener('click', ()=>{
    searchBar.placeholder='Busca por Titulo de Post ej:Ver-Gas';
    searchBar.disabled=false;
});