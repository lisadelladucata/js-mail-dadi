/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON POTETE UTILIZZARE NESSUN METODO COME:
- includes
- indexOf
- find
- search
- ecc...*/

const email = ["pippo@gmail.com" , "franco@hotmail.it" , "pluto@gmail.com", "martina@libero.it" , "giuseppe@gmail.com" ]

let announcement = prompt("Qual è la tua email?")
let isEmailThere = false
for ( i = 0 ; i <= email.length; i++){
    if (email[i] === announcement){
        isEmailThere= true
    }
}

if (isEmailThere){
    alert(`Accesso consentito`)
} else{
    alert (`Accesso negato`)
} 