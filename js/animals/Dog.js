import { Pet } from './Pet.js';

// jei kartojasi susikuriam tevine klase, EXTENDS-praplecia aprasyma PET
class Dog extends Pet {
    constructor(name, furColor) {
        // super istato i PET klase, perduoda i CONSTRUCTOR
        super(name, furColor);

        this.voice = 'Bark bark! 🐕🐕';
        this.loyal = true; /* dog nepaveldi is tevo LOYAL todel reikia uzrasyti ,o kate paveldi. */
        this.atnesaKamuoliuka = true;
    }
}

export { Dog }