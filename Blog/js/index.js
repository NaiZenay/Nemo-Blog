
// Responsive el cuerpo pricipal del post segun el tamaño de la pantalla 
mainPost=document.querySelector('#main-post');
window.addEventListener('resize',()=>{
    if(screen.width <= 480 ){
        console.log('funciono');
        mainPost.classList.remove('col-9') ;
        mainPost.classList.add('col-12');   
    }else{
        console.log('funciono -');
        mainPost.classList.remove('col-12') ;
        mainPost.classList.add('col-9'); 
    }
})

    


