function mainFunction(callback){
let num = +prompt ("Введите число");
let exp = +prompt ("Введите степень");

callback(num, exp);
}

function exponentation (a, b){
const result = a ** b;
alert(result);
}

mainFunction(exponentation);

// Callback функция multiplay
function multiplay (a, b){
    let result = a * b;
    alert(result);
}
mainFunction(multiplay);

// Callback функция division
function division (a, b){
    let result = a / b;
    alert(result);
}
mainFunction(division);

// Callback функция modulo
function modulo (a, b){
    let result = a % b;
    alert(result);
}
mainFunction(modulo);