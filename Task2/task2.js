document.write("Функції.Завдання 2<br/><br/>");

function CheckNumber(a) {
    let message = "";
    if (a > 0) {
        message += "Число додатнє<br/>";
    }
    else if (a < 0){
        message += "Число від'ємне<br/>";
    }
    else{
        message += "Число нейтральне<br/>"
    }

    let k = 0;
    for (let i = 1; i <= a; i++)
    {
        if (a % i == 0)
        {
            k++;
        }
        if (k == 3)
        {
            break;
        }
    }
    if (k <= 2)
    {
        message += 'Число просте<br/>';
    }
    else
    {
        message += 'Число складене<br/>';
    }

    for (let i = 2; i < 10; i++) {
        if (i == 4 || i == 7 || i == 8) {
            continue;
        }
        if (a % i == 0) {
            message += `Число ділиться на ${i} без залишку<br/>`;
        }
        else
            message += `Число не ділиться на ${i} без залишку<br/>`;
    }
    return message;
}

let number = prompt("Введіть число", 0);
document.write(`Ваше число - ${number}<br/>` + CheckNumber(Number(number)));