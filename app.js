//clickcount

const clickArea = document.querySelector('.postImage');
const clickCount = document.querySelector('.clickCount');
// const heartFooter = document.querySelector(".fa-heart");

let likeCount = 0;
// add element for heart
const showHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    clickArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 750);

}
clickArea.addEventListener('dblclick', (e) => {

    clickCount.innerHTML = ++likeCount;
   
    showHeart(e);
});

// heart color


// const redHeart = (e) => {
//     heartFooter.innerHTML.style.color = 'red';
// }
// heartFooter.addEventListener('dblclick', (e) => {
//     redHeart(e);
// });
