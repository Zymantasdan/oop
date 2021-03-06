class Pet { /*pet tevinis uzdeda savybes visiems, kas turi isskirtinumus uzsiraso ant vaikinio */
    constructor(name, furColor) {
        this.name = name;
        this.fur = furColor;
        this.voice = 'Miau au'; /*tevine klase turi tureti ta pacia savybe */
        this.loyal = false;
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.fur} spalvos.`);
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Pet }