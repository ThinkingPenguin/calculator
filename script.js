const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const secondScreen = document.querySelector('.scd-screen')
const clear = document.querySelector('.clear-all');
const equal = document.getElementsByClassName('equal-sign');
const signOperator = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('button');
const decimal = document.querySelector(".decimal")
const backspace = document.querySelector('.backspace');
let numberOne = '';
let numberTwo = '';
let operatorSign = '';
let result = 0
let storeSign = [];
let counterSign = 0;
let decimalCount = 0;

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
  }

function deleteLastEntry() {
    let screenVal = screen.value;
    backspace.addEventListener('click', () =>{
        screen.value = screenVal.slice(0, -1);
    })
    console.log(numberOne);
}
deleteLastEntry();


Array.from(numbers).forEach(function (numb) {
    numb.addEventListener('click', function(){
        if (screen.value === '0') {
            screen.value = '';
        }
        if (screen.value.length > 10) {
            screen.value = screen.value.substr(0, 10);
        }
        if (numb.value === '.') {
                decimalCount++;
            }

        if (numb.value === '.' && decimalCount > 1) {
            return;
            
        }

        if (operatorSign === '') {
            numberOne += numb.value;
            if (numberOne.length > 10) {
                numberOne = numberOne.substr(0, 11);
            }
            
        } else {
            numberTwo += numb.value;
            if (numberTwo.length > 10) {
                numberTwo = numberTwo.substr(0, 11);
            }
            
            
        }

        screen.value += numb.value;
        
        
    });   
});

signOperator.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.value !== '=') {
            operatorSign = e.target.value;
            //console.log('Number One: ' + numberOne);
            //console.log('Operator ' + operatorSign);
            secondScreen.value = numberOne + ' ' + operatorSign;
            storeSign.push(operatorSign);
            if (numberTwo) {
                //let splitSec = secondScreen.value.split(' ');
                //storeSign.push(splitSec[splitSec.length - 1]);
                console.log(storeSign);
                console.log(operatorSign)
                //console.log(splitSec)
                operate(numberOne, storeSign[counterSign], numberTwo);
                secondScreen.value = result + ' ' + operatorSign;
                //secondScreen.value = numberOne + ' ' + operatorSign + ' ' + numberTwo + ' = ';
                counterSign++;
                
                if (isFloat(result) === true) {
                    numberOne = result.toFixed(2);
                } else {
                    numberOne = result;
                }
                
                //screen.value = result;
            } 
            
            console.log(result)
            screen.value = result;
            screen.value = '';
            numberTwo = '';
            //operatorSign = '';
            decimalCount = 0;
            
            
            
            
        } else {
            //console.log('Seconde number ' + numberTwo);
            operate(numberOne, operatorSign, numberTwo);
            secondScreen.value = numberOne + ' ' + operatorSign + ' ' + numberTwo + ' = ';
            if (isFloat(result) === true) {
                numberOne = result.toFixed(2);
            } else {
                numberOne = result;
            }
            screen.value = result;
            numberTwo = '';
            storeSign = [];
            counterSign = 0;
/*
            if (e.target.value !== '=') {
                operate(numberOne, operatorSign, numberTwo);
                secondScreen.value = numberOne + ' ' + operatorSign + ' ' + numberTwo + ' = ';
                if (isFloat(result) === true) {
                    numberOne = result.toFixed(2);
                } else {
                    numberOne = result;
                }
                
            }*/
            
            
        }
        
    })
})

function clearScreen() {
    clear.addEventListener('click', () => {
        screen.value = '0';
        secondScreen.value = '';
        numberOne = '';
        numberTwo = '';
        operatorSign = '';
        decimalCount = 0;
        result = '';
        counterSign = 0;
        storeSign = [];
        
    })
}

function operate(firstNumber, operator, secondNumber){
    switch (operator) {
        case '+':
            if (secondScreen.value.indexOf('.')) {
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
                
            }  else {
                result = parseInt(firstNumber) + parseInt(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
                
            }
            //decimalCount = 0;
            break;

        case '-':
            if (secondScreen.value.indexOf('.')) {
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }

            }  else {
                result = parseInt(firstNumber) - parseInt(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
            }
            //decimalCount = 0;
            break;
        
        case '*':
            if (secondScreen.value.indexOf('.')) {
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }

            }  else {
                result = parseInt(firstNumber) * parseInt(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
            }
            //decimalCount = 0;
            break;

        case '/':
            if (secondScreen.value.indexOf('.')) {
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
            }  else {
                result = parseInt(firstNumber) / parseInt(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
            }
            if(secondNumber === "0"){
                screen.value = "Error, can't divide by 0";
                return;
            }
            //decimalCount = 0;
            break;
    
        default:
            numberOne = '';
            numberTwo = '';
            break;
    }

}

clearScreen();