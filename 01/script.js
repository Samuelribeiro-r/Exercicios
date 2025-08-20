var idade1 = prompt("Digite a idade da primeira pessoa:");
var idade2 = prompt("Digite a idade da segunda pessoa:");

var igresso1, igresso2

if (idade1 <= 17){
    igresso1 = 15
}
else if (idade1 >= 18 && idade1 < 60){
    igresso1 = 30
}
else {
    igresso1 = 20
}

if (idade2 <= 17){
    igresso2 = 15
}
else if (idade2 >= 18 && idade2 < 60){
    igresso2 = 30
}
else {
    igresso2 = 20

}
var valorFinal = igresso1 + igresso2

console.log("O valor total do ingresso é: " + valorFinal)

alert("O valor total do ingresso é: " + valorFinal);