const creationDate = document.querySelector('#creationDate');
const author = document.querySelector('#author');
const crearPostModalBtn=document.querySelector('#crearPostModalBtn');

crearPostModalBtn.addEventListener('click', () => {
    const fechaCreacion = new Date;
    console.log(creationDate.value=moment().locale('es').format('YYYY-MM-DD'));
    
});




