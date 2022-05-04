// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// const divRed = document.getElementById("red-div").innerHTML;
// const divGreen = document.getElementById("green-div").innerHTML;

const numbers = [45, 8, 56, 63, 6, 98, 12, 45, 78, 23, 57, 32, 3, 8];
const redNumbers = [];
const greenNumbers = [];


numbers.forEach((Element) => {
    if (Element % 2 === 0) {
        greenNumbers.push(Element);
    } else {
        redNumbers.push(Element);
    }
})

document.getElementById("red-div").innerHTML = redNumbers;
document.getElementById("green-div").innerHTML = greenNumbers;


