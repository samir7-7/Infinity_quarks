

$(document).ready(function(){

let hamburger= document. querySelector('.hamm');
let times= document.querySelector('.timess');
let mobileNav= document.querySelector('.mobile-nav');
let Jimbu= document.querySelector('.jimbu');

hamburger. addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times. addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

Jimbu. addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

});