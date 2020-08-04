
let dateNow = document.getElementById('now-date');
let date = new Date();
dateNow.innerHTML = date;

let btn = document.getElementById('btn');
btn.onclick = function (event) {
    let date1 = new Date();
    let name = document.getElementById('name');
    console.log(name.value);
    let text = document.getElementById('text');
    console.log(text.value);

    let str = `<h2>${name.value}</h2><p>${date1}</p><p>${text.value}</p>`;
    let newDiv = document.createElement('div');
    newDiv.innerHTML = str;
    let comment = document.getElementById('comment');
    comment.prepend(newDiv);
    name.value = '';
    text.value = '';
    event.preventDefault();
}



