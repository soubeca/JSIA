const aluno = {
    nome: "João Silva",
    notas: [8.5, 7.2, 9.0, 6.8],
    
    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
};

const { nome } = aluno;
console.log(`Nome do aluno: ${nome}`);

console.log(`Média das notas: ${aluno.calcularMedia().toFixed(2)}`);

const novaNota = 8.7;
aluno.notas = [...aluno.notas, novaNota];

console.log(`Notas atualizadas: ${aluno.notas}`);
console.log(`Nova média: ${aluno.calcularMedia().toFixed(2)}`);

const { nome: nomeAluno, notas } = aluno;
console.log(`\nResumo do aluno:`);
console.log(`Nome: ${nomeAluno}`);
console.log(`Quantidade de notas: ${notas.length}`);
