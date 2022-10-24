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