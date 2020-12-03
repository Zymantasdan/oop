import { Dog } from './Dog.js';

const rexius = new Dog('Rexas', 'rudas', 'vokieciu aviganis');
// console.log(rexius);

const brisius = new Dog('Brisius', 'pilkas', 'lietuviu');
// console.log(brisius);

// jei noriu issitraukti brisius vardas
console.log(rexius);
console.log(brisius);

console.log(rexius.breed);
console.log(brisius.breed);

// metodas introduce-prisistatyk, tarsi funkcija ivestis clonsole.log isvestis cia.
rexius.introduce();
brisius.introduce();
