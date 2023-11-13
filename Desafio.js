let nickName = "Dark Lord"
let xp = 10.500

if (xp <= 1.000){
    xp = "Ferro"
}
else if (xp >= 1.001 && xp <= 2.000){
    xp = "Bronze"
}
else if (xp >= 2.001 && xp <= 5.000){
    xp = "Prata"
}
else if (xp >= 6.001 && xp <= 7.000){
    xp = "Ouro"
}
else if (xp >= 7.001 && xp <= 8.000){
    xp = "Platina"
}
else if (xp >= 8.001 && xp <= 9.000){
    xp = "Ascendente"
}
else if (xp >= 9.001 && xp <= 10.000){
    xp = "Imortal"
}
else{
    xp = "Radiante"
}

console.log(" O Herói de nome " + nickName + " está no nível de " + xp)


