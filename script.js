const display = document.getElementById("display");
let currentInput = "";

function updateDisplay() {
  display.textContent = currentInput || "0";
}

function calculate() {
  try {
    const expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
    currentInput = eval(expression).toString();
  } catch (e) {
    currentInput = "Error";
  }
  updateDisplay();
}

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      calculate();
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput += value;
    }

    updateDisplay();
  });
});
