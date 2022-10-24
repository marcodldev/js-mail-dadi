// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


let email = document.getElementById("inputEmail");

function invioDati() {
    let emailValue = email.value;

    let emailDatabase = ["francobaresi@mailinator.com", "giovannimuciaccia@gmail.com", "booleanduck@hotmail.it"];


    let checkEmail = false;

    for (let i = 0; i < emailDatabase.length; i++) {
        if (emailDatabase[i] == emailValue) {
            let checkEmail = true;
            console.log(`${emailValue} è presente nella squadra, con posizione: ${i}`);

        } else {
            console.log('Congratulazioni hai appena registrato la tua email!');
        }
    }

    if ( emailDatabase[i] != emailValue ) {
        emailDatabase.push()
    }
}




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer

let playerWin = 0;
let pcWin = 0;

let winPlayer = document.getElementById("playerCount");
let winPc = document.getElementById("pcCount");

function startInput() {

    // VARIABILI            

    let result = document.getElementById("resultOut");
    let playerNumber = Math.floor(Math.random() * 6 + 1);
    let pcNumber = Math.floor(Math.random() * 6 + 1);

    console.log(playerNumber);
    console.log(pcNumber);

    //Condizioni

    if (playerNumber > pcNumber) {
        result.innerHTML = `Hai vinto! il tuo numero è ${playerNumber}`;
        playerWin = playerWin + 1;

    } else if (playerNumber == pcNumber) {
        result.innerHTML = `Pareggio! ${playerNumber} e ${pcNumber}! `;
    } else {
        result.innerHTML = `Hai perso D: ho fatto ${pcNumber}, Riproviamo?`;
        pcWin = pcWin + 1;
    }

    winPlayer.innerHTML = `Vittorie: ${playerWin}`;
    winPc.innerHTML = `Perdite: ${pcWin}`;

}