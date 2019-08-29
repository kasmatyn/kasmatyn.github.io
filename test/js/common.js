var menu = document.getElementById('menuClick');
var burger = document.querySelector('.burgerMenu');
menu.addEventListener('click', function(event){
    burger.classList.toggle('active');
});