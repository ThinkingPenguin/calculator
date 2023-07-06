const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const secondScreen = document.querySelector('.scd-screen')
const clear = document.querySelector('.clear-all');
const equal = document.getElementsByClassName('equal-sign');
const signOperator = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('button');
let numberOne = '';
let numberTwo = '';
let operatorSign = '';

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

Array.from(numbers).forEach(function (numb) {
    numb.addEventListener('click', function(){
        if (screen.value === '0') {
            screen.value = '';
        }

        if (operatorSign === '') {
            numberOne += numb.value;
        } else {
            numberTwo += numb.value; 
        }
        screen.value += numb.value;

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
clearScreen();
signOperator.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.value !== '=') {
            operatorSign = e.target.value;
            console.log('Number One: ' + numberOne);
            console.log('Operator ' + operatorSign);
            
        } else {
            //console.log('Seconde number ' + numberTwo);
            operate(numberOne, operatorSign, numberTwo);
            
        }
    })
})

function clearScreen() {
    clear.addEventListener('click', () => {
        screen.value = '0';
        secondScreen.value = ''
    })
}

function operate(firstNumber, operator, secondNumber){
    switch (operator) {
        case '+':
            console.log(parseInt(firstNumber) + parseInt(secondNumber));
            break;

        case '-':
            console.log(parseInt(firstNumber) - parseInt(secondNumber));
            break;
        
        case '*':
            console.log(parseInt(firstNumber) * parseInt(secondNumber));
            break;

        case '/':
            console.log(parseInt(firstNumber) / parseInt(secondNumber));
            break;
    
        default:
            break;
    }

}