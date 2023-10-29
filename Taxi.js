class Personnage {
    constructor(prenom) {
        this.prenom = prenom;
        this.mentale = 10;
    }
}

class Trajet {
    constructor() {
        this.radio = ["Anissa - Wejdene", "Goth - Sidewalks and Skeletons", "Luminary - Joel Sunny", "Saiyan - Heuss L'enfoiré / Gazo", "Next to you - Oneheart"];
        this.feuxRouges = 30;
        this.changement = 0;
    }

    jouerMusique() {
        return this.radio[Math.floor(Math.random() * this.radio.length)];
    }
}

let john = new Personnage("John");
let trajet = new Trajet();

while (john.mentale > 0 && trajet.feuxRouges > 0) {
    let musique = trajet.jouerMusique();
    trajet.feuxRouges--;

    if (musique === "Anissa - Wejdene") {
        john.mentale--;
        trajet.changement++;
        console.log("Le Taxi passe Anissa de Wejdene, " + john.prenom + " change de Taxi.");
    } else {
        console.log("Le Taxi passe une bonne musique : " + musique + ", " + john.prenom + " ne change pas de Taxi.");
    }

    console.log("Musique jouée : " + musique);
    console.log("Feux rouges restants : " + trajet.feuxRouges);
    console.log("Santé mentale de " + john.prenom + ": " + john.mentale);
}

if (john.mentale === 0) {
    console.log(john.prenom + " a perdu toute sa santé mentale. Explosion!");
} else {
    console.log(john.prenom + " est arrivé à destination");
    console.log("Il a changé de taxi " + trajet.changement + " fois.");
}
