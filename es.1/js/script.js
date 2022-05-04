// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstNumbersArray = [65, 98, 3, 6];
const secondNumbersArray = [12, 45, 23, 67, 32, 54, 76];

// controllo quale delle due array contiene più numeri
if (firstNumbersArray.length < secondNumbersArray.length) {
    while (firstNumbersArray.length != secondNumbersArray.length) {
        firstNumbersArray.push(getIntNum(100));
    }
} else {
    while (secondNumbersArray.length != firstNumbersArray.length) {
        secondNumbersArray.push(getIntNum(100));
    }
}

console.log(firstNumbersArray);
console.log(secondNumbersArray);


// FUNCTION
function getIntNum(max) {
    const rndNum = Math.floor(Math.random() * max) + 1;
    return rndNum;
}

