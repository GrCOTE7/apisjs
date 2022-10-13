import codesPostaux from 'codes-postaux/index.js';

let communes = codesPostaux.find(21170)

// console.log(communes)

let affCommunes = document.getElementById('communes')

// lignes.forEach(line => line.style.width = 0)
let res = []
communes.forEach((commune) => {
  res.push(commune.nomCommune)
})
console.log(res)
let text = res.join(`<br>`)

affCommunes.innerHTML = text
