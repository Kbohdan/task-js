let sum = +prompt("Введите сумму покупки");

if (sum > 200 && sum < 300) {
    alert(sum - ((sum * 3) / 100));
} else if (sum > 300 && sum < 500) {
    alert(sum - ((sum * 5) / 100));
} else if (sum > 500) {
    alert(sum - ((sum * 7) / 100));
}