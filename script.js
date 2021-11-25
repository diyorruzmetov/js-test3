var first = +prompt('Введите первое число')
var second = +prompt('Введите второе число')
var third = +prompt('Введите третье число')

if (first > third && first < second || first > second && first < third) {
    alert(first + ' среднее число')
}
else if (second > first && second < third || second > third && second < first) {
    alert(second + ' среднее число')
}
else if (third > first && third < second || third > second && third < first) {
    alert(second + ' Cреднее число')
}
else {
    alert('Ошибка')
}