function getNumbers(number) {
    let answer = document.getElementById('answer');
    let input = document.getElementById('myInput');
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
        case 'forge':
            answer.value = input.value * 1.9;
            break;
    }
}

function getOperands(operator) {
    let input = document.getElementById('myInput');
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
        case '.':
            input.value += '.';
            break;
    }
}

function del() {
    let input = document.getElementById('myInput');
    let del = input.value;
    if(del.length > 0) {
        del =  del.substring(0, del.length -1);
        input.value = del;
    }
}

function clearAll() {
    let input = document.getElementById('myInput');
    document.getElementById('myInput').value = '';
    document.getElementById('answer').value = '';
}

let rowid = 1;
function compute() {
    let newrow = document.getElementById('newrow');
    let input = document.getElementById('myInput');
    if (input.value.length > 20) {
        document.getElementById('answer').value = ' Maximum character length 20! ';
    } else if (input.value.length < 3) {
        document.getElementById('answer').value = ' Minimum 3 character required! ';
    }  else {
        let answer = eval(input.value);
        document.getElementById('answer').value = answer;
        let row = newrow.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = rowid;
        cell2.innerHTML = input.value;
        cell3.innerHTML = answer;
        document.getElementById('myInput').value = '';
        rowid++; 
    }
}
let bracket = 1;
function getBracket() {
    let input = document.getElementById('myInput')
     if (bracket == 1) {
        bracket++;
        input.value += '(';
    } else {
        input.value += ')';
        bracket--;
    }
}