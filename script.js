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
function listenKeyboard(numero){
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '1':
                console.log(e.key);
                break;
            case '2':
                console.log(e.key);
                break;
            case '3':
                console.log(e.key);
                break;
            case '4':
                console.log(e.key);
                break;
            case '5':
                console.log(e.key);
                break;
            case '6':
                console.log(e.key);
                break;
            case '7':
                console.log(e.key);
                break;
            case '8':
                console.log(e.key);
                break;
            case '9':
                console.log(e.key);
                break;
            case '0':
                console.log(e.key);
                break;
            case 'Backspace':
                console.log(e.key);
                break;
            case 'Enter':
                console.log(e.key);
                break;
        
            default:
                break;
        }
    })

}


function deleteLastEntry() {
    let screenVal = screen.value;
    backspace.addEventListener('click', () =>{
        screen.value = screenVal.slice(0, -1);
        //numberOne = numberOne.slice(0, -1);
    })
    console.log(numberOne);
}


Array.from(numbers).forEach(function (numb) {
    numb.addEventListener('click', function(){
        if (screen.value === '0') {
            screen.value = '';
        }
        if (screen.value.length > 10) {
            screen.value = screen.value.substr(0, 10);
        }
        if (numb.value === '.') {
            if (!screen.value && !numberOne) {
                //screen.value = '0';
                numberOne += '0';
            }
            if (!screen.value && !numberTwo) {
                //screen.value = '0';
                numberTwo += '0';
                
            }
                decimalCount++;
            }
            

        if (numb.value === '.' && decimalCount > 1) {
            return;
        }

        if (operatorSign === '') {
            if (numb.id === 'backspace') {
                let screenVal = screen.value;
                screen.value = screenVal.slice(0, -1);
                numberOne = numberOne.slice(0, -1);    
            }
            numberOne += numb.value;
            if (numberOne.length > 10) {
                numberOne = numberOne.substr(0, 11);
            }
            
        } else {
            if (numb.id === 'backspace') {
                let screenVal = screen.value;
                screen.value = screenVal.slice(0, -1);
                numberTwo = numberTwo.slice(0, -1);    
            }
            numberTwo += numb.value;
            if (numberTwo.length > 10) {
                numberTwo = numberTwo.substr(0, 11);
            }
            
        }

        
        console.log(numb.id)
        screen.value += numb.value;
        
        
    });   
});

signOperator.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.value !== '=') {
            operatorSign = e.target.value;
            //console.log('Number One: ' + numberOne);
            //console.log('Operator ' + operatorSign);
            if (!numberOne) {
                numberOne = '0';
            }
            
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
            
            
            console.log(numberOne, numberTwo, result)
            screen.value = result;
            screen.value = '';
            numberTwo = '';
            //operatorSign = '';
            decimalCount = 0;
            
            
            
            
        } else {
            //console.log('Seconde number ' + numberTwo);
            if (!numberTwo) {
                numberTwo = '0';
                
            }
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
                result = Number(firstNumber) + Number(secondNumber);
                
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
                
            }  else {
                result = Number(firstNumber) + Number(secondNumber);
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
                result = Number(firstNumber) - Number(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }

            }  else {
                result = Number(firstNumber) - Number(secondNumber);
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
                result = Number(firstNumber) * Number(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }

            }  else {
                result = Number(firstNumber) * Number(secondNumber);
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
                result = Number(firstNumber) / Number(secondNumber);
                if (isFloat(result) === true) {
                    screen.value = result.toFixed(2);
                } else {
                    screen.value = result;
                }
            }  else {
                result = Number(firstNumber) / Number(secondNumber);
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