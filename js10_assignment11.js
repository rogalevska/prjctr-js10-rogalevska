'use strict';

class Race {
    constructor(name) {
    this.name = name;
}
inrtoduce() {
    console.log(`Hello! My name is ${this.name}.`);
}
};
class MagicalCreatures extends Race {
    constructor(name) {
    super(name);
    this.skill = "magic";
    }
    hasMagic() {
        console.log(`I have a special skill: ${this.skill}.`)
    }
}
class Phoenix extends MagicalCreatures {
    constructor(name) {
        super(name);
        this.regeneration = "rising from aches";
        this.coating = "feathers";
        this.tears = "magic tears";
    }
    regenerate() {
        console.log(`I can regenerate by ${this.regeneration}.`);
    }
    healing() {
        console.log(`I can heal with my ${this.tears}`);
    }
    bring(thing) {
        console.log(`I'm strong enough. I can bring you ${thing}.`)
    }
}
class Dragon extends MagicalCreatures {
    constructor(name, dragonType, teethAmount) {
        super(name);
        this.dragonType = dragonType;
        this.teethAmount = teethAmount;
        this.haveTail = true;
    }
    breathAttack() {
        console.log(`I'm breathing ${this.dragonType} on my enemies!`);
    }
    #flapWings() {
        console.log('Preparing for flight. Start flapping wings...')
    }
    fly(flySpeed) {
        this.#flapWings;
        console.log(`The flight is successful. The flight speed is ${flySpeed} km/hour.`);
    }
}
class Human extends Race {
    constructor(occupation, weight, name) {
    super(name); 
    this.occupation = occupation;
    this.weight = weight; 
    this.speed = this.speed;
    };
    run(speed) {
        console.log(`I run ${speed} km/hour.`)
    };
    job() {
        if (this.occupation) {
            console.log(`My jos is ${this.occupation}.`);
        } else {
            console.log(`I'm currently unemployed.`);
        }};
    eat(food) {
        console.log(`I'm eating ${food}.`);
    }
};
class Dwarf extends Race {
    constructor(name, beardLength) {
    super(name); 
    this.weaponType = this.weaponType;
    this.pickaxe = "pickaxe";
    this.beardLength = beardLength;
    };
    #makeWeapon(weaponType) {
        console.log(`I made ${weaponType} as a weapon for me.`)
    };
    fight(weaponType) {
        this.#makeWeapon;
        console.log(`I will fight with a ${weaponType} in my hand.`)
    };
    makeTunnel() {
        console.log(`I'm making tunnel with my ${this.pickaxe}.`);
    };
}

// let human = new Human("carpenter", 75, 'Jack');
// human.run(12);
let dwarf = new Dwarf("Tom");
dwarf.fight("hammer");
dwarf.makeTunnel();
dwarf.inrtoduce();
let phoenix = new Phoenix("Phill");
phoenix.bring("refrigerator");