import { Bird } from './Bird.js'
class chiken extends Bird {
    constructor(name, color) {
        super(name, color)

        // this.name = name;  <---- istrinu nes padareme super nereikia kartoti
        // this.color = color;   <---- istrinu nes padareme super nereikia kartoti
        this.voice = 'cip cip';
        this.canFly = false;
        // this.wingsCount = 2;  <---- istrinu nes padareme super nereikia kartoti
       
        
    }

    // Sound() {
    //     console.log(`${this.name}: ${this.voice}`);    <---- istrinu nes padareme super nereikia kartoti
    // }
    // fly() {
    //     console.log(`${this.name}: ${this.canFly}`);  <---- istrinu nes padareme super nereikia kartoti
    // }
    // reapeatSound(Sound) { 
    //     console.log(`${this.name}: ${Sound}`);  <---- istrinu nes padareme super nereikia kartoti
    // }
}

export {chiken}