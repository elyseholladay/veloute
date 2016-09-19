var cats = require('./cats');

var element = document.createElement('h1');
element.innerHTML = 'Cats';
document.body.appendChild(element);

var catDiv = document.createElement('div'); 
document.body.appendChild(catDiv);

var cats = ['dave', 'henry', 'martha'];
for (var cat of cats) {
    catDiv.innerHTML += cat;
}