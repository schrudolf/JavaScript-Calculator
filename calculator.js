function getNumbers(number) {
    var input = document.getElementById('myInput');
    switch(number) {
        case 0:
            input.value += '0';
            break;
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case '+/-':
            input.value += -Math.abs(number);
            break;
    }
}

function getOperands(operator) {
    var input = document.getElementById('myInput');
    switch(operator) {
        case '-':
            input.value += '-';
            break;
        case '+':
            input.value += '+';
            break;
        case '*':
            input.value += '*';
            break;
        case '%':
            input.value += '%';
            break;
        case '/':
            input.value += '/';
            break;
        case '+/-':
            input.value = -Math.abs(input.value);
            break;
    }
}

function del() {
    var input = document.getElementById('myInput');
    var del = input.value;
    if(del.length > 0) {
        del =  del.substring(0, del.length -1);
        input.value = del;
    }
}

function clearAll() {
    var input = document.getElementById('myInput');
    document.getElementById('myInput').value = '';
    document.getElementById('answer').value = '';
}

function compute() {
    var input = document.getElementById('myInput');
    answer = eval(input.value);
    document.getElementById('answer').value = answer;
}
