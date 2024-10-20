function add() {
  var a = document.getElementById("disp");
  var c = parseInt(a.innerHTML, 10);

  a.innerHTML = c + 1;
}

function sub() {
  var dispElement = document.getElementById("disp");
  var currentValue = parseInt(dispElement.innerHTML, 10);
  dispElement.innerHTML = currentValue - 1;
}

function clrbut() {
  var x = document.getElementById("disp");
  x.innerHTML = 0;
}
