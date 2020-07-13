//задание 1
/*
Создать массив «Список покупок». Каждый элемент массива 
является объектом, который содержит название продукта, необ-
ходимое количество и куплен или нет. Написать несколько функ-
ций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала 
шли некупленные продукты, а потом – купленные.
*/

// let shopList = [
//     { name: 'cola', quantity: 2, buy: true },
//     { name: 'pepsi', quantity: 1, buy: false },
//     { name: 'fanta', quantity: 4, buy: true }
// ]
// let result = shopList.sort((product1, product2) => product1.buy < product2.buy ? -1 : 1)
// console.log(result);

//задание 2
/*Добавление покупки в список. Учтите, что при добавлении 
покупки с уже существующим в списке продуктом, необ-
ходимо увеличивать количество в существующей покупке, 
а не добавлять новую. 
*/
// let shopList = [
//     { name: 'cola', quantity: 2, buy: true },
//     { name: 'pepsi', quantity: 1, buy: false },
//     { name: 'fanta', quantity: 4, buy: true }
// ]

// shopList.push({ name: 'belacola', quantity: 1, buy: true });

// console.log(shopList);

//задание 3
/*
Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.
*/



//задание 4
/*Создать массив, описывающий чек в магазине. Каждый эле-
мент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
Распечатка чека на экран.
*/
// let cheque = [
//     { name: 'shugar', quantity: 2, coast: 1.54 },
//     { name: 'bread', quantity: 1, coast: 1.12 },
//     { name: 'cake', quantity: 4, coast: 3.24 },
//     { name: 'milk', quantity: 1, coast: 1.39 }
// ]
// console.log(cheque);


//задание 5
/*
Подсчет общей суммы покупки.
*/
// let cheque = [
//     { name: 'shugar', quantity: 2, coast: 1.54 },
//     { name: 'bread', quantity: 1, coast: 1.12 },
//     { name: 'cake', quantity: 4, coast: 3.24 },
//     { name: 'milk', quantity: 1, coast: 1.39 }
// ]
// let sum = cheque.reduce((total, product) => total + (product.quantity * product.coast), 0);
// console.log(sum);





//задание 6

/*
Получение самой дорогой покупки в чеке.
 */
// let cheque = [
//     { name: 'shugar', quantity: 2, coast: 1.54 },
//     { name: 'bread', quantity: 1, coast: 1.12 },
//     { name: 'cake', quantity: 4, coast: 3.24 },
//     { name: 'milk', quantity: 1, coast: 1.39 }
// ]
// function checkCheque(arr) {
//     let max = [arr[0].coast];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].coast > max) {
//             max = arr[i].coast;
//         }
//     } console.log(`Самая дорогая покупка: ${max}`);
// }
// checkCheque(cheque);

//или

// let cheque = [
//     { name: 'shugar', quantity: 2, coast: 1.54 },
//     { name: 'bread', quantity: 1, coast: 1.12 },
//     { name: 'cake', quantity: 4, coast: 3.24 },
//     { name: 'milk', quantity: 1, coast: 1.39 }
// ]
// let maxCoast = cheque.sort((product1, product2) => {
//     if (product1.coast > product2.coast) {
//         return -1;
//     } else if (product1.coast < product2.coast) {
//         return 1;
//     }
// })
// console.log(maxCoast[0]);



//задание 7
/*
Подсчет средней стоимости одного товара в чеке.
 */
// let cheque = [
//     { name: 'shugar', quantity: 2, coast: 1.54 },
//     { name: 'bread', quantity: 1, coast: 1.12 },
//     { name: 'cake', quantity: 4, coast: 3.24 },
//     { name: 'milk', quantity: 1, coast: 1.39 }
// ]

// let sumCoast = cheque.reduce((total, product) => total + product.coast, 0);
// let averageCoast = sumCoast / cheque.length;
// console.log(averageCoast);



//задание 8
/*Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля. 
Написать функцию, которая принимает массив стилей и 
текст, и выводит этот текст с помощью document.write() в тегах 
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.  
 */






//задание 9

// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и 
// названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним.
// Вывод на экран всех аудиторий. 

// let masClass = [
//     { name: 'mathClass', quantity: 15, faculty: 'math' },
//     { name: 'physicsClass', quantity: 20, faculty: 'physics' },
//     { name: 'chemistryClass', quantity: 10, faculty: 'chemistry' },
//     { name: 'computerScienceClass', quantity: 16, faculty: 'computerScience' },
//     { name: 'biologyClass', quantity: 18, faculty: 'biology' }
// ]
// let nameClass = masClass.map(lectureHall => lectureHall.name);
// console.log(nameClass);

//задание 10
//Вывод на экран аудиторий для указанного факультета.




//задание 11
// Вывод на экран только тех аудиторий, которые подходят для 
// переданной группы. Объект-группа состоит из названия, 
// количества студентов и названия факультета. 
let masClass = [
    { name: 'mathClass', quantity: 15, faculty: 'math' },
    { name: 'physicsClass', quantity: 20, faculty: 'physics' },
    { name: 'chemistryClass', quantity: 10, faculty: 'chemistry' },
    { name: 'computerScienceClass', quantity: 16, faculty: 'computerScience' },
    { name: 'biologyClass', quantity: 18, faculty: 'biology' }
]


//задание 12
//Функция сортировки аудиторий по количеству мест.
// let masClass = [
//     { name: 'mathClass', quantity: 15, faculty: 'math' },
//     { name: 'physicsClass', quantity: 20, faculty: 'physics' },
//     { name: 'chemistryClass', quantity: 10, faculty: 'chemistry' },
//     { name: 'computerScienceClass', quantity: 16, faculty: 'computerScience' },
//     { name: 'biologyClass', quantity: 18, faculty: 'biology' }
// ]
// let checkLectureHall = masClass.sort((class1, class2) => {
//     if (class1.quantity > class2.quantity) {
//         return -1;
//     } else if (class1.quantity < class2.quantity) {
//         return 1;
//     }
// })
// console.log (checkLectureHall);

//задание 13
//Функция сортировки аудиторий по названию (по алфавиту).

// let masClass = [
//     { name: 'mathClass', quantity: 15, faculty: 'math' },
//     { name: 'physicsClass', quantity: 20, faculty: 'physics' },
//     { name: 'chemistryClass', quantity: 10, faculty: 'chemistry' },
//     { name: 'computerScienceClass', quantity: 16, faculty: 'computerScience' },
//     { name: 'biologyClass', quantity: 18, faculty: 'biology' }
// ]
// let checkLectureHall = masClass.sort((class1, class2) => {
//     if (class1.name > class2.name) {
//         return 1;
//     } else if (class1.name < class2.name) {
//         return -1;
//     }
// })
// console.log (checkLectureHall);
