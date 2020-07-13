//задание 1.1

/*Создать объект, описывающий автомобиль (производитель, 
модель, год выпуска, средняя скорость), и следующие функции 
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
*/

// let car = {
//     made: 'Japan',
//     model: 'Honda',
//     year: 2004,
//     averageSpeed: 120,
// }
// function getInfoCar(infoCar) {
//     console.log(infoCar.made, infoCar.model, infoCar.year, infoCar.averageSpeed);
// }
// getInfoCar(car);


//задание 1.2

/* Функция для подсчета необходимого времени для пре- 
одоления переданного расстояния со средней скоростью. 
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час.
*/

// let car = {
//     made: 'Japan',
//     model: 'Honda',
//     year: 2004,
//     averageSpeed: 120,
// }
// calcTime(car, 1000);
// function calcTime(infoCar, s) {
//     let time = s / infoCar.averageSpeed;
//     if (time > 4) {
//         time = time + Math.floor(time / 4);
//     }
//     console.log(time);
// }


//задание 2.1

/*Создать объект, хранящий в себе отдельно числитель и зна-
менатель дроби, и следующие функции для работы с этим объ-
ектом.
 Функция сложения 2-х объектов-дробей.
*/
// let fraction1 = {
//     numerator1: 1,
//     denominator1: 2,
// }
// let fraction2 = {
//     numerator2: 3,
//     denominator2: 2,
// }
// function calcSumFraction(a1, a2) {
//     return (a1.numerator1 / a1.denominator1) + (a2.numerator2 / a2.denominator2);

// }

// console.log(calcSumFraction(fraction1, fraction2));


//задание 2.2

/*  Функция вычитания 2-х объектов-дробей.
*/

// let fraction1 = {
//     numerator1: 1,
//     denominator1: 2,
// }
// let fraction2 = {
//     numerator2: 3,
//     denominator2: 2,
// }
// function calcSumFraction(a1, a2) {
//     return (a1.numerator1 / a1.denominator1) - (a2.numerator2 / a2.denominator2);

// }

// console.log(calcSumFraction(fraction1, fraction2));

// задание 2.5

/* Функция сокращения объекта-дроби.
*/

// let fraction1 = {
//     numerator1: 244,
//     denominator1: 542,
// }
// calcFraction(fraction1);
// function calcFraction(a1) {
//     let itogNumber = 1;
//     for (let i = 1; i <= a1.numerator1 || i <= a1.denominator1; i++) {
//         if (a1.numerator1 % i === 0 && a1.denominator1 % i === 0) {
//             itogNumber = i;
//         }
//     }
//     a1.numerator1 = a1.numerator1 / itogNumber;
//     a1.denominator1 = a1.denominator1 / itogNumber;
// }
// console.log(`числитель: ${fraction1.numerator1} , знаменатель: ${fraction1.denominator1}`);

// задание 3.1

/*Создать объект, описывающий время (часы, минуты, секун-
ды), и следующие функции для работы с этим объектом.
 Функция вывода времени на экран.
*/

// let time = {
//     hours: 15,
//     minutes: 23,
//     seconds: 16,
// }
// getTime(time);
// function getTime(infoTime) {
//     console.log(`Часов: ${infoTime.hours} , минут: ${infoTime.minutes} , секунд: ${infoTime.seconds}`);
// }

// задание 3.2

/*Функция изменения времени на переданное количество
секунд.
*/
// let time = {
//     hours: 15,
//     minutes: 23,
//     seconds: 16,
// }

// function calcTime(infoTime) {
//     return infoTime.hours * 60 * 60 + infoTime.minutes * 60 + infoTime.seconds;
// }
// console.log(calcTime(time));

/* Функция изменения времени на переданное количество 
часов.
*/

// let timeObject = {
//     hours: 1,
//     minutes: 0,
//     seconds: 4
// }


// function changeHours(time, hours) {
//     let timeChange = (time.hours + hours) * 3600 + time.minutes * 60 + time.seconds;
//     let newHours = Math.floor(timeChange / 3600);
//     let newMinutes = Math.floor((timeChange - newHours * 3600) / 60);
//     let newSeconds = timeChange - (newHours * 3600 + newMinutes * 60);
//     return `Время ${a(newHours)}:${a(newMinutes)}:${a(newSeconds)}`;
// }
// console.log(changeHours(timeObject, 1));

// function a(num) {
//     return num < 10 ? "0" + num : num;
// }