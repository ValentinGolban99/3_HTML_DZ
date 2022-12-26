const celsius = Number.parseFloat(prompt('Введите число: '));
alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit(celsius)}`)

function fahrenheit(num) {
    let fahren = 0;
    fahren = (9 / 5) * num + 32
    return fahren.toFixed(1)
}

// const userName = prompt('Введите имя: ');
// hello(userName);

// function hello(n) {
//     alert(`Привет, ${n}!`);
// }