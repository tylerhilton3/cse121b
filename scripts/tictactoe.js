var board = ["", "", "", "", "", "", "", "", ""];
var symbolSwitch = 0;
var symbols = ["X", "O"];

var cells = document.getElementsByTagName("td");
var message = document.getElementById("message");
var counter = document.getElementById("counter");
var c0 = document.getElementById("cell_0");
var c1 = document.getElementById("cell_1");
var c2 = document.getElementById("cell_2");
var c3 = document.getElementById("cell_3");
var c4 = document.getElementById("cell_4");
var c5 = document.getElementById("cell_5");
var c6 = document.getElementById("cell_6");
var c7 = document.getElementById("cell_7");
var c8 = document.getElementById("cell_8");

console.log(c8);
function setSymbol () {
    symbolSwitch += 1;
    c8.innerHTML = symbols[(symbolSwitch % 2)];
}
c8.addEventListener("click", setSymbol);