function classificarIdade(idade) {
    if (typeof idade !== 'number' || idade < 0) {
        return "Idade inválida";
    } else if (idade < 12) {
        return "Criança";
    } else if (idade >= 12 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        return "Adulto";
    } else if (idade >= 60) {
        return "Idoso";
    }
}

// Exemplos de uso:
console.log(classificarIdade(25)); // "Adulto"
console.log(classificarIdade(8));  // "Criança"
console.log(classificarIdade(15)); // "Adolescente"
console.log(classificarIdade(65)); // "Idoso"
console.log(classificarIdade(-5)); // "Idade inválida"
console.log(classificarIdade("vinte")); // "Idade inválida"