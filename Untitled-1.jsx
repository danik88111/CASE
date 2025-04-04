document.getElementById("spinButton").addEventListener("click", function() {
    let resultText = getSpinResult();
    document.getElementById("result").innerText = "Вы выиграли: " + resultText;
});

function getSpinResult() {
    let rand = Math.random(); // Генерация случайного числа от 0 до 1

    // Шансы на различные скины
    if (rand < 0.02) {
        return "Легендарный скин (Очень редкий)";
    } else if (rand < 0.10) {
        return "Редкий скин";
    } else if (rand < 0.40) {
        return "Средний скин";
    } else {
        return "Обычный скин";
    }
}
