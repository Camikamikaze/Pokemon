class Pokémon {
    constructor(name, defense, attack, luck, pv) {
        this.defense = defense;
        this.name = name;
        this.luck = luck;
        this.pv = pv;
        this.attack = attack;
    }
    attackPokemon(defense) {
        let a = this.attack - defense;
        return a;
    }
    isLucky() {
        let i = Math.random();
        if (i < this.luck) {
            return true;
        } else {
            return false;
        }
    }
}

let Deoxys = new Pokémon("Deoxys", 65, 85, 0.6, 175);
let Mewtwo = new Pokémon("Mewtwo", 50, 75, 0.5, 190);

let degatDeoxys = 0;
let degatMewtwo = 0;

while (Deoxys.pv > 0 && Mewtwo.pv > 0) {
    if (Deoxys.isLucky()) {
        degatDeoxys = Deoxys.attackPokemon(Mewtwo.defense);
        Mewtwo.pv -= degatDeoxys;
        console.log(Mewtwo.name + " subit " + degatDeoxys + " de dégât, PV restant : " + Mewtwo.pv + " pour " + Mewtwo.name);
    } else {
        console.log(Deoxys.name + " a manqué " + Mewtwo.name);
    }
    if (Mewtwo.isLucky()) {
        degatMewtwo = Mewtwo.attackPokemon(Deoxys.defense);
        Deoxys.pv -= degatMewtwo;
        console.log(Deoxys.name + " subit " + degatMewtwo + " de dégât, PV restant : " + Deoxys.pv + " pour " + Deoxys.name);
    } else {
        console.log(Mewtwo.name + " a manqué " + Deoxys.name);
    }
}

if (Deoxys.pv <= 0) {
    console.log(Deoxys.name + " est blessé... " + Mewtwo.name + " gagne ce combat ");
}
if (Mewtwo.pv <= 0) {
    console.log(Mewtwo.name + " est blessé... " + Deoxys.name + " gagne ce combat ");
}