/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Creo un array con i numeri da 1 a 6

const numbers = ['1', '2', '3', '4', '5', '6']

// Chiedo al computer di generare un numero tra 1 e 6

let compNum = Math.trunc (Math.random() * numbers.length + 1)
console.log(compNum)

// chiedo aal'utente di scegliere un numero

let userNum = parseInt(prompt("Scegli un numero da 1 a 6"))

// controllo che l'utente inserisca effettivamente un numero

while (isNaN (userNum)){
    userNum = parseFloat(prompt ("Scegli un numero da 1 a 6"))
}
console.log(userNum)

//definisco chi vince in base a chi sceglie il numero più alto

if( compNum > userNum){
    alert('Mi spiace, hai perso :(')
} else if (userNum > compNum){
    alert('Congratulazioni! Hai vinto :)')
} else{
    alert('Pareggio!')
}