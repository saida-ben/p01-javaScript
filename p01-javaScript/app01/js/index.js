
//vision par node 
//vision ici
//map recoit  , reduce convertir tout en une sel ch caractere
//rwd responsive web design , spa single page application (index tout dans index, le rest via ajax)
const path = 'photos/authors/';
function main(){
    let content = `
    <h1>Liste des auteurs</h1>
    <div class="authors-list">
    `
    /*
    for (let a of authors) {
        content += `
        <div class="author">
            <img src="${path}${a.photo}" alt="${a.name}" /> 
            <div><span>${a.name}</span> (<span> ${a.yearBorn}</span>, <span> ${a.country}</span>)</div>
            <div><span>Oeuvre Principale</span> : <span>${a.technology}</span></div>
            

        </div>
        `;
    }
    content += `</div>`;
    document.getElementById('root').innerHTML = content;
} */

//tjrs feme img </div>

// pas a base de for dans index.js

//calback s applique sur chaque elm  du table est un fct et fct et obj dans js map(function(a)) s applique sur tous les auteurs 










//map recoit une fct en parametre et on lui passe une fct qui va s appliquer sur chaque elm du tableau
//Arrow function ES-6 (a) => pas function(a) pas de param on fait pas () un seul retour on utilise pas {}
content += authors.map(a =>`
        <div class="author">
            <img src="${path}${a.photo}" alt="${a.name}" /> 
            <div><span>${a.name}</span> (<span> ${a.yearBorn}</span>, <span> ${a.country}</span>)</div>
            <div><span>Oeuvre Principale</span> : <span>${a.technology}</span></div>
            

        </div>
        `
).reduce((pv, cv) => pv + cv, ''); //'' contient val initial avec quoi je commence //reduce pour reduire tout en une sel ch => ce que je retourne 

content += `</div>`;
document.getElementById('root').innerHTML = content;
}

//ces notion sont intro a callback function arrow function