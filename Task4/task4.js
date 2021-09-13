document.write("Масиви.Завдання 2<br/><br/>");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShowMatrix(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            document.write(`[ ${matrix[i][j]} ] `);
        }
        document.write('<br/>');
    }
}

function ChangeNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i == j && array[i][j] > 0) {
                array[i][j] = 1;
            }
            else if (i == j && array[i][j] < 0){
                array[i][j] = 0
            }
            else
                continue;
        }
    }
}

let matrix = [];
for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = getRandomInt(-100, 100);
    }
}
document.write("Початкова матриця<br/><br/>");
ShowMatrix(matrix);

document.write("<br/>Змінена матриця<br/><br/>");
ChangeNumbers(matrix);
ShowMatrix(matrix);