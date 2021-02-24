let sum = +prompt("Введите сумму в USD которую хотите перевести");

let currency = prompt("Введите валюту в которую хотите перевести: 'EUR','UAN','AZN'");

if (currency == 'EUR') {
    alert(sum * 0.82);
} else if (currency == 'UAN') {
    alert(sum * 27.95);
} else if (currency == 'AZN') {
    alert(sum * 1.70);
} else {
    alert("Не правельно введена валюта");
}