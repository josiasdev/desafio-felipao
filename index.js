let nome = "Jesus";
let xp = 100000000000000000000000000;

if (xp < 1000) {
    xp = "Ferro";
}
if (xp > 1000 && xp <= 2000) {
    xp = "Bronze"
}
if (xp > 2000 && xp <= 5000) {
    xp = "Prata"
}
if (xp > 6000 && xp <= 7000) {
    xp = "Ouro"
}
if (xp > 7000 && xp <= 8000) {
    xp = "Platina"
}
if (xp > 8000 && xp <= 9000) {
    xp = "Ascendente"
}
if (xp > 9000 && xp <= 10000) {
    xp = "Imortal"
}
if (xp >= 10001) {
    xp = "Radiante"
}


console.log("O Herói de nome: " + nome, "está no nivel de: " + xp);