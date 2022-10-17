// On définit en constante l'url de l'API (appelé ENDPOINT)
const ENDPOINT = "https://calendrier.api.gouv.fr/jours-feries/";

/**
 * Les deux méthodes ci-dessous font la même chose
 * Elles ne devraient pas être présente simultanément.
 * Elles sont là pour montrer les différentes façons de faire.
 */


/**
 * Première méthode avec les promesses (promises)
 * On récupère en apramètre l'URI (metropole.json par exemple)
 *
 * @param uri: string
 * @returns {Promise<any>}
 */
async function getData(uri) { // async car await plus bas
    // On retourne le résultat (le dernier return du dernier then)
    return await fetch(ENDPOINT + uri)
        // Dans le premier then on récupère la Response (http) pour la parser en JSON
        .then(function (response) {
            return response.json();
        })
        // Ici on a le body JSON, on peut trier, manipuler le JSON ici, ou juste le retourner
        .then(function (body) {
            return body;
        });
}

/**
 * Méthode avec async/ await
 *
 * @param uri: string
 * @returns {Promise<any>}
 */
export async function getDataAsync(uri) {
    let response = await fetch(ENDPOINT + uri);
    return await response.json();
}

export default getData;
