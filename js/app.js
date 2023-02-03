// Mail
// Creaun array con una lista di email (stringhe)
// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.


// console.log('CONFERMA EMAIL');
// let emailUtente = prompt('inserisci email:');
// console.log ('email utente: ',emailUtente);
// const emailList = ['gero@bool','sara@bool','ale@bool','stefania@bool','angelo@bool'];
// let message = 'la tua main NON è stata trovata';

// for (let i = 0; i < emailList.length; i++){

//     if(emailList[i] === emailUtente){
//         message = 'la tua email è stata trovata'
//     }
// }
// console.log(message);


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

console.log('');
console.log('GIOCO DEI DADI');

const dado = [1,2,3,4,5,6];
let numeriDaGenerare= Math.floor(Math.random() * 6);
let pc = dado [Math.floor(Math.random() * 6)];
let utente = dado[Math.floor(Math.random() * 6)];
console.log('utente:',utente,'pc:',pc);

if(utente > pc){
    console.log('ha vinto l\'utente con:',utente)
}else if (pc > utente){
    console.log('ha vinto il pc con:',pc)
}else if(utente === pc){
    console.log('non ha vinto nessuno')
}









