class Bird { /*bendra tevine pauksciu klase */
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.voice = 'cip macaw ';
        this.canFly = true;
        this.wingsCount = 2;
        
    }

    Sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
    fly() {
        console.log(`${this.name}: ${this.canFly}`);
    }

}

export { Bird }