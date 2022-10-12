//clickcount

const clickArea = document.querySelector(".postImage");
const clickCount = document.querySelector(".clickCount");
const heartFooter = document.querySelector(".fa-heart");

let likeCount = 0;
const showHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart')
    clickArea.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    },800)
} 
    
clickArea.addEventListener('dblclick', (e) => {
    clickCount.innerHTML = ++likeCount;
    // heartFooter.style.font = 'red';
    showHeart(e);
});

// heart color


// const redHeart = (e) => {
//     heartFooter.innerHTML.style.color = 'red';
// }
// heartFooter.addEventListener('dblclick', (e) => {
//     redHeart(e);
// });
