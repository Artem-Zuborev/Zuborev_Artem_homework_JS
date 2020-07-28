let btn = document.getElementById('btn');
btn.onclick = function (event) {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let num3 = document.getElementById('num3');
    let num4 = document.getElementById('num4');
    let showStr = document.getElementById('result');

    let result = 0;
    if (num2.checked) {
        result++
    } if (num4.checked) {
        result++
    }
    let str = `Результат: ${result} правильных ответа из 2 вопросов`;
    showStr.innerHTML = str;
    
    event.preventDefault();
}