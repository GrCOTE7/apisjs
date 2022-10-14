let showElements = document.getElementById('showElements');

/**
 *
 * @param data
 * @return void
 */
function appendDom(data) {
    let dlListElement = document.createElement('dl');

    for (const day in data) {
        let dtListElement = document.createElement('dt');
        let ddListElement = document.createElement('dd');

        dtListElement.innerText = data[day];
        ddListElement.innerText = day;

        dlListElement.appendChild(dtListElement);
        dlListElement.appendChild(ddListElement);
    }

    showElements.append(dlListElement);
}

export default appendDom;