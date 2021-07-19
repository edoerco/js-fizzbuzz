// Scrivi un programma che stampi i numeri da 1 a 100
var numerazione = 100;

for (var i = 0; i < numerazione; i++) {
    var numero = i + 1;

    // -Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log('FizzBuzz')
    }
    // -Per i multipli di 3 stampi “Fizz”  
    else if (numero % 3 == 0) {
        console.log('Fizz')
    }
    // -Per i multipli di 5 stampi Buzz.
    else if (numero % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(numero);
    }
}

