const ENDPOINT = "https://calendrier.api.gouv.fr/jours-feries/";

/**
 *
 * @param uri: string
 * @returns {Promise<any>}
 */
async function getData(uri) {
    return await fetch(ENDPOINT + uri)
        .then(function (response) {
            return response.json();
        })
        .then(function (body) {
            return body;
        });
}

/**
 *
 * @param uri: string
 * @returns {Promise<any>}
 */
export async function getDataAsync(uri) {
    let response = await fetch(ENDPOINT + uri);
    return await response.json();
}

export default getData;
