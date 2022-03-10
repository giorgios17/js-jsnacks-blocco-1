// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const number = [];

for (let i = 0; i < 6; i++) {
    const writtenNumber = prompt('Scrivi un numero');
    if (writtenNumber % 2 === 1) {
        number.push(writtenNumber)
    }

}

console.log(number)