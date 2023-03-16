const nav = document.querySelector('#menu');
const menuBtn = document.querySelector('.hamburger');
const close = document.querySelector('.close');


function show() {
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
    close.classList.toggle('hidden');

}


menuBtn.addEventListener("click", show);
close.addEventListener("click", show);

