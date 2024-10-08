
let list = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let cumprimento = list.length;
let contador = 0;

next.onclick= ()=>{
    const active = document.querySelector('.active');
    active.classList.remove('active');

    contador = contador >= cumprimento -1? 0 : contador + 1;
    list[contador].classList.add('active')
}

prev.onclick= ()=>{
    const active= document.querySelector('.active');
    active.classList.remove('active');

    contador = contador <= 0 ? cumprimento -1 : contador -1;
    list[contador].classList.add('active')
}