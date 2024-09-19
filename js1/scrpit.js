// Função para calcular a média ponderada
function calcularMediaPonderada(notas, pesos) {
    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i] * pesos[i];
        somaPesos += pesos[i];
    }

    return somaNotas / somaPesos;
}

// Leitura das notas e pesos
const notas = [];
const pesos = [];

for (let i = 1; i <= 3; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i}:`));
    const peso = parseFloat(prompt(`Digite o peso da nota ${i}:`));
    notas.push(nota);
    pesos.push(peso);
}

// Cálculo da média ponderada
const mediaPonderada = calcularMediaPonderada(notas, pesos);

// Exibição do resultado
alert(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
