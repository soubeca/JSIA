<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const num1 = Number(prompt("Digite o primeiro número:"));
        const num2 = Number(prompt("Digite o segundo número:"));

        const sum = num1 + num2;
        const sub = num1 - num2;
        const mult = num1 * num2;
        const div = num1 / num2;
        const mod = num1 % num2;
        console.log(`Soma: ${num1} + ${num2} = ${sum}`);
        console.log(`Subtração: ${num1} - ${num2} = ${sub}`);
        console.log(`Multiplicação: ${num1} * ${num2} = ${mult}`);
        console.log(`Divisão: ${num1} / ${num2} = ${div}`);
        console.log(`Resto da divisão: ${num1} % ${num2} = ${mod}`);
        
    </script>
</body>
</html>
