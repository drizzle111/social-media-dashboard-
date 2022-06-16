let btn = document.querySelector('.switch');
let body = document.querySelector('body');
let title = document.querySelector('.title')
let container = document.querySelector('.container');
let box = document.querySelectorAll('.box');
let color = document.querySelector('.color')
box = Array.from(box)
let section = document.querySelectorAll('.section');
section = Array.from(section)
btn.addEventListener('click', darkMode);

function darkMode() {
    container.classList.toggle('container_dark')
    body.classList.toggle('container_dark')
    color.classList.toggle('white')
    title.classList.toggle('top_bg')
    box.forEach(e => e.classList.toggle('dark_bg'))
    section.forEach(e => e.classList.toggle('dark_bg'))
}