

//  js-oggetti-studenti

// PARTE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
// PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.
// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.






// PARTE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome : "Massimo",
    cognome : "Bergantin",
    età : "25",
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.


document.getElementById("studente").innerHTML = studente.nome + ", " + studente.cognome + ", " + studente.età;



// PARTE 2
// Creare un array di oggetti di studenti.

var studentiList = [
    {nome: "Ottavio", cognome: "Fogliata"},
    {nome: "Davide", cognome: "Voza"},
    {nome: "Alfredo", cognome: "Guida"}
]   


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.


for (var x = 0; x < studentiList.length; x++) { 

    for (var k in studentiList[x]) { 
        console.log(k, studentiList[x][k]);
    }

}


// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.


var studenti = {
    info: []
}
    
    
    
while (studenti.info.length < 1) {
    
    var studenteNome = prompt('Inserisci il tuo nome');
    var studenteCognome = prompt('Inserisci il tuo cognome');
    var studenteEtà = prompt('Inserisci la tua età');

    
    
    studenti.info.push({
        nome: studenteNome,
        cognome: studenteCognome,
        età: studenteEtà
    });

}

console.log(studenti);





