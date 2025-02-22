function listarPares(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
console.log(listarPares(10)); // 0 2 4 6 8 10