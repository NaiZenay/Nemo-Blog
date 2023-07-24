const like_container = document.querySelector('#like_container');
const like_btn = document.querySelector('#like_btn');
const like_icon = document.querySelector('#like_icon');
const contador_likes = document.querySelector('#contador_likes')


like_btn.addEventListener('click', () => {
    if(like_icon.classList.contains('fa-regular')){
        like_icon.classList.remove('fa-regular');
        like_icon.classList.add('fa-solid');
        return;
    }else if(like_icon.classList.contains('fa-solid')){
        like_icon.classList.remove('fa-solid');
        like_icon.classList.add('fa-regular');
    }
});

