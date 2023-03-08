const charVal = document.getElementById("textarea");
let totalcount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");
let userChar = 0;
const updateCounter = () => {
  userChar = charVal.value.length;
  totalcount.innerText = userChar;
  remainingCount.innerText = 150 - userChar;
};
charVal.addEventListener("keyup", () => updateCounter());

//copy text
const copyText = () => {
  charVal.select();
  charVal.setSelectionRange(0, 9999); //mobile
  navigator.clipboard.writeText(charVal.value);
};
