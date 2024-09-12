// script.js
function verificarTernas() {
    // Obtém os valores dos inputs
    const a = parseInt(document.getElementById('num1').value, 10);
    const b = parseInt(document.getElementById('num2').value, 10);
    const c = parseInt(document.getElementById('num3').value, 10);
    
    // Verifica se os valores são válidos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').innerText = 'Por favor, insira três números válidos.';
        return;
    }

    // Ordena os números para garantir que c é o maior
    const [x, y, z] = [a, b, c].sort((n1, n2) => n1 - n2);
    
    // Verifica a relação pitagórica
    const resultado = (x**2 + y**2 === z**2) ? 
        `Os números ${a}, ${b} e ${c} formam uma terno pitagórica.` : 
        `Os números ${a}, ${b} e ${c} não formam uma terno pitagórica.`;
    
    // Exibe o resultado
    document.getElementById('resultado').innerText = resultado;
}
