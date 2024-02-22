function obtenerNumero() {
    let numero;
    do {
        let input = prompt("Ingrese un número para mostrar la serie de Fibonacci:");
        numero = parseFloat(input);
    } while (isNaN(numero) || numero <= 0 || !Number.isInteger(numero));
    mostrarFibonacci(numero);
}

function mostrarFibonacci(n) {
    let fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log("Serie de Fibonacci de longitud", n + ":", fibonacci.join(", "));
}
