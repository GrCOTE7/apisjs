import codesPostaux from 'codes-postaux/index.js';

let communes = codesPostaux.find(21170)

let affCommunes = document.getElementById('communes')

// lignes.forEach(line => line.style.width = 0)
let res = []
communes.forEach((commune) => {

  res.push(commune.nomCommune)
  console.log(commune.nomCommune)
  affCommunes.append(commune.nomCommune)
  affCommunes.append("<br>")
})

displayListOfMatches.innerHTML = "<p>" + a.join("</p><p>") + "</p>";
displayListOfMatches.innerHTML = "";
displayListOfMatches.innerHTML = a.map(function(entry) {
  return "<p>" + entry.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</p>";
}).join("");
communes.forEach( function(commune) {
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(commune.nomCommune))
  displayListOfMatches.appendChild('p');
  
})

// displayListOfMatches.innerHTML = ""; // You can leave this out if it's empty

// a.forEach(function(entry) {
//     var p = document.createElement("p");
//     p.appendChild(document.createTextNode(entry));
//     displayListOfMatches.appendChild(p);
// });


// affCommunes.innerHTML = communes[0].nomCommune


console.log(communes)
