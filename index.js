// Jogo para classificar seu herói

// Variáveis
// Coloque o nome do seu herói aqui em baixp
let nome = "Allan"
let xp = 1
let nivel

// Treinamento
// x = quando de xp você quer ganhar
let x = 5000
for(i=0;i<x;i++){
    xp++
}

console.log(`Você ganhou ${x} de xp`)

// Classificação
if(xp<=1000){
    nivel = "Ferro"
}else if(xp<=2000){
    nivel = "Bronze"
}else if(xp<=5000){
    nivel = "Prata"
}else if(xp<=7000){
    nivel = "Ouro"
}else if(xp<=8000){
    nivel = "Platina"
}else if(xp<=9000){
    nivel = "Ascendente"
}else if(xp<=10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)