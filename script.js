function verificarTerna() {
    // Obtendo os valores dos inputs
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Verificando se a terna é pitagórica
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').textContent = 'Por favor, insira números válidos.';
        return;
    }

    // Ordenando os números para garantir que c seja o maior
    const [x, y, z] = [a, b, c].sort((num1, num2) => num1 - num2);

    if (Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2)) {
        document.getElementById('resultado').textContent = `A terna (${a}, ${b}, ${c}) é uma terna pitagórica!`;
    } else {
        document.getElementById('resultado').textContent = `A terna (${a}, ${b}, ${c}) não é uma terna pitagórica.`;
    }
}
