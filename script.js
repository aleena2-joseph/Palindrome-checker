const txtInput = document.querySelector(".inpu input");
checkBtn = document.querySelector(".inpu button");
infoTxt = document.querySelector(".txt");
let filterInput;
checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `No,<span> '${txtInput.value}' </span> is not a palindrome!`);
  }
  infoTxt.innerHTML = `Yes,<span> '${txtInput.value}' </span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});
