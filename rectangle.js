// vedio 26-7

function calculateRectangleArea() {
  const height = getInputValueById("rectangle-height");
  const width = getInputValueById("rectangle-width");
  const area = height * width;

  DisplayAns('rectangle-area', area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  //   console.log(inputValue);
  return inputValue;
}

function DisplayAns(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
