let age = +prompt("Введите ваш возраст");

if (age < 2) {
    alert("Вы ребенок");

} else if (age < 18) {
    alert("Вы подросток");
} else if (age < 60) {
    alert("Вы взрослый");
} else if (age > 60) {
    alert("Вы пенсионер");
}