import { Dog } from './Dog.js';

const rexius = new Dog('Rexas', 'rudas', 'vokieciu aviganis');
const brisius = new Dog('Brisius', 'pilkas', 'lietuviu');
const pilkis = new Dog('Pilkis', 'pilka', 'pilkasis bisonas' )


// jei noriu issitraukti brisius vardas ir jame esantys sarasai
console.log(rexius);
console.log(brisius);
console.log(pilkis);

console.log(rexius.breed);
console.log(brisius.breed);
console.log('.........................');

// metodas introduce-prisistatyk, tarsi funkcija ivestis clonsole.log isvestis cia.
rexius.introduce();
brisius.introduce();
pilkis.introduce();

console.log(rexius.speed);

rexius.move(5);
rexius.move(10);
rexius.move(20);
rexius.move(30);
rexius.move(40);
rexius.move(100);

brisius.move(10);
brisius.move(2);
brisius.move(50);
brisius.move(100);

// atspausdink sarasa koki zmogu suo myli.

rexius.kaMyli('Zymantas');
rexius.kaMyli('Andrius');
