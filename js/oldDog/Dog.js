// OOP duodama vardas is didziosios raides, kad isskirti.
class Dog {
    constructor(vardas, spalva, veisle) {
        // construktor susietas su new, ivestis vardas uzsideda ant new reiksmiu.  
        // console.log(vardas); 
        // priskiriam parametrus construktor, this=const? iterpiama i constrtructor

        this.name = vardas;
        this.color = spalva;
        this.breed = veisle;
        
        this.speed = 0;
        this.isRuning = false;
        this.isSiting = true;

        this.lovedPeaple = [];
    
    }

    introduce() {
        console.log(`labas, as prisistatau esu ${this.breed} (veisle) ir mano kailis yra ${this.color}Spalvos. `)
        // cia butina pamineti ${} kartus su this.reiksme

    }
// noriu pakeisti griti pridedu speed
    move(speedChanges) {
        this.speed += speedChanges;
        console.log(this.name, '->', this.speed);

    }
// ka myli uzduotis. push - itraukia i saraso gala mylimo varda.
    kaMyli(mylimoVardas) {
        this.lovedPeaple.push(mylimoVardas)
        console.log(this.lovedPeaple);
    }

}
export { Dog }