const aluno = {
    nome: "João Silva",
    idade: 16,
    notas: [8.5, 7.2, 9.0],

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
};

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado! Parabéns!";
    } else {
        return "Reprovado. Estude mais para a recuperação.";
    }
}

const { nome, idade } = aluno;

const novaNota = 7.8;
aluno.notas = [...aluno.notas, novaNota];

const media = aluno.calcularMedia();

console.log("=== SISTEMA DE NOTAS ESCOLARES ===");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);

console.log("\nNotas do aluno:");

for (let i = 0; i < aluno.notas.length; i++) {
    console.log(`Nota ${i + 1}: ${aluno.notas[i]}`);
}

console.log(`\nMédia final: ${media.toFixed(2)}`);
console.log(`Situação: ${verificarSituacao(media)}`);
