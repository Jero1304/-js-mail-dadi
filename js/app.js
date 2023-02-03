// Mail
// Creaun array con una lista di email (stringhe)
// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.


console.log('CONFERMA EMAIL');
const emailUtenteEle = document.getElementById('email');
const formBtnEle = document.getElementById('form-btn');
const messageEle = document.getElementById('email-result')

const emailList = ['gero@bool','sara@bool','ale@bool','stefania@bool','angelo@bool'];

formBtnEle.addEventListener('click', function(){
    
    console.log ('email utente:', emailUtenteEle.value);
    let message = 'la tua main NON è stata trovata';
    
    for (let i = 0; i < emailList.length; i++){    
        if(emailList[i] === emailUtenteEle.value){
            message = 'la tua email è stata trovata';
        }
    }
    console.log(message);
    messageEle.innerHTML = message;
})



//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//tabilire il vincitore, in base a chi fa il punteggio più alto.


console.log('');
console.log('GIOCO DEI DADI');

const utenteEle = document.getElementById('numero-utente');
const pcEle = document.getElementById('numero-pc');
const formBtnDadoEle = document.getElementById('form-btn-dado');
const dadoMessageEle = document.getElementById('dado-message')


const dado = [1,2,3,4,5,6];

formBtnDadoEle.addEventListener('click', function(){

    let pc = dado [Math.floor(Math.random() * dado.length)];
    let utente = dado[Math.floor(Math.random() * dado.length)];
    console.log('utente:',utente,'pc:',pc);
    
    if(utente > pc){
        message = 'ha vinto l\'utente con: '+ utente;
    }else if (pc > utente){
        message = 'ha vinto il pc con: '+ pc;
    }else if(utente === pc){
        message = 'non ha vinto nessuno';
    }
    console.log(message);
    utenteEle.innerHTML=utente;
    pcEle.innerHTML=pc;
    dadoMessageEle.innerHTML = message;
})










