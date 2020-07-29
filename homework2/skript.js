
let btn = document.getElementById('btn');

btn.onclick = function (event) {

    let item1 = document.getElementById('item1');
    let item2 = document.getElementById('item2');
    let item3 = document.getElementById('item3');
    let item4 = document.getElementById('item4');
    let item5 = document.getElementById('item5');
    let item6 = document.getElementById('item6');
    let text = document.getElementById('text');
    let example = document.getElementById('example');
    example.innerHTML = text.value;

    if (item1.checked) {
        example.style.fontWeight = 'bold';
    }
    else if (!item1.checked) {
        example.style.fontWeight = 'normal';
    } if (item2.checked) {
        example.style.textDecoration = 'underline';
    } else if (!item2.checked) {
        example.style.textDecoration = 'none';
    } if (item3.checked) {
        example.style.fontFamily = 'italic';
    } else if (!item3.checked) {
        example.style.fontFamily = 'normal';
    } if (item4.checked) {
        example.style.textAlign = 'left';
    } if (item5.checked) {
        example.style.textAlign = 'right';
    } if (item6.checked) {
        example.style.textAlign = 'justify';
    }

    event.preventDefault();
    event.stopPropagation();
}