import { Dog } from './animals/Dog.js';
import {Parrot} from './animals/Parrot.js';
import {chiken} from './animals/Chiken.js';

import { Bird } from './animals/Bird.js'
// import { Cat } from './animals/Cat.js';

const rikis = new Dog('Rikis', 'baltas');
// const rainis = new Cat('Rainis', 'juodas')

rikis.sound();
// rainis.sound();

rikis.introduce();
// rainis.introduce();

const kapitonas = new Parrot ('kapitonas', 'margas');
kapitonas.fly();
kapitonas.Sound();
kapitonas.reapeatSound('duok sausainiu'); /* prisideda uzrasas duok sausainiu */
kapitonas.color = 'raudonas';
console.log(kapitonas);
console.log('..........................');

const kitasKapitonas = new Parrot ('Jakas', 'tamusis');
kitasKapitonas.fly();
kitasKapitonas.reapeatSound('tamsusis Jakas')

console.log('.....................');





const cypsius = new chiken('cypsius', 'geltonas');
cypsius.fly();
cypsius.Sound();

const paukstis = new Bird('ciulbuonelis', 'rudas' ); /* neverta tevines kurti nes susideda reiksmes */
paukstis.Sound();
paukstis.fly();
