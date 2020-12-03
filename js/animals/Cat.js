import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(name, furColor) {
        super(name, furColor);

        this.voice = 'Miau miau! 🐱🐱';
    }
}

export { Cat }