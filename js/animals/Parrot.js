import { Bird } from './Bird.js'
class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        // this.name = name;  <---- istrinu nes padareme super nereikia kartoti
        // this.color = color;<---- istrinu nes padareme super nereikia kartoti
        this.voice = 'Macawww';
        // this.canFly = true;   <---- istrinu nes padareme super nereikia kartoti
        // this.wingsCount = 2;  <---- istrinu nes padareme super nereikia kartoti
    }

    reapeatSound(Sound) {  /* <---- pridedu nes neturi tevinis!!!!!!!!*/ 
        console.log(`${this.name}: ${Sound}`);  
    }
}

export { Parrot }