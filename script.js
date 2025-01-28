const inputValue = document.getElementById("user-input");
const outputValue = document.querySelector('.display .output');

const number = document.querySelectorAll(".key").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
      outputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
      outputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

const calculate = document
  .querySelectorAll(".op")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);
      if (!isNaN(lastValue) && e.target.innerHTML === "=") {
        if (inputValue.innerText.includes("^")) {
          inputValue.innerText = inputValue.innerText.replace("^", "**");
        }
        outputValue.innerText = eval(inputValue.innerText);
      }
      else if (e.target.innerHTML === "AC") {
        inputValue.innerText = "";
        outputValue.innerText = "";
      } else if (e.target.innerHTML === "DEL") {
        inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
        if (inputValue.innerText.length == 0) {
          inputValue.innerText = "";
        }

      } else {
        if (!isNaN(lastValue)) {
          inputValue.innerText += e.target.innerHTML;
        }
      }

    });
  });

