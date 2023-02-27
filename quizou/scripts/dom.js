// On récupère l'élément sur lequel on va venir monter notre réponse
let showElements = document.getElementById('showElements');

/**
 *
 * @param data
 * @return void
 */
function appendDom(data) { // data = notre réponse JSON
    // On crée notre élément virtuellement
    let dlListElement = document.createElement('dl');

    // On boucle sur notre JSON
    // On ne peut pas utiliser forEach car ce n'est pas un tableau
    for (const day in data) {
        // On crée notre élément virtuellement
        let dtListElement = document.createElement('dt');
        // On crée notre élément virtuellement
        let ddListElement = document.createElement('dd');

        // On vient placer nos contenus dans notre virtuellement
        dtListElement.innerText = data[day];
        ddListElement.innerText = day;

        // On ajoute nos éléments dans notre élément virtuel
        dlListElement.appendChild(dtListElement);
        dlListElement.appendChild(ddListElement);
    }

    // On ajoute notre élément virtuel dans notre document "réel"
    showElements.append(dlListElement);
}

export default appendDom;