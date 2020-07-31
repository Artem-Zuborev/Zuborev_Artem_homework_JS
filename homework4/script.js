let btn = document.getElementById('btn');
let dateNow = document.getElementById('now-date');
let date = new Date();
dateNow.innerHTML = date;

btn.onclick = function (event) {
    let name = document.getElementById('name');
    let text = document.getElementById('text');
    let comment = document.getElementById('comment');
    let str = `${name.value} ${date} ${text.value}`;
    console.log(name.value);
    comment.innerHTML = str;
    event.preventDefault();
    event.stopPropagation();
}