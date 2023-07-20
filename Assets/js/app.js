let menu = document.getElementById('menu');
let show_menu = document.querySelectorAll('.show-menu');
let caard = document.querySelectorAll('.caard');
let caard_body = document.querySelectorAll('.caard-body');
console.log(show_menu);
console.log(caard);
console.log(menu);

menu.addEventListener('click' , ()=>{
    // show_menu.classList.toggle('py-5');
    for(i=0 ; i<caard.length ; i++)
    {
        show_menu[i].classList.toggle('d-flex');
        show_menu[i].classList.toggle('ps-4');
        caard[i].classList.toggle('w-100');
        caard_body[i].classList.toggle('ps-5');
        caard_body[i].classList.toggle('ms-5');
    }
 
    // show_menu[1].classList.toggle('d-flex');
    // show_menu[1].classList.toggle('justify-content-evenly');
    // caard[1].classList.toggle('w-100');  
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
    // show_menu[2].classList.toggle('d-flex');
    // show_menu[2].classList.toggle('justify-content-evenly');
    // caard[2].classList.toggle('w-100');
})