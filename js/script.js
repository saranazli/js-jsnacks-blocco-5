
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

// snack 4 fonduta

/*const arrayUno = [ 'ciao', 'sara', 'bene'];
const arrayDue = [ 'cara', 'stai', '?'];
let arrayTre = [];*/

// pushWords();
// pushWords1();

// setInterval(pushWords,2000);
// setInterval(pushWords1,1000);


// function pushWords (){
//   for (let word of arrayUno){
    
//     arrayTre += word;

//   }
// }

// function pushWords1 (){
//   for (let word1 of arrayDue){
    
//     arrayTre += word1;

//   }
// } 

// MY WRONG WAY

// the right way

const arrayUno = [ 'ciao', 'sara', 'bene'];
const arrayDue = [ 'cara', 'stai', '?'];
let arrayTre = [];

const maggioreLunghezza = arrayUno.length > arrayDue.length ? arrayUno.length : arrayDue.length;

for(let i = 0; i < maggioreLunghezza; i++) {

  if(arrayUno[i])arrayTre.push(arrayUno[i]);

  if(arrayDue[i])arrayTre.push(arrayDue[i]);

};

console.log(arrayTre);

// Snack 5

const numbers = [ 121, 3, 64, 6, 16, 18, 26];
const letters = [ 'a', 'b', 'c', 'd']

const min = Math.floor(Math.random() * 5);
const max = Math.floor(Math.random() * numbers.lenght - min + 1) +min;

const range = ( ) => numbers.filter((el, i) => i >= min && i <= max);

console.log(range(min, max, letters));












