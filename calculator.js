function getNumbers(number) {
        switch(number) {
        case 0:
            myInput.value += '0';
            break;
        case 1:
            myInput.value += '1';
            break;
        case 2:
            myInput.value += '2';
            break;
        case 3:
            myInput.value += '3';
            break;
        case 4:
            myInput.value += '4';
            break;
        case 5:
            myInput.value += '5';
            break;
        case 6:
            myInput.value += '6';
            break;
        case 7:
            myInput.value += '7';
            break;
        case 8:
            myInput.value += '8';
            break;
        case 9:
            myInput.value += '9';
            break;
        case '+/-':
            myInput.value += -Math.abs(number);
            break;
        case 'forge':
            answer.value = myInput.value * 1.9;
            let row = newrow.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = rowid;
            cell2.innerHTML = myInput.value + " * 1.9 ";
            cell3.innerHTML = answer.value;
            myInput.value = '';
            rowid++;
            break;
    }
}

function getOperands(operator) {
    switch(operator) {
        case '-':
            myInput.value += '-';
            break;
        case '+':
            myInput.value += '+';
            break;
        case '*':
            myInput.value += '*';
            break;
        case '%':
            myInput.value += '%';
            break;
        case '/':
            myInput.value += '/';
            break;
        case '+/-':
            myInput.value = -Math.abs(myInput.value);
            break;
        case '.':
            myInput.value += '.';
            break;
    }
}

function del() {
    let del = myInput.value;
    if(del.length > 0) {
        del =  del.substring(0, del.length -1);
        myInput.value = del;
    }
}

function clearAll() {
    myInput.value = '';
    answer.value = '';
}

let rowid = 1;
function compute() {
    if (myInput.value.length > 20) {
        myInput.value = ' Maximum character length 20! ';
    } else if (myInput.value.length < 3) {
        answer.value = ' Minimum 3 character required! ';
    }  else {
        let answer = eval(myInput.value);
        document.getElementById('answer').value = answer;
        let row = newrow.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = rowid;
        cell2.innerHTML = myInput.value;
        cell3.innerHTML = answer;
        myInput.value = '';
        rowid++; 
    }
}
let bracket = 1;
function getBracket() {
     if (bracket == 1) {
        bracket++;
        myInput.value += '(';
    } else {
        myInput.value += ')';
        bracket--;
    }
}