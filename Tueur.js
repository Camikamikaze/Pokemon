//
// MERCI DE LIRE CE MESSAGE AVANT DE CORRIGER MON CODE
//

//
// LE PROBLEME DU CODE
//

// Je n'arrive pas à faire en sorte que les 5 caractéristiques(nerd, blonde, etc...) n'existes qu'une seule fois,
// Le code marche sans problème sinon, mais on se retrouve avec par moment 3 fois un intello dans le groupe de 5,
// J'ai essayé pleins de fois différentes choses mais je n'y arrive pas,
// C'était pour prévenir que je vous ai écris ce message.
// Bonne correction


class Tueur {
    constructor() {
        this.nom = "Jason";
        this.pointsDeVie = 100;
    }

    attaquer(survivant) {
        const proba = Math.random();
        if (proba < survivant.caracteristique.probabiliteMourir) {
            survivant.pointsDeVie = 0;
            return (this.nom + " a attaqué " + survivant.prenom + " et l'a tué.");
        } else if (proba < survivant.caracteristique.probabiliteMourir + survivant.caracteristique.probabiliteInfligerDegats) {
            this.pointsDeVie -= 10;
            return (this.nom + " a attaqué " + survivant.prenom + ". " + survivant.prenom + " a esquivé l'attaque et a infligé 10 points de dégâts.");
        } else if (proba < survivant.caracteristique.probabiliteMourir + survivant.caracteristique.probabiliteInfligerDegats + survivant.caracteristique.probabiliteMourirEnInfligerDegats) {
            this.pointsDeVie -= 15;
            return (this.nom + " a attaqué " + survivant.prenom + ". " + survivant.prenom + " et a infligé 15 points de dégâts avant de mourir.");
        } else {
            return (this.nom + " a attaqué " + survivant.prenom + " mais, " + survivant.prenom + " a esquivé l'attaque.");
        }
    }
}


const equipeSurvivants = [];

const caracteristiques = [
    { nom: "Nerd", probabiliteMourir: 0.3, probabiliteInfligerDegats: 0.5, probabiliteMourirEnInfligerDegats: 0.2 },
    { nom: "Sportif", probabiliteMourir: 0.4, probabiliteInfligerDegats: 0.6, probabiliteMourirEnInfligerDegats: 0.3 },
    { nom: "Blonde", probabiliteMourir: 0.2, probabiliteInfligerDegats: 0.4, probabiliteMourirEnInfligerDegats: 0.1 },
    { nom: "Intello", probabiliteMourir: 0.3, probabiliteInfligerDegats: 0.5, probabiliteMourirEnInfligerDegats: 0.2 },
    { nom: "Solitaire", probabiliteMourir: 0.5, probabiliteInfligerDegats: 0.4, probabiliteMourirEnInfligerDegats: 0.1 },
];

const nomsNerd = ["Steve", "Mark", "Bill", "Linda", "Samantha", "Alice"];
const nomsSportif = ["Mike", "Chris", "Tom", "John", "Alex", "Laura"];
const nomsBlonde = ["Barbie", "Chad", "Brittany", "Ken", "Heather", "Ryan"];
const nomsIntello = ["Einstein", "Newton", "Tesla", "Hawking", "Curie", "Da Vinci"];
const nomsSolitaire = ["Dimitri", "Wulf", "Wand", "Hector", "Rey", "Albert"];

function genererNomAleatoire(noms) {
    return noms[Math.floor(Math.random() * noms.length)];
}

class Survivant {
    constructor() {
        const caracteristiqueAleatoire = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
        this.prenom = genererNomAleatoire(caracteristiqueAleatoire.nom === "Nerd" ? nomsNerd :
                                          caracteristiqueAleatoire.nom === "Sportif" ? nomsSportif :
                                          caracteristiqueAleatoire.nom === "Blonde" ? nomsBlonde :
                                          caracteristiqueAleatoire.nom === "Intello" ? nomsIntello :
                                          caracteristiqueAleatoire.nom === "Solitaire" ? nomsSolitaire : []);
        this.caracteristique = caracteristiqueAleatoire;
        this.pointsDeVie = 100;
    }
}

for (let i = 0; i < 5; i++) {
    const survivant = new Survivant();
    equipeSurvivants.push(survivant);
}

console.log("Survivants générés :");
equipeSurvivants.forEach((survivant, index) => {
    console.log(`Survivant ${index + 1}: Prénom - ${survivant.prenom}, Caractéristique - ${survivant.caracteristique.nom}`);
});

const jason = new Tueur();

while (jason.pointsDeVie > 0 && equipeSurvivants.length > 0) {
    const survivantIndex = Math.floor(Math.random() * equipeSurvivants.length);
    const survivant = equipeSurvivants[survivantIndex];
    const action = jason.attaquer(survivant);

    if (survivant.pointsDeVie <= 0) {
        equipeSurvivants.splice(survivantIndex, 1);
        console.log("Jason a tué " + survivant.prenom + ".");
    } else {
        console.log(action);
    }
}

if (jason.pointsDeVie <= 0) {
    console.log("Les survivants ont gagné, Jason est mort.");
} else {
    console.log("Les survivants ont été vaincus. RIP à tous les survivants.");
}
