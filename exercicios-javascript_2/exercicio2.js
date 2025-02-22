function mensagemDia(dia) {
    switch(dia) {
        case 1:
            console.log("Domingo: Dia de descanso!");
            break;
        case 2:
            console.log("Segunda-feira: Começo da semana!");
            break;
        case 3:
            console.log("Terça-feira: Vamos com tudo!");
            break;
        case 4:
            console.log("Quarta-feira: Meio da semana!");
            break;
        case 5:
            console.log("Quinta-feira: Falta pouco!");
            break;
        case 6:
            console.log("Sexta-feira: Quase lá!");
            break;
        case 7:
            console.log("Sábado: Dia de relaxar!");
            break;
        default:
            console.log("Número inválido! Insira um valor entre 1 e 7.");
    }
}

// Exemplo de uso
mensagemDia(5); // "Quinta-feira: Falta pouco!"