// let addVar = document.getElementById('addVar');
// let subtractVar = document.getElementById('subtractVar');
// let multiplyVar = document.getElementById('multiplyVar');
// let divideVar = document.getElementById('divideVar');

let containerButton = document.getElementById('containerButton');

getAddVar().addEventListener('click',add);
getSubtractVar().addEventListener('click',subtract);
getMultiplyVar().addEventListener('click',multiply);
getDivideVar().addEventListener('click',divide);

//GETTERS

function getNumber1(){
    let number1 = parseFloat(document.getElementById('number1').value);
    return number1;
}

function getNumber2(){
    let number2 = parseFloat(document.getElementById('number2').value);
    return number2;
}

function getResult(result){
    document.getElementById('result').value = result;
    // e.preventDefault();
}



function getAddVar(){
    let addVar = document.getElementById('addVar');
    return addVar;
}

function getSubtractVar(){
    let subtractVar = document.getElementById('subtractVar');
    return subtractVar;
}

function getMultiplyVar(){
    let multiplyVar = document.getElementById('multiplyVar');
    return multiplyVar;
}

function getDivideVar(){
    let divideVar = document.getElementById('divideVar');
    return divideVar;
}



//OPERATIONS

function add(){
    let result = getNumber1()+getNumber2();
    getResult(result);

    valid();
}

function subtract(){
    let result = getNumber1()-getNumber2();
    getResult(result);

    valid();
}

function multiply(){
    let result = getNumber1()*getNumber2();
    getResult(result);

    valid();
}

function divide(){
    let result = getNumber1()/getNumber2();
    getResult(result);

    valid();
}


//VALID INPUT

function valid(){
    if(document.getElementById('result').value=='NaN'){
        alert('Digit a valid number.')
    }
}