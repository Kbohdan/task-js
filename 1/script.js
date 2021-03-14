/* let inputIn = document.querySelector('.input');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function() {
    let b = inputIn.value;
    div.innerHTML = b;
    inputIn.value = '';
} */

let inputIn = document.querySelector('.i-1');
let btn = document.querySelector('.b-1');
let div = document.querySelector('.out-1');


btn.onclick = function() {
    if (inputIn.value == 4) {
        let b = inputIn.value;
        div.innerHTML = 'true';
        inputIn.value = '';
    } else {
        let b = inputIn.value;
        div.innerHTML = 'false';
        inputIn.value = '';
    }
}