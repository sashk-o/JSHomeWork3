document.write("Масиви.Завдання 1<br/><br/>");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FindMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function FindMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function ElementSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function ElementAver(array) {
    return ElementSum(array) / array.length;
}

function FindOdds(array) {
    let newArr = new Array();
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            newArr[k] = array[i];
            k++;
        }
    }
    return newArr;
}

let n = prompt("Введіть кількість елементів у масиві", 10);
let arr = new Array(Number(n));

for (let i = 0; i < arr.length; i++) {
      arr[i] = getRandomInt(1, 100);
}

document.write(arr + `<br/><br/>Найменше значення = ${FindMin(arr)}<br/>
Найбільше значення = ${FindMax(arr)}<br/>
Загальна сума елементів = ${ElementSum(arr)}<br/>
Середнє арифметичне елементів = ${ElementAver(arr)}<br/>
Непарні значення = ${FindOdds(arr)}<br/>`);