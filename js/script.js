// 1.Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//   Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 2.Creare un array di oggetti di studenti.
//   Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// 3.Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//1a. creo un oggetto che descriva uno studente (nome, cognome, età)
var studente = {
    'nome' : 'Karin',
    'cognome' : 'Valcanover',
    'eta' : 25
}

//1b. stampo con il ciclo for-in tutte le proprietà dell oggetto
for (var key in studente) {
    console.log(studente[key])
}