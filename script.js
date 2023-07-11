const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const secondScreen = document.querySelector('.scd-screen')
const clear = document.querySelector('.clear-all');
const equal = document.getElementsByClassName('equal-sign');
const signOperator = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('button');
const decimal = document.querySelector(".decimal")
const maxi = 3;
let numberOne = '';
let numberTwo = '';
let operatorSign = '';
let result = 0

/*
function checkSign() {
    Array.from(signOperator).forEach((operand) => {
        operand.addEventListener('click', () => {
            //console.log(operand.value);
            operatorSign = operand.value;
            console.log(operatorSign);
            //return operatorSign;
        });
    });
}*/

decimal.addEventListener('click', function(e){
    let decimalClicked = e.target.value;
    if (screen.value.indexOf('.') === -1) {
        screen.value += decimalClicked;
    } 
    
})

Array.from(numbers).forEach(function (numb) {
    numb.addEventListener('click', function(){
        if (screen.value === '0') {
            screen.value = '';
        }
        if (screen.value.length > 3) {
            screen.value = screen.value.substr(0, 10);
            
        }


        if (operatorSign === '') {
            numberOne += numb.value;
            if (numberOne.length > 3) {
                numberOne = numberOne.substr(0, 11);
            }
            
        } else {
            numberTwo += numb.value;
            if (numberTwo.length > 3) {
                numberTwo = numberTwo.substr(0, 11);
                
            }
            
        }
        screen.value += numb.value;
        clearScreen();

        //console.log(numberOne, numberTwo);

        //screen.value += btn.value;
        /*
        if (btn.value === '+' || btn.value === '*' || btn.value === '-' || 
        btn.value === '/') {
            numberOne = screen.value;

        }

        if (btn.value === '=') {
            numberTwo = screen.value;
            console.log(numberTwo);
            
        }*/
        
    });   
});

signOperator.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.value !== '=') {
            operatorSign = e.target.value;
            console.log('Number One: ' + numberOne);
            console.log('Operator ' + operatorSign);
            secondScreen.value = numberOne + ' ' + operatorSign;
            screen.value = '';
            numberTwo = '';
            
        } else {
            //console.log('Seconde number ' + numberTwo);
            operate(numberOne, operatorSign, numberTwo);
            secondScreen.value = numberOne + ' ' + operatorSign + ' ' + numberTwo + ' = ';
            numberOne = result;
            
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
        
    })
}


function operate(firstNumber, operator, secondNumber){
    switch (operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            screen.value = result;
            
            break;

        case '-':
            secondScreen.value = firstNumber + ' ' + operator;
            result = parseInt(firstNumber) - parseInt(secondNumber);
            screen.value = result;
            break;
        
        case '*':
            secondScreen.value = firstNumber + ' ' + operator;
            result = parseInt(firstNumber) * parseInt(secondNumber);
            screen.value = result;
            break;

        case '/':
            secondScreen.value = firstNumber + ' ' + operator;
            result = parseInt(firstNumber) / parseInt(secondNumber);
            screen.value = result;
            break;
    
        default:
            break;
    }

}
