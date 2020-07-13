// задание 1

/*
 Написать функцию, которая принимает строку и выводит 
статистику о ней: количество букв, количество цифр и 
количество других знаков.
*/
// let str = 'gggggfkgkggffu177655!!!';
// let allNumbers = '0123456789';
// let allLetters = 'aeioubcdfghjklmnpqrstvwxyz';
// let allSymbols = '!@#$%^&*()_+=-/*<>?/.,';
// function infoString(string, string1, string2, string3) {
//    let letters = 0;
//     let numbers = 0;
//     let symbols = 0;
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < string1.length; j++) {
//             if (string[i] === string1[j]) {
//                 numbers++;
//             }
//         }
//         for (let k = 0; k < string2.length; k++) {
//             if (string[i] === string2[k]) {
//                 letters++;
//             }
//         }
//         for (let f = 0; f < string3.length; f++) {
//             if (string[i] === string3[f]) {
//                 symbols++;
//             }
//         }
//     }
//     return `количество чисел: ${numbers}, количество букв: ${letters}, количество символов:${symbols}`;
// }
// console.log(infoString(str, allNumbers, allLetters, allSymbols));



// задание 2

/*
Написать функцию, которая принимает двузначное число
и возвращает его в текстовом виде.
Например: 35 – тридцать пять, 89 – восемьдесят девять,
12 – двенадцать.
 */

// function textNumber(number) {
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//     let fourth = ['Cто', 'Двесте', 'Триста', 'Четыреста', 'Пятьсот', 'Шестьстот', 'Семьсот', 'Восемьсот', 'Девятьсот'];
//     if (number > 0 && number <= 9) {
//         return first[number - 1];
//     }
//     if (number >= 10 && number <= 20) {
//         return second[number - 10];
//     }
//     if (number > 20 && number <= 99) {
//         let str = `${number}`;
//         str = str.split('');
//         let firstNumber = str[0];
//         let secondNumber = str[1];
//         return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//     }
//     if (number >= 100 && number <= 999) {
//         let str = `${number}`;
//         str = str.split('');
//         let firstNumber = str[0];
//         let secondNumber = str[1];
//         let thirdNumber = str[2];
//         return `${fourth[firstNumber-1]} ${third[secondNumber - 2]} ${first[thirdNumber - 1]}`;
//     }
// }
// console.log(textNumber(3));
// console.log(textNumber(19));
// console.log(textNumber(999));




//задание 3
/*
Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.
 */

// let string = "сммВВьр роиыроПРпрымдры";
// function changeRegister(str) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             newStr += str[i].toUpperCase();
//         } else {
//             newStr += str[i].toLowerCase();
//         }
//     }
//     return newStr;
// }
// console.log(changeRegister(string));


//задание 4
/*
Написать функцию, которая преобразует названия css-
стилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, text-
align в textAlign.
 */
// let string = 'font-size';
// function getСamelСase(str) {
//     str = str.split('-');
//     str1 = str[1]; // второе слово после дефиса
//     str2 = str1[0].toUpperCase(); // первую букву во втором слове делаем большой
//     console.log(`${str[0]}${str2}${str1.slice(1)}`);

// }
// getСamelСase(string);


//задание 5
/*
Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно-
ориентированное программирование в ООП.
*/

// let string = 'cascading style sheets';
// function getNewString(str) {
//     str = str.split(' ');
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i].slice(0, str.length - 2);
//         str[i] = str[i].toUpperCase();
//     }
//     str = str.join('');
//     console.log(str);
// }
// getNewString(string);


//задание 6

/*
Написать функцию, которая принимает любое коли-
чество строк, объединяет их в одну длинную строку и
возвращает ее.
 */

// let str1 = 'sbdbdsbgsdgbd';
// let str2 = 'ssgghjhfjhgg';
// let str3 = 'johjjgfjkdgmb';
// function getSumString(string1, string2, string3) {
//     let sumStr = string1 + string2 + string3;
//     console.log(sumStr);
// }
// getSumString(str1, str2, str3);


//задание 7

/*
Написать функцию – калькулятор. Функция принимает
строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает
пример и возвращает результат.
 */
let string = '2+2';

let symbol = '+-/*';
function calcSum(str, str1) {
    for (let i = 0; i < str.length; i++) {

    }

}


//задание 8

/*
Написать функцию, которая получает url и выводит под-
робную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.
 */



//задание 9

/*
Написать функцию, которая принимает строку и раздели-
тель и возвращает массив подстрок, разбитых с помощью
указанного разделителя.
Например: строка “10/08/2020”, разделитель “/”, результат:
“10”, “08”, “2020”.
 */
// let str = '10/08/2020';
// function getArrString(string) {
//     str = str.split('/');
//     console.log(str);
// }
// getArrString(str);


// let strWithSeparat='110/25/144/366/11/985/78/985/65/254/785';
// let sep='/';


// function createMas(str,separation,mas=[]){
//     if(str.indexOf(separation)===-1){
//         mas.push(str);
//         return mas;
//     }
//     let ind=str.indexOf(separation);
//     mas.push(str.slice(0,ind));
//     return createMas(str.slice(ind+1),separation,mas);
// }
// console.log(createMas(strWithSeparat,sep));

//задание 10

/*
Написать функцию вывода текста по заданному шаблону.
Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % ука-
зывается индекс входного параметра. При выводе вместо
%индекс необходимо вывести значение соответствующего
входного параметра.
Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
8, 2020) должна вывести “Today is Monday 10.8.2020”.
 */

