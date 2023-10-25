var symbolSwitch = 0;
var symbols = ["X", "O"];
var database = [];

var cells = document.getElementsByTagName("td");
var counter = document.getElementById("counter");
var number = document.getElementById("number");

function cellList () {
    // Array used
    let pos = [];
    for (let c of cells) {
        pos.push(c.innerHTML);
    }
    return pos;
}

function occur(cl) {
    occ = 0;
    for (let i of database) {
        // Use of JSON fetching and conditional branching
        if (JSON.stringify(i) === JSON.stringify(cl)) {
            occ +=1;
        }
    }
    return occ;
}


function setSymbol (y) {
    symbolSwitch += 1;
    cells.item(y).innerHTML = symbols[(symbolSwitch % 2)];
    cL = cellList();
    // Temperate literal
    number.innerHTML = `${occur(cL)} Times`;
    database.push(cL)
    console.log(database)
}

async function getwins ()  {
    const response = await fetch("tic-tac-toe.json");
    const wins = await response.json();
    document.getElementById("json").innerHTML = JSON.stringify(wins);
}
getwins()
// Array method used (.length)
for (let i = 0; i < cells.length; i++) {
    cells.item(i).addEventListener("click", (function (y) {return function () {setSymbol(y);};})(i));
};

function reset () {
    for (let c of cells) {
        c.innerHTML = ""
    }
    symbolSwitch = 0;
};




document.getElementById("reset").addEventListener("click", reset);