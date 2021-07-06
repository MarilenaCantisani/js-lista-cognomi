/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi:
‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista
in cui il nuovo utente si trova */

var lastNames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(lastNames);

var userLastName = prompt("Inserisci qui il tuo cognome: ", "Aita");
console.log(userLastName);

lastNames.push(userLastName);
lastNames.sort();

console.log(lastNames);

var listLastNames = document.getElementById("list");
var listItems = "";

var i = 0;
while (i < lastNames.length) {
    listItems += "<li>" + lastNames[i] + "</li>";
    i++;
}

console.log(listItems);
listLastNames.innerHTML = listItems;










