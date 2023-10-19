interface Attacer {
    attack: () => void;
}

class Weapon {
    //type: string;
    damage: number;
    range: number;

    constructor(damage: number, range: number,) {//del: type: string
        //this.type = type;
        this.damage = damage;
        this.range = range;
    }

    attack() { }
}

//Type weapons
class Sword extends Weapon {
    attack(): void {
        console.log("Sword attac with damage: " + this.damage);
    }
}
class Arbalet extends Weapon {
    attack(): void {
        console.log("Arbalet attac with damage: " + this.damage);
    }
}

class Character {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack();
    }
}

const sword = new Sword(15, 2);
const character = new Character('Billy Harington', sword);
character.attack();

const arbalet = new Arbalet(40, 50);
character.changeWeapon(arbalet);
character.attack();