// 4.1 Use variáveis para criar frases
let nome = "Ana";
let idade = 23;
let cidade = "São Paulo";

// 4.2 Crie uma frase usando template literals
let apresentacao = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
console.log(apresentacao);

// 4.3 Crie uma frase mais complexa usando array e objeto
let hobbies = ["ler", "cozinhar", "viajar"];
let info = {
    profissao: "desenvolvedora",
    empresa: "TechCorp"
};

let biografiaCompleta = `
    ${nome} é ${info.profissao} na ${info.empresa}.
    Ela tem ${idade} anos, mora em ${cidade} e
    adora ${hobbies.join(", ")}.
`;
console.log(biografiaCompleta);