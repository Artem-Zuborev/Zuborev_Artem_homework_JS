let btn = document.getElementById('btn');
btn.addEventListener('click', () => {

    let a = document.getElementById('item-1');
    let b = document.getElementById('item-2');
    let c = document.getElementById('item-3');




    if (a.style.backgroundColor === 'red') {
        b.style.backgroundColor = 'yellow';
        a.style.backgroundColor = 'gray';
    } else if (b.style.backgroundColor === 'yellow') {
        b.style.backgroundColor = 'gray';
        c.style.backgroundColor = 'green';

    } else if (c.style.backgroundColor === 'green') {
        a.style.backgroundColor = 'red';
        c.style.backgroundColor = 'gray';

    }
    else { a.style.backgroundColor = 'red' }



})
