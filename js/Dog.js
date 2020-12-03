// OOP duodama vardas is didziosios raides, kad isskirti.
class Dog {
    constructor(vardas, spalva, veisle) {
        // construktor susietas su new, ivestis vardas uzsideda ant new reiksmiu.  
        // console.log(vardas); 
        // priskiriam parametrus construktor, this=const? iterpiama i constrtructor

        this.name = vardas;
        this.color = spalva;
        this.breed = veisle;
    }

    introduce() {
        console.log(`labas, as prisistatau esu ${this.breed} (veisle) ir mano kailis yra ${this.color}Spalvos. `)
        // cia butina pamineti ${} kartus su this.?????

    }

}
export { Dog }