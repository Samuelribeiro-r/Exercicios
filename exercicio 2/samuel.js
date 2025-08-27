const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);


console.log("Marca do carro:", carro.marca); 

carro.ano = 2024; 
carro.cor = "Prata"; 

console.log("Ano atualizado:", carro.ano);
console.log("Cor do carro:", carro.cor);


const pessoa = {
    nome: "Samuel",
    idade: 30,
    apresentar: function() {
        console.log("Olá meu nome é", pessoa.nome, "Tenho", pessoa.idade, "Anos de idade Algun poblema?")
    }
};

console.log(pessoa.apresentar());