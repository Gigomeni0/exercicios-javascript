function filtrarPalavrasCurtas(lista) {
    let palavrasCurtas = [];
    lista.forEach(palavra => {
        if (palavra.length < 5) {
            palavrasCurtas.push(palavra);
        }
    });
    return palavrasCurtas;
}

// Exemplo de uso
console.log(filtrarPalavrasCurtas(["sol", "lua", "computador", "casa", "nuvem"])); // ["sol", "lua", "casa"]