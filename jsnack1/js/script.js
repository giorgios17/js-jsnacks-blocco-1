// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['giorgio', 'giuseppe', 'giovanni', 'paolo', 'pietro', 'federico']

const nomeUtente = prompt('Come ti chiami?')

let controlloInvitato = false;

for (let i = 0; i < invitati.length && controlloInvitato === false; i++) {
    if (nomeUtente.trim().toLowerCase() === invitati[i]) {
        console.log('Entra pure alla festa e buon divertimento!')
        controlloInvitato = true;
    }


}

if (controlloInvitato === false) {
    console.log('Mi spiace, non sei invitato alla festa.')

}