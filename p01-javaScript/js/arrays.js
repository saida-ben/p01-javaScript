//const arrays = new Object();
const arrays = {};

function printArray(name, t){
    console.log(`${name} (${t.length}):`);//template string

    for(let i = 0; i < t.length; i++){
        //console.log(`t[${i}] = ${t[i]}`);
        console.log('-' +i+ ' :' +t[i]);
    }
}
// je peux pas affecter et modifier pas arrays = mais arrays.
arrays.exp01= function(){
    let t1 = [];
    t1[0] = 10;
    t1[1] = 60;  
    t1[2] = 34;
    t1[5] = 6;

    delete t1[1];
    
    printArray('t1', t1);
    
    printVar('t1', t1);

    console.log(t1);
    console.log('t1', t1);
    console.log('t1 =' + t1);//to string 
}

arrays.exp02 = function(){
    let t1 = new Array(10, 24, 15);
    t1.push(100);
    t1.push(20);

    printArray('t1', t1);
}
//for in toutes les cle pour lesquel on a une val  for of rec les vals (uniq elm indexé par entiers meme si sont undifined)
arrays.exp03 = function(){  
    console.clear();
    let t1 = [20, 24, 54]; // ca sera la meme chose que new Array(20, 24, 12, 15, 54);
    
    t1[4] = 30;
    t1[7] = 40; 
    t1['clavier'] = 460; // les tables en js et comme hashtable en java il y a poss de par les cles et les valeurs les objs pas itterables mais il y a la poss de les rends iterable avec symbol
    t1['ecran'] = 1800;

    console.log('avec for');
    printArray('t1', t1);
    console.log('avec for in');
    for (const key in t1) { // parcours les cles pas les vals
        console.log(key + ' : ' +t1[key]);
    }

    console.log('avec for of');//ca marche avec que les iterables
    for (const value of t1) { 
        console.log('-' + value); // parcours les vals pas les cles
    }

//autre solution pour extraire les cles d un tableau

let keys = Object.keys(t1);
console.log('keys', keys);


}
arrays.exp04 = function(){
    let author = [];
    author['id']= 101;
    author['name'] = 'Victor Hugo';
    author['birth'] = 1802;

    let div = document.getElementById('author');
    if(div.innerHTML.trim == ''){ //trim permet de supprimer les espaces comparaison de ch.caractere sefait avec ==
        printInHtmlTable('author', author);
    }else{
        div.innerHTML= '';
    }
    printInHtmlTable(author,'author');
}

function printInHtmlTable(data, id){
    let content = `
    <table class ="data-table">
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
    `

    let keys = Object.keys(data);
    for (let key of keys) {
        content += `
        <tr>
            <td>${key}</td>
            <td>${data[key]}</td>
        </tr>
        `
    }
    content += '</table>';
    document.getElementById(id).innerHTML = content;  //innerHTML est une propriete qui permet de modifier le contenu d un element html  
}

arrays.exp05 = function(){
    //possibilite ES-6 : Spread operator (opérateur d'étalement ou decomposition)
    let t1 = [10, 45, 30];
    //Cas N°1 : Insertion en tete : 
    t1 = [30, ...t1]; //extraction des elm du tab pour le metre dans un contexte
    console.log('t1', t1);
    //Cas N°2 : Insertion en queue a la fin :
    t1 = [...t1, 10, 52];
    console.log('t1', t1);
    //Cas N°3 : fusion de tableaux :

    let t2 = [23, 24, 25];
    let t3 = [...t1, ...t2];
    console.log('t3', t3);
    //Cas N°4 : Copie d'un tableau:
    let t4 = [...t2]; 
    t4.push(100);
    console.log('t2', t2);
    console.log('t4', t4);
}

arrays.exp06 = function(){
    console.clear();
    //  ES-6 : Object Destructuring (Décomposition, Destruction, Déstructuration d'objets)
    let t1 = [10, 20, 30,87, 65];
    let [x1, x2, , x3] = t1;
    console.log('x1', x1);
    console.log('x2', x2); //cet syntaxe est valable avec les objets aussi
    console.log('x3', x3);
}