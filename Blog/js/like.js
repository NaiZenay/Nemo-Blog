const like_container = document.querySelector('#like_container');
const like_btn = document.querySelector('#like_btn');
const like_icon = document.querySelector('#like_icon');
const disLike_btn = document.querySelector('#disLike_btn');
const contador_likes = document.querySelector('#contador_likes');
const contador_Dislikes = document.querySelector('#contador_Dislikes');
let countlikes = 0;
let countDislikes = 0;

document.addEventListener('DOMContentLoaded', () => {
    contador_likes.textContent = `${countlikes}`;
    contador_Dislikes.textContent = `${countDislikes}`;
})

like_btn.addEventListener('click', () => {
    //Dar like  
    if (like_icon.classList.contains('fa-regular')) {
        like_icon.classList.remove('fa-regular');
        like_icon.classList.add('fa-solid');
        countlikes++;
        countDislikes=0;
        contador_Dislikes.textContent = `${countDislikes}`;
        contador_likes.textContent = `${countlikes}`;
        return;
        //Quitar like
    } else if (like_icon.classList.contains('fa-solid')) {
        like_icon.classList.remove('fa-solid');
        like_icon.classList.add('fa-regular');
        countlikes--;
        contador_likes.textContent = `${countlikes}`;
    }
});

disLike_btn.addEventListener('click', () => {
    //Dar dislike
    if (countDislikes === 0) {
        countDislikes++;
        if (like_icon.classList.contains('fa-solid')) {
            like_icon.classList.remove('fa-solid');
            like_icon.classList.add('fa-regular');
            countlikes=0;
        }
        contador_likes.textContent = `${countlikes}`;
        contador_Dislikes.textContent = `${countDislikes}`;

    } else {
        countDislikes--;
        contador_Dislikes.textContent = `${countDislikes}`;
    }
});




const comment_like_container = document.querySelector('#comment_like_container');
const comment_like_btn = document.querySelector('#comment_like_btn');
const comment_like_icon = document.querySelector('#comment_like_icon');
const comment_contador_likes = document.querySelector('#comment_contador_likes')


comment_like_btn.addEventListener('click', () => {
    if (comment_like_icon.classList.contains('fa-regular')) {
        comment_like_icon.classList.remove('fa-regular');
        comment_like_icon.classList.add('fa-solid');
        return;
    } else if (comment_like_icon.classList.contains('fa-solid')) {
        comment_like_icon.classList.remove('fa-solid');
        comment_like_icon.classList.add('fa-regular');
    }
});

