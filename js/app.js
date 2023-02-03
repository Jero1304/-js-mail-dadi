// Mail
// Creaun array con una lista di email (stringhe)
// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.

let emailUtente = prompt('inserisci email:');
console.log ('email utente: ',emailUtente);
const emailList = ['gero@bool','sara@bool','ale@bool','stefania@bool','angelo@bool'];

for (let i = 0; i < emailList.length; i++){

    if(emailList[i] === emailUtente){
        console.log( 'la tua email', emailUtente, ' è stata trovata ');
    }
}









// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?