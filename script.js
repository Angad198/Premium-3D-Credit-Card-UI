const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardExpiry = document.getElementById("cardExpiry");
const cardCVV = document.getElementById("cardCVV");

const displayNumber = document.getElementById("displayNumber");
const displayName = document.getElementById("displayName");
const displayExpiry = document.getElementById("displayExpiry");
const displayCVV = document.getElementById("displayCVV");

const creditCard = document.getElementById("creditCard");
const cardLogo = document.getElementById("cardLogo");


// CARD NUMBER + CARD TYPE
cardNumber.addEventListener("input", () => {

  let rawValue = cardNumber.value.replace(/\D/g, "");

  let formattedValue = rawValue
    .replace(/(.{4})/g, "$1 ")
    .trim();

  cardNumber.value = formattedValue;

  displayNumber.innerText =
    formattedValue || "#### #### #### ####";


  // VISA / MASTERCARD DETECT
  if(rawValue.startsWith("4")){
    cardLogo.innerText = "VISA";
  }

  else if(rawValue.startsWith("5")){
    cardLogo.innerText = "Mastercard";
  }

  else{
    cardLogo.innerText = "💳";
  }

});


// CARD HOLDER NAME
cardName.addEventListener("input", () => {

  displayName.innerText =
    cardName.value.toUpperCase() || "YOUR NAME";

});


// EXPIRY DATE
cardExpiry.addEventListener("input", () => {

  let value =
    cardExpiry.value.replace(/\D/g, "");

  if(value.length >= 3){

    value =
      value.substring(0,2)
      + "/"
      + value.substring(2,4);
  }

  cardExpiry.value = value;

  displayExpiry.innerText =
    value || "MM/YY";

});


// CVV
cardCVV.addEventListener("input", () => {

  displayCVV.innerText =
    cardCVV.value || "***";

});


// FLIP CARD
cardCVV.addEventListener("focus", () => {

  creditCard.classList.add("flip");

});


// FLIP BACK
cardCVV.addEventListener("blur", () => {

  creditCard.classList.remove("flip");

});