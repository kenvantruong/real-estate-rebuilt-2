const formSignIn = document.querySelector('.form-signin');

// <----------------------------------------------->
/* <!---------SIGN IN POP UP!----------------->
<!-----------------------------------------------> */
const signinBtn = document.querySelector('.clickable-btn-sign-in').addEventListener('click', function(e){
  let displayShow = document.querySelector('.displayShow');
  let signinWrapper = document.querySelector('.sign-wrapper');
  let signinDiv = document.querySelector('.sign-in-div');
  
  // console.log('clicked');
  signinDiv.classList.remove("sign-wrapper");
  signinDiv.classList.add("displayShow");

  e.preventDefault();
});



// ------remove--------

window.addEventListener('click', function(event){
  let displayShow = document.querySelector('.displayShow');
  let signinWrapper = document.querySelector('.sign-wrapper');
  let signinDiv = document.querySelector('.sign-in-div');

  if(event.target === displayShow){
    signinDiv.classList.remove("displayShow");
    signinDiv.classList.add("sign-wrapper");
    
  }
});





// <!---------Submit Pop Up - Sign IN Information-------------> */
const form = document.querySelector('.form-signin').addEventListener('submit', submitClick);
const input = document.querySelector('.form-control');




function submitClick(e){
  console.log(input.value);
  document.getElementById('signin-btn').remove();
  let displayShow = document.querySelector('.displayShow');


  displayShow.removeAttribute("display")
  // displayShow.style.display='none';
  // signinWrapper.classList.remove("displayShow");
  // signinWrapper.classList.add("sign-wrapper");
  e.preventDefault();
};
