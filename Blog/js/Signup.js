document.addEventListener('DOMContentLoaded',()=>{
// LLenar select de edad 
    const selectEdad=document.querySelector('#edad');
    for(let i=15; i<=80;i++){
        const option=document.createElement('OPTION');
        option.value=i;
        option.textContent=i;
        selectEdad.appendChild(option)
    }
});
