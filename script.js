


//--- Задание №1
/*
let age = prompt('Enter your age');
if (age >= 0 && age <= 12) {
    alert('Вы ребенок');
} else if (age >= 12 && age <= 18) {
    alert('Вы подросток');
} else if (age >= 18 && age <= 60) {
    alert('Вы взрослый');
} else {
    alert('Вы пенсионер');
}
*/

// задание №2
/*
let number = +prompt('Enter your number');
switch (number) {
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
    case 0:
        alert(')');
        break;
}
*/

// задание №3
/*
let number = +prompt('Введите трехзначное число: ');
let number1 = parseInt(number / 100);
let number2 = parseInt(number / 10) % 10;
let number3 = parseInt(number % 10);
if (number1 === number2 || number2 === number3 || number1 === number3) {
    alert('Найдено совпадение цифр');
} else {
    alert('Совпадений не найдено');
}
*/
// задание №4
/*
let year = prompt('Enter year');
if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    alert('Год високосный');
} else {
    alert('Год не високосный');
}
*/

// задание №5

/*
let number = +prompt("Enter your number");
let x = number % 10;
let y = number - x;
let z = y / 10;
let a = z % 10;
let b = z - a;
let c = b / 10;
let d = c % 10;
let e = c - d;
let f = e / 10;
let g = f % 10;
let h = f - g;
let j = h / 10;
let result = String(x) + String(a) + String(d) + String(g) + String(j);
if (number === result) {
    alert('Число является палиндромом');
} else {
    alert('Число не является палиндромом');
}
*/

// задание №6
/*
let usd = prompt('Enter your money $');
const courseEur = 0.89;
const courseUan = 7.12;
const courseAzn = 1.7;
if (confirm('Евро?')) {
    alert(usd * courseEur);
} else if (confirm('Юани?')) {
    alert(usd * courseUan);
} else if (confirm('Манаты?')) {
    alert(usd * courseAzn);
} else {
    alert('Такой валюты нет');
}
*/

// задание №7
/*
let sum = +prompt('Введите сумму покупки');
if (sum >= 200 && sum < 300) {
    alert(sum - (sum * 0.03));
} else if (sum >= 300 && sum < 500) {
    alert(sum - (sum * 0.05));
} else if (sum < 200) {
    alert(`Извините, у вас нет скидки. К оплате ${sum}`);
} else {
    alert(sum - (sum * 0.07));
}
*/


// задание №8
/*
let l = +prompt('Введите длину окружности');
let p = +prompt('Введите периметр квадрата');
let r = l / (2 * Math.PI);
let a = p / 4;
if (r <= 0.5 * a) {
    alert('Эту окружность можно вписать в данный квадрат');
} else {
    alert('Эту окружность нельзя вписать в данный квадрат');
}
*/