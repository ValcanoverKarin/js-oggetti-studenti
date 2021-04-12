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

//2a. creo un array che contiene gli oggetti studenti
var arrayStudenti = [
    {
        //studente 0
        'nome' : 'Michela',
        'cognome' : 'Dellacroce',
        'eta' : 22
    },
    {
        //studente 0
        'nome' : 'Simone',
        'cognome' : 'Andreatta',
        'eta' : 24
    },
    {
        //studente 0
        'nome' : 'Celine',
        'cognome' : 'Zingerle',
        'eta' : 23
    },
];