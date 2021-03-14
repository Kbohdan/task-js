let inputIn1 = document.querySelector('.a21');
let inputIn2 = document.querySelector('.a22');
let btn = document.querySelector('.b-2');
let out = document.querySelector('.out-2');

btn.onclick = function() {
    let b = inputIn1.value;
    let c = inputIn2.value;
    if (b > c) {
        out.innerHTML = inputIn1.value;
        inputIn1.value = '';
        inputIn2.value = '';
    } else if (b < c) {
        out.innerHTML = inputIn2.value;
        inputIn1.value = '';
        inputIn2.value = '';
    }
}