// Deux façons différentes d'improter un module
// Le premier, on load le module par défaut
// Le deuxième, on choisit (et renomme) le module à importer
import getData from './scripts/api.js'
import { getDataAsync as getAsync} from './scripts/api.js'

// On charge le module par défaut
import appendDom from './scripts/dom.js'

// On récupère l'élément Select pour l'écouter et récupérer la valeur choisie
let optionElement = document.getElementById('search');

// On place un écouteur sur l'évènement "change" (détection de changement) sur le select
optionElement.addEventListener('change', async () => { // async car on utilise await plus bas
    // On appelle la fonction de notre fichier api.js
    // On passe en paramètre de la focntion la valeur avec ".json" à la fin
    // Par exemple "metropole.json"
    // De type await pour attendre la fin de la requête pour continuer
    let data = await getData(`${optionElement.value}.json`)

    // On appelle la fonction du fichier dom.js qui va ajouter au DOM
    appendDom(data);
});
