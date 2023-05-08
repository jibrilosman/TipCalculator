

// set variables for DOM elements
let billAmount = document.querySelector('#billAmount');
let percentBtns = document.querySelectorAll('.percentBtn');
let customTip = document.querySelector('#custom');
let person = document.querySelector('#numOfPeople');

let displayTipAmount = document.querySelector('#result');
let displayTotalAmount = document.querySelector('#totalResult');

billAmount.focus();
displayTipAmount.innerText = '$0.00';
displayTotalAmount.innerText = '$0.00';

// set validation for bill amount
const showError = (input, message) => {
  let formField = input.parentElement;
  let error = formField.querySelector('small');
  error.textContent = message;
};
const hideError = (input) => {
  const formField = input.parentElement;
  const error = formField.querySelector('small');
  error.textContent = '';

};


// set function to calculate tip amount based on button clicked 
//  and display tip amount and total amount  
function CalcTipPercent(btn) {
    let billValue = billAmount.value;
    let personValue = person.value;
    let percentNumber = parseInt(btn.innerText);
    let tipAmount = billValue * (percentNumber / 100) / personValue;
    let tipAmountPerPerson = tipAmount / personValue;
    let totalAmount = billValue / personValue + tipAmount;
    displayTipAmount.innerHTML = `$${tipAmount.toFixed(2)}`;
    displayTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;

// validate user input for bill amount and person amount  and display error message
//  if user input is empty   or zero     or less than zero
    if(billAmount.value === '') {

        showError(billAmount, 'Please enter a bill amount');
        billAmount.focus();
        billAmount.setAttribute('style', 'border: 2px solid #BF2D39');

    } else if(billAmount.value <= 0) {

        showError(billAmount, 'Please enter a positive number');
        billAmount.focus();
        billAmount.setAttribute('style', 'border: 2px solid #BF2D39');

    } else {
        
          hideError(billAmount);
          billAmount.setAttribute('style', 'border: 1px solid #ccc');
    }


    if(person.value === '' || person.value === 0) {

        showError(person, "Can't be zero");
        // person.focus();
        person.setAttribute('style', 'border: 2px solid #BF2D39');
    } else if (person.value < 0) {

        showError(person, "Can't be negative");
        // person.focus();
        person.setAttribute('style', 'border: 2px solid #BF2D39');

    } else {
      
        hideError(person);
        person.setAttribute('style', 'border: 1px solid #ccc');
    } 

}


// set a function to calculate custom tip amount and display tip amount and total amount  
// when custom tip input is entered  

function customTipPercent() {
  let billValue = billAmount.value;
  let personValue = person.value;
  let customTipValue = customTip.value;
  let tipAmount = billValue * (customTipValue / 100);
  let tipAmountPerPerson = tipAmount / personValue;
  let totalAmount = billValue / personValue + tipAmountPerPerson;
  displayTipAmount.innerHTML = `$${tipAmount.toFixed(2)}`;
  displayTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;


// validate user input for bill amount and person amount  and display error message
// if user input is empty   or zero     or less than zero

if(billAmount.value === '') {

        showError(billAmount, 'Please enter a bill amount');
        billAmount.focus();
        billAmount.setAttribute('style', 'border: 2px solid #BF2D39');

    } else if(billAmount.value <= 0) {

        showError(billAmount, 'Please enter a positive number');
        billAmount.focus();
        billAmount.setAttribute('style', 'border: 2px solid #BF2D39');

    } else {
        
          hideError(billAmount);
          billAmount.setAttribute('style', 'border: 1px solid #ccc');
    }


    if(person.value === '' || person.value === 0) {

        showError(person, "Can't be zero");
        // person.focus();
        person.setAttribute('style', 'border: 2px solid #BF2D39');

    } else if (person.value < 0) {

        showError(person, "Can't be negative");
        // person.focus();
        person.setAttribute('style', 'border: 2px solid #BF2D39');

    } else {
      
        hideError(person);
        person.setAttribute('style', 'border: 1px solid #ccc');
    } 


}

// add event listeners to the inputs
customTip.addEventListener('input', customTipPercent);


// set functionality for each button and set event listener
percentBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    CalcTipPercent(btn);

  });
})




//set function to reset  tip amount and total amount  when reset button is clicked
function resetAll() {
    billAmount.value = '';
    person.value = '';
    customTip.value = '';
    displayTipAmount.innerHTML = '';
    displayTotalAmount.innerHTML = '';
    hideError(billAmount);
    hideError(person);
    billAmount.setAttribute('style', 'border: 1px solid hsl(186, 14%, 43%)');
    person.setAttribute('style', 'border: 1px solid hsl(186, 14%, 43%)');
    displayTipAmount.innerText = `$0.00`
    displayTotalAmount.innerText = `$0.00`
    billAmount.focus(); 
}
