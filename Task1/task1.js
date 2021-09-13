document.write("Функції.Завдання 1<br/><br/>");

function Add(a,b) {
    return a+b;
}
function Sub(a,b) {
    return a-b;
}
function Mul(a,b) {
    return a*b;
}
function Div(a,b) {
    if (b===0) {
        return "Ділити на нуль не можна!";
    }
    else{
        return a/b;
    }
}

let firstNumber = prompt("Введіть перше число", 0);
let secondNumber = prompt("Введіть друге число", 0);
document.write(`Введені числа: ${firstNumber} та ${secondNumber} <br/><br/>`)

let choice = prompt("Оберіть дію: 1 - додавання, 2 - віднімання, 3 - множення, 4 - ділення");
switch (Number(choice)) {
    case 1:
        document.write("Результат додавання - " +  Add(Number(firstNumber), Number(secondNumber)) + "<br/>");        
        break;
    case 2:
        document.write("Результат віднімання - " +  Sub(Number(firstNumber), Number(secondNumber)) + "<br/>");
        break;
    case 3:
        document.write("Результат множення - " +  Mul(Number(firstNumber), Number(secondNumber)) + "<br/>");
        break;
    case 4:
        document.write("Результат ділення - " +  Div(Number(firstNumber), Number(secondNumber)) + "<br/>");
        break;
    default:
        break;
}