// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


let email = document.getElementById("inputEmail");

function invioDati () {
    let emailValue = email.value;

    let emailDatabase = ["francobaresi@mailinator.com" , "giovannimuciaccia@gmail.com","booleanduck@hotmail.it"];


    for ( let i = 0; i < emailDatabase.length ; i++ ) 
         if( emailDatabase[i] == emailValue ){
            console.log( `${emailValue} è presente nella squadra, con posizione: ${i}` );
         } else {
            console.log('Congratulazioni hai appena registrato la tua email!');
         }

}




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer


function startInput () {
    let result = document.getElementById("resultOut");
    let playerNumber = Math.floor(Math.random() * 7);
    let pcNumber =  Math.floor(Math.random() * 7);
                                            
    if (playerNumber > pcNumber) {
        result.innerHtml = `Hai vinto!`; 

    } else if ( playerNumber == pcNumber) {
        result.innerHtml = `Pareggio!`;
    } else {
        result.innerHtml = `Hai perso D: Riproviamo?`;
    }

}