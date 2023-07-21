
// Responsive el cuerpo pricipal del post segun el tamaño de la pantalla 
mainPost=document.querySelector('#main-post');
if(screen.width <= 480 ){
    mainPost.classList.remove('col-9') ;
    mainPost.classList.add('col-12');   
}else{
    mainPost.classList.remove('col-12') ;
    mainPost.classList.add('col-9'); 
}
window.addEventListener('resize',()=>{
    if(screen.width <= 480 ){
        mainPost.classList.remove('col-9') ;
        mainPost.classList.add('col-12');   
    }else{
        mainPost.classList.remove('col-12') ;
        mainPost.classList.add('col-9'); 
    }
})

    


