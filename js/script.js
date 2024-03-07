
const zucchine = [

  {
    varietà : 'verde',
    peso : 20,
    lughezza : '15 cm'
  },

  {
    varietà : 'verde',
    peso : 10,
    lughezza : '15 cm'
  },

  {
    varietà : 'verde',
    peso : 50,
    lughezza : '15 cm'
  },

  {
    varietà : 'verde',
    peso : 10,
    lughezza : '15 cm'
  },

  {
    varietà : 'verde',
    peso : 30,
    lughezza : '15 cm'
  },

]

let somma = 0;

zucchine.forEach(pesi =>{
 
  somma += pesi.peso;

});

console.log(somma);

