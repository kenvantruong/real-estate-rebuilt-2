const mobileBtn = document.querySelector('.mobile-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-action');
const menuID = document.querySelector('#menu-id');
const burgerBtn = document.querySelector('.burger-tap');
const overlay = document.querySelector('.overlay');




mobileBtn.addEventListener('click', function(){
  menu.className -= 'display-hidden';
  menu.className += ' style-up-menu';
  menu.className += ' open menu';
  burgerBtn.className += ' display-hidden';

  overlay.className += ' overlay-style';

});



closeBtn.addEventListener('click', function(){
    menu.className = 'menu';
    menu.className += ' display-hidden';
    burgerBtn.className -= ' display-hidden style-up-menu';
    overlay.classList.remove('overlay-style');


});


window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'menu';
    menu.className += ' display-hidden';
    burgerBtn.className -= ' display-hidden style-up-menu';
    overlay.classList.remove('overlay-style');

  }
});



// <!---------Responsive Nav-------------> */
var nav = responsiveNav(".nav-collapse");

