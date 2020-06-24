// Get value from calculator buttons

function getNumber(numb){
    var number = document.getElementById("numb");
    number.value += numb;
}

// Clear the values

function clearScreen(){
    var number = document.getElementById("numb");
    number.value = "";
}

// For performing calculations

function getResult(){
    var result = document.getElementById("numb");
    result.value = eval(result.value);
}