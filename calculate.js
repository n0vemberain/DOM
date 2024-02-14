// object : get base and hight
// stpe 1 : get base value
// 2 . add an id in the base input field
// 3 . use getElementById to access input field
// 4 . get value from the input field
// 5 . Covert value in to number by using oarseFloat
// same way get trianglr hight

function TriangleArea() {
  // value of b
  const TriangleBaseInput = document.getElementById("triangle-base");
  const TriangleBaseText = TriangleBaseInput.value;
  const base = parseFloat(TriangleBaseText);

  //   value of h
  const TriangleHightInput = document.getElementById("triangle-hight");
  const TriangleHightText = TriangleHightInput.value;
  const hight = parseFloat(TriangleHightText);
  
  // calculate
  const area = 0.5 * base * hight;

  // Display area in span
  const TriangleAreaSpan = document.getElementById("triangle-area");
  TriangleAreaSpan.innerText = area;
}
