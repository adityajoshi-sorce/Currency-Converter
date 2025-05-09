const base_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/USD_EUR.json";

const dropdowns = document.querySelectorAll(".dropdown select");



for (let select of dropdowns){
  for (currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD"){
      newOption.selected = "selected"
    } else if(select.name === "to" && currCode === "INR"){
      newOption.selected = "selected"
    }
    select.append(newOption);
    }

    select.addEventListener ("change", (evt) =>{
      updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;
}