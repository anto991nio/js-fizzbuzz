
/* mi faccio un arrey che contenga tutti i miei 100 numeri */
var listaNumeri = [];

/* con un ciclo for posso incrementare il mio arrey di un numero fino ad arrivare a 100 */
for (var i = 1; i <= 100; i++) {

    /* devinisco i valori all'interno dell'arrey in base ai multipli */
    var numero = i;
    var multiplo3 = numero % 3 === 0;
    var multiplo5 = numero % 5 === 0;
    var multipler35 = (numero % 3 === 0 && numero % 5 === 0);

    if (multipler35) {
        listaNumeri.push("FizzBuzz");
    
    } else if (multiplo5) {
        listaNumeri.push("Buzz");

    } else if (multiplo3) {
        listaNumeri.push("Fizz");

    } else {
        listaNumeri.push(numero);
    }
}

/* stampo la lista */
console.log(listaNumeri);
document.getElementById("listanumeri").innerHTML= "Ecco la lista dei numeri"+ " "+listaNumeri; 