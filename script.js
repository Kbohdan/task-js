let num = prompt("Введите трех значное число");


if (num == "" || num == undefined) {
    alert("Введите число")
}

if (num[1] && num[2] == num[0] || num[0] && num[2] == num[1]) {
    alert('Здесь есть одинаковые числа')
} else if (num[1] && num[2] != num[0] || num[0] && num[2] != num[1]) {
    alert('Здесь нет одинаковых чисел')
}