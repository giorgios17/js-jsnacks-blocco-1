// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. (questo potrebbe richiedere un minimo di ricerca)

let number = String(parseInt(prompt('Scrivi un numero a quattro cifre')));

let sum = 0;

if (number.length === 4) {
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(sum);
}
else {
    console.log('Il numero non è a quattro cifre')
}


