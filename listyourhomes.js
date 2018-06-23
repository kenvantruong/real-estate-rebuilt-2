// Define UI
const listYourHomeBtn = document.querySelector('.list-yourhome');


/* <!---------LIST NEW HOMES POP UP!----------------->
<!-----------------------------------------> */

runAllHomesEventListeners();

function runAllHomesEventListeners(){
  listYourHomeBtn.addEventListener('click', listYourHomeBtnClick);

};

function listYourHomeBtnClick() {
   
  let displayShowHome = document.querySelector('.displayShow-home');
  let addHomeDiv = document.querySelector('.add-newhome-div');
  let addHomeWrapper = document.querySelector('.home-wrapper');
  
  
  addHomeDiv.classList.remove("home-wrapper");
  addHomeDiv.classList.add("displayShow-home");

}



// ------Remove It--------

window.addEventListener('click', function(event){
  let displayShowHome = document.querySelector('.displayShow-home');
  let addHomeDiv = document.querySelector('.add-newhome-div');
  let addHomeWrapper = document.querySelector('.home-wrapper');

  if(event.target === displayShowHome){
    addHomeDiv.classList.remove("displayShow-home");
    addHomeDiv.classList.add("home-wrapper");
    
  }
});





// <!---------------------------------------------------------> */
// <!---------Houses User Input & Submit ---------------------> */
// <!---------------------------------------------------------> */

// Define UI [Price | Street | City | State]
const formPlatform = document.getElementById('form-platform-control');
const price = document.getElementById('price-input');
const street = document.getElementById('street-input');
const city = document.getElementById('city-input');
const state = document.getElementById('state-input');
const submitBtn = document.getElementById('submit-btn-homes');


runAllEventListenersUsers();

function runAllEventListenersUsers(){
  formPlatform.addEventListener('submit', submitAction);
};

// Submit Btn Clicked Function
function submitAction(e) {
  console.log('Works');
  // if(price.value !== '' && street.value !== '' && city.value !== '' && state.value !== ''){
  //   console.log('Works');
  // }
  e.preventDefault();
}
