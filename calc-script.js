let value = '';
let num1 = '';
let num2 = '';
let total = '';
let operatorEqual = false;
let operatorAdd = false;
let operatorSubtract = false;
let operatorDivide = false;
let operatorMultiply = false;
let history = document.getElementById('history');
let back = document.getElementById('del');
let answer = document.getElementById('answer');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let decimal = document.getElementById('.');
let add = document.getElementById('+');
let subtract = document.getElementById('-');
let multiply = document.getElementById('x');
let divide = document.getElementById('/');
let clear = document.getElementById('clear');
let equals = document.getElementById('=');
one.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 1;
        return answer.innerHTML = 1;
    } else {
    value += 1;
    return answer.innerHTML += 1;
    };   
});
two.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 2;
        return answer.innerHTML = 2;
    }
    value += 2;
    return answer.innerHTML += 2;
});
three.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 3;
        return answer.innerHTML = 3;
    }
    value += 3;
    return answer.innerHTML += 3;
});
four.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 4;
        return answer.innerHTML = 4;
    }
    value += 4;
    return answer.innerHTML += 4;
});
five.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 5; 
        return answer.innerHTML = 5;
    }
    value += 5;
    return answer.innerHTML += 5;
});
six.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 6; 
        return answer.innerHTML = 6; 
    }
    value += 6;
    return answer.innerHTML += 6;
});
seven.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 7; 
        return answer.innerHTML = 7;
    }
    value += 7;
    return answer.innerHTML += 7;
});
eight.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 8; 
        return answer.innerHTML = 8;
    }
    value += 8;
    return answer.innerHTML += 8;
});
nine.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 9; 
        return answer.innerHTML = 9;
    }
    value += 9;
    return answer.innerHTML += 9;
});
zero.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += 0; 
        return answer.innerHTML = 0;
    }
    value += 0;
    return answer.innerHTML += 0;
});
function operationAdd (a, b) {
    return a + b;
};
decimal.addEventListener('click', function(){
    if(operatorEqual == true){
        value = '';
        operatorEqual = false;
        value += '0.'; 
        return answer.innerHTML = 0 + '.';
    } else if(value.toString().includes('.') == true){
        return answer.innerHTML = value;
    } else if(value.length == 0){
        value += '0.';
        return answer.innerHTML = 0 + '.';
    } else {
    value += '.';
    return answer.innerHTML += '.';
    }
});
add.addEventListener('click', function(){
    let historyArray = [];
    if(num1 > 0 && value.length == 0 && operatorSubtract == true){
        operatorSubtract = false;
    } else if(num1 > 0 && value.length == 0 && operatorMultiply == true){
        operatorMultiply = false;
    }else if(num1 > 0 && value.length == 0 && operatorDivide == true){
        operatorDivide = false;
    }
    if(operatorEqual == true){
        num1 = Number(value);
        value = '';
        operatorEqual = false;
        operatorAdd = true; 
        return answer.innerHTML = '', 
        history.innerHTML = num1 + ' + ';
    } else if(num1 > 0 && operatorAdd == true){
        num2 = Number(value);
        num1 = operationAdd(num1, num2);
        return answer.innerHTML = '',
        history.innerHTML = num1 + ' + ',
        
        value = '',
        num2 = '', 
        operatorSubtract = false, 
        operatorMultiply = false, 
        operatorDivide = false, 
        operatorAdd = true;
    } else if(num1 > 0 && operatorSubtract == true){
            num2 = Number(value);
            num1 = num1 - num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' + ',
            
            value = '',
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = false, 
            operatorDivide = false, 
            operatorAdd = true;
    } else if(num1 > 0 && operatorMultiply == true){
            num2 = Number(value);
            num1 = num1 * num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' + ',
            
            value = '', 
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = false, 
            operatorDivide = false, 
            operatorAdd = true;
    } else if(num1 > 0 && operatorDivide == true){
            num2 = Number(value);
            num1 = num1 / num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' + ',
            
            value = '',
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = false, 
            operatorDivide = false, 
            operatorAdd = true;
    }else {
    num1 = Number(value);
    operatorAdd = true;
    value = '';
    return history.innerHTML = num1 + ' + ',
    answer.innerHTML = '';
    }
});
subtract.addEventListener('click', function(){
    if(num1 > 0 && value.length == 0 && operatorAdd == true){
        operatorAdd = false;
    } else if(num1 > 0 && value.length == 0 && operatorMultiply == true){
        operatorMultiply = false;
    }else if(num1 > 0 && value.length == 0 && operatorDivide == true){
        operatorDivide = false;
    }
    if(operatorEqual == true){
        num1 = Number(value);
        value = '';
        operatorEqual = false;
        operatorSubtract = true; 
        return answer.innerHTML = '', 
        history.innerHTML = num1 + ' - '; 
    }else if(num1 > 0 && operatorAdd == true){
        num2 = Number(value);
        num1 = num1 + num2;
        return answer.innerHTML = '',
        history.innerHTML = num1 + ' - ',
         
        value = '',
        num2 = '', 
        operatorSubtract = true, 
        operatorMultiply = false, 
        operatorDivide = false, 
        operatorAdd = false;
    } else if(num1 > 0 && operatorSubtract == true){
            num2 = Number(value);
            num1 = num1 - num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' - ',
           
            value = '',
            num2 = '',
            operatorSubtract = true, 
            operatorMultiply = false, 
            operatorDivide = false, 
            operatorAdd = false;
    } else if(num1 > 0 && operatorMultiply == true){
            num2 = Number(value);
            num1 = num1 * num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' - ',
            
            value = '', 
            num2 = '',
            operatorSubtract = true, 
            operatorMultiply = false, 
            operatorDivide = false, 
            operatorAdd = false;
    } else if(num1 > 0 && operatorDivide == true){
            num2 = Number(value);
            num1 = num1 / num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' - ',
            
            value = '',
            num2 = '',
            operatorSubtract = true, 
            operatorMultiply = false, 
            operatorDivide = false, 
            operatorAdd = false;
    }else {
    num1 = Number(value);
    operatorSubtract = true;
    value = '';
    return answer.innerHTML = '', history.innerHTML = num1 + ' - ';
    }
});
multiply.addEventListener('click', function(){
    if(num1 > 0 && value.length == 0 && operatorAdd == true){
        operatorAdd = false;
    } else if(num1 > 0 && value.length == 0 && operatorSubtract == true){
        operatorSubtract = false;
    }else if(num1 > 0 && value.length == 0 && operatorDivide == true){
        operatorDivide = false;
    }
    if(operatorEqual == true){
        num1 = Number(value);
        value = '';
        operatorEqual = false;
        operatorMultiply = true; 
        return answer.innerHTML = '', 
        history.innerHTML = num1 + ' x '; 
    }else if(num1 > 0 && operatorAdd == true){
        num2 = Number(value);
        num1 = num1 + num2;
        return answer.innerHTML = '',
        history.innerHTML = num1 + ' x ',
         
        value = '',
        num2 = '', 
        operatorSubtract = false, 
        operatorMultiply = true, 
        operatorDivide = false, 
        operatorAdd = false;
    } else if(num1 > 0 && operatorSubtract == true){
            num2 = Number(value);
            num1 = num1 - num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' x ',
            
            value = '',
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = true, 
            operatorDivide = false, 
            operatorAdd = false;
    } else if(num1 > 0 && operatorMultiply == true){
            num2 = Number(value);
            num1 = num1 * num2;
            return answer.innerHTML = '',
            history.innerHTML = num1+ ' x ',
            
            value = '', 
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = true, 
            operatorDivide = false, 
            operatorAdd = false;
    } else if(num1 > 0 && operatorDivide == true){
            num2 = Number(value);
            num1 = num1 / num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' x ',
            
            value = '',
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = true, 
            operatorDivide = false, 
            operatorAdd = false;
    }else {
    num1 = Number(value);
    operatorMultiply = true; 
    value = '';
    return answer.innerHTML = '', history.innerHTML = num1 + ' x ';
    }
});
divide.addEventListener('click', function(){
    if(num1 > 0 && value.length == 0 && operatorAdd == true){
        operatorAdd = false;
    } else if(num1 > 0 && value.length == 0 && operatorSubtract == true){
        operatorSubtract = false;
    }else if(num1 > 0 && value.length == 0 && operatorMultiply == true){
        operatorMultiply = false;
    } 
    if(operatorEqual == true){
        num1 = Number(value);
        value = '';
        operatorEqual = false;
        operatorDivide = true; 
        return answer.innerHTML = '', 
        history.innerHTML = num1 + ' / '; 
    }else if(num1 > 0 && operatorAdd == true){
        num2 = Number(value);
        num1 = num1 + num2;
        return answer.innerHTML = '',
        history.innerHTML = num1 + ' / ',
        
        value = '',
        num2 = '', 
        operatorSubtract = false, 
        operatorMultiply = false, 
        operatorDivide = true, 
        operatorAdd = false;
    } else if(num1 > 0 && operatorSubtract == true){
            num2 = Number(value);
            num1 = num1 - num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' / ',
            
            value = '',
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = false, 
            operatorDivide = true, 
            operatorAdd = false;
    } else if(num1 > 0 && operatorMultiply == true){
            num2 = Number(value);
            num1 = num1 * num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' / ',
         
            value = '', 
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = false, 
            operatorDivide = true, 
            operatorAdd = false;
    } else if(num1 > 0 && operatorDivide == true){
            num2 = Number(value);
            num1 = num1 / num2;
            return answer.innerHTML = '',
            history.innerHTML = num1 + ' / ',
            
            value = '',
            num2 = '',
            operatorSubtract = false, 
            operatorMultiply = false, 
            operatorDivide = true, 
            operatorAdd = false;
    }else {
    num1 = Number(value);
    operatorDivide = true;
    value = '';
    return answer.innerHTML = '', history.innerHTML = num1 + ' / ';
    }
});
clear.addEventListener('click', function(){
    value = '';
    num1 = '';
    num2 = '';
    operatorAdd = false; 
    operatorSubtract = false;
    operatorMultiply = false; 
    operatorDivide = false;
    operatorEqual = false;
    return answer.innerHTML = '', history.innerHTML = '';
});
equals.addEventListener('click', function(){
    num2 = Number(value);
    operatorEqual = true;
    if(operatorAdd == true){
        value = Number(num1) + Number(num2);
        
        return answer.innerHTML = value.toString().slice(0, 14),
        history.innerHTML = '',
        operatorAdd = false;
    } else if(operatorSubtract == true){
        value = num1 - num2;
        return answer.innerHTML = num1 - num2.toString().slice(0, 14),
        history.innerHTML = '', 
        operatorSubtract = false;
    } else if(operatorMultiply == true){
        value = num1 * num2;
        return answer.innerHTML = num1 * num2.toString().slice(0, 14),
        history.innerHTML = '', 
        operatorMultiply = false;
    } else if(operatorDivide == true && num2 !== 0){
        value = num1 / num2;
        return answer.innerHTML = (num1 / num2).toString().slice(0, 14), 
        history.innerHTML = '', 
        operatorDivide = false;
    } else if(value.length > 0){
        return answer.innerHTML = value;
    }else {
        return answer.innerHTML = "Cannot divide by 0", 
        history.innerHTML = '';
    }
});
back.addEventListener('click', function(){
    value = value.substring(0, value.length -1);
    return answer.innerHTML = value;
});