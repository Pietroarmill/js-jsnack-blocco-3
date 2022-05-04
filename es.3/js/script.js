// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

teams.forEach(element => {
    const num1 = getIntNum(50);
    const num2 = getIntNum(50);

    element.puntiFatti = num1;
    element.falliSubiti = num2;

});

console.log(teams);

// FUNCTION
function getIntNum(max) {
    const rndNum = Math.floor(Math.random() * max) + 1;
    return rndNum;
}