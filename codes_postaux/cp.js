import codesPostaux from 'codes-postaux/index.js';

let cp = 21121

let communes = codesPostaux.find(cp)

// communes = [
//   {nomCommune : "A"},
//   {nomCommune : "B"},
//   // {nomCommune : "C"},
//   // {nomCommune : "D"},
// ]

console.log(communes)

let affCommunes = document.getElementById('communes')
let hotCity = document.getElementsByClassName("city")
let hotCp = document.getElementsByClassName("cp")
cp = cp.toFixed(0).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ' ')

let res = []
communes.forEach((commune) => {
  res.push('<span class="city">' + commune.nomCommune + '</span>')
})

let nb = res.length
console.log(nb)

if (nb > 0) {
  let intro = (nb > 1 ? 'Les' : 'La') + ' ville' + (nb > 1 ? 's' : '') + ' dont le code postale est <span class="cp">' + cp + '</span> ' + (nb > 1 ? 'sont' : 'est') + ' :'
  let citiesList = res.slice(0, -1).join(`, `) + (nb > 1 ? (' et ' + (nb > 3 ? 'enfin, ' : '')) : '') + res.slice(-1) + '.'
  
  affCommunes.innerHTML = intro + '<hr>' + citiesList;

  [...hotCity].forEach((i) => {
    i.style.color = 'blue'
    i.style.fontWeight = 'bold'
    i.style.fontSize = '1.2rem'
  })
} else {
  let noCities = 'Le code postale <span class="cp">' + cp + '</span> n\'est celui d\'aucune ville.'
  affCommunes.innerHTML = noCities;
}

[...hotCp].forEach((i) => {
  i.style.color = 'blue'
  i.style.fontWeight = 'bold'
  i.style.fontSize = '2rem'
})
console.log(hotCp)
