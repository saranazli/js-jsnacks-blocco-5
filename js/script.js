
const zucchine = [

  {
    varietà : 'verde',
    peso : 20,
    lughezza : 16
  },

  {
    varietà : 'verde',
    peso : 10,
    lughezza : 13
  },

  {
    varietà : 'verde',
    peso : 50,
    lughezza : 15
  },

  {
    varietà : 'verde',
    peso : 10,
    lughezza : 17
  },

  {
    varietà : 'verde',
    peso : 30,
    lughezza : 12
  },

]

let somma = 0;

let zucchineCorte = [];
let zucchineLunghe = [];

zucchine.forEach(zuc =>{
 
  somma += zuc.peso;

  zucchinaLunga = zuc.lughezza >= 15 
  
  zucchinaLunga ? zucchineLunghe.push(zuc.lughezza) : zucchineCorte.push(zuc.lughezza)

});

console.log(somma);
console.log(zucchineCorte);
console.log(zucchineLunghe);

let sommaZC = 0;

for (let cm of zucchineCorte){
  sommaZC += cm;
};

console.log(sommaZC);

let sommaZL = 0;

for (let cml of zucchineLunghe){
  sommaZL += cml;
};

console.log(sommaZL);

// snack 3 reverse 

const stringa = ( ) => 'ciao';

const myString = stringa();

console.log(myString);

const myStringRev = myString.split('').reverse().join('');
console.log(myStringRev);












