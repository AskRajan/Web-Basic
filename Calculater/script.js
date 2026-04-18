const display = document.getElementById("display");

function appendToDisplay(i) {
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += i;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function clearOne() {
    display.value = display.value.slice(0, -1);
}
