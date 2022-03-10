// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['giorgio', 'giuseppe', 'giovanni', 'paolo', 'pietro', 'federico', 'elena', 'valentina', 'serena', 'raffaele', 'anna']

let invitatiTotali = ''

for (let i = 0; i < invitati.length; i++) {
    invitatiTotali += '-' + invitati[i] + ' '
}

document.querySelector('.invitati').innerHTML = invitatiTotali;


let nomeUtente = prompt('Come ti chiami?');

let controlloInvitato = false;


for (let i = 0; i < invitati.length && controlloInvitato === false; i++) {
    if (nomeUtente.trim().toLowerCase() === invitati[i]) {
        console.log('Entra pure alla festa e buon divertimento!');
        controlloInvitato = true;
        document.getElementById('controllo').innerHTML = 'Entra pure alla festa e buon divertimento!';
    }


}

if (controlloInvitato === false) {
    console.log('Mi spiace, non sei invitato alla festa.');
    document.getElementById('controllo').innerHTML = 'Mi spiace ' + nomeUtente + ', non sei nella lista degli invitati.';


}