import getData from './scripts/api.js'
import appendDom from './scripts/dom.js'
import { getDataAsync as getAsync} from './scripts/api.js'

let optionElement = document.getElementById('search');

optionElement.value.addEventListener('change', async () => {
    let data = await getAsync(`${optionElement.value}.json`)
    appendDom(data);
});
