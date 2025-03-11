function verificarRespostas() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    let pontos = 0;

    if (q1 && q1.value === 'c') {
        pontos++;
    }
    if (q2 && q2.value === 'b') {
        pontos++;
    }
    if (q3 && q3.value === 'c') {
        pontos++;
    }
    if (q4 && q4.value === 'b') {
        pontos++;
    }
    if (q5 && q5.value === 'b') {
        pontos++;
    }
    if (q6 && q6.value === 'c') {
        pontos++;
    }
    if (q7 && q7.value === 'b') {
        pontos++;
    }

    const result = document.getElementById('result');
    result.textContent = `Você acertou ${pontos} de 7 perguntas.`;
}