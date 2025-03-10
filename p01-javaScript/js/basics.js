
// "use strict"; // mode d'interpretation strict : mode qui elimine les choses permet de fait des prb,  risque de creer prb d interpretation de code

afficher("Script Externe");

// contexte locaux la boite le plus petit est la fonction
// contexte globale la boite le plus grand est la fenetre
// contexte d'objet la boite est l'objet    
// il y a pas de typage est dynamique implicite et pas explicite
// on a deja meth print predefinie
// function et var sont remontes la declaration en haut de la page
// let et const ne sont pas remontes en haut de la page
// offre pcp types objets et obj predefinies comme console : obj predefinie 
// types de bases : number(8octet), string, boolean, undefined, null, type symbol =< type wrapper :
// pas de separation entre int et reel
// les types de bases sont immutables
// les types objets sont mutables
// les types de bases sont stockes dans la pile
// les types objets sont stockes dans le tas
// les types de bases sont passes par valeur
// les types objets sont passes par reference


function afficher(message){
    //alert(message);
    console.log(message); //obj console et sa methode log 
    // que vous avez la possibilite de l exploiter exploiter 
    // val particuler d obj est null
    // types primitives de java : int, float, double, char((entre cote)), boolean , 
}

v7 = "variable Globale implicitement declaree"; // cree polution dans le contexte globale 
var v1 = 201.45, v2 = 213555555558845555555555n, v3 = "String", v4 = 20<30, v5 = null, v6;

function printVar(name, variable){
    console.log('-' + name + " : " + typeof variable + " = " + variable);
}

function exp01(){
    printVar("v1", v1);
    printVar("v2", v2);
    printVar("v3", v3);
    printVar("v4", v4);
    printVar("v5", v5);
    printVar("v6", v6);
    printVar("v7", v7);
}

// tout ce qu on execute c est on contexte global , nodejs est dans contexte global ; tout ce qui est declaree globale et defenie dans window qui est obj glbale et vice versa
// window est un obj qui represente le contexte global
// enrichir dynamiquer obj existant par propriete et methode (en modifie obj windwow en ajoutant des proprietes)

function exp02(){
    window.printVar('window.v1', window.v1);
    window.v8 = " Globale object";
    window.printVar('v8', v8);
    window.console.log('console est aussi propriete de window');
    // une fct considerer propriete d obj ou vars de type fct sct est type obj lui meme
    // // on peux ecrire var.test = function(){}; prc vous avez en train de le cree dans sa contexte global qui est obj window
    window.test = function(){
        console.log('Ceci est la fct test()');
    } 

    test();
}

// lang orientee obj dans on dit type a la place de class
// let pour var local surtout
function exp03(){
    let x1 = 20;
    let x2 = new Number(20);
    let x3 = new Number(20);
    printVar('x1', x1);
    printVar('x2', x2); 
    printVar('x3', x3);
    console.log('x1 == x2' , x1 == x2); // true parceque on compare les valeurs
    console.log('x1 == x3)' , x1 == x3); // true parceque on compare les valeurs
    console.log('x2 == x3)' , x2 == x3); // false parceque on compare les references 

    console.log('x1 === x2' , x1 === x2); // false comparaison strict parceque pas de meme type c est false
}

//convertir number en primitive
// obj et type primitive : convertir obj en primitive 

function exp04(){
    // les valeurs falsy (falcy values)
    let x1 = 0;
    let x2 = "";
    let x3 = false;

    printVar('x1', x1);
    printVar('x2', x2);
    printVar('x3', x3);


    if(!x1) console.log('x1 = false');
    if(!x2) console.log('x2 = false'); // sont representer par false , ce sont falcy value
    if(x4) console.log('x4 = true');else console.log('x4 == false');//  remonte juste la declaration de x4 et l affectation et reste dans la place ou on a declare le type

    console.log('x1 === x2' , x1 == x2); // comparer representation memoire
    console.log('x1 === x3' , x1 == x3);

    var x4 = []; // tableau vide ,
    if(x4) console.log('x4 = true');else console.log('x4 == false'); //  les var declares par var remonte juste la declaration de x4 au debut de la fonction et l affectation et reste dans la place ou on a declare le type
    console.log('x1 == x4', x1 == x4); 

    //undifined est falsy value aussi 

    console.log('x1 === x2' , x1 === x2); // comparer representation memoire
    console.log('x1 === x3' , x1 === x3);
    console.log('x1 === x4' , x1 === x4);
}

function exp05(){
    let x1 = '20.5';
    let x2 = 14.2;

    printVar('x1', x1);
    printVar('x2', x2);

    let x3 = x1 +x2;
    printVar('x3', x3);

    
    let x4 = parseFloat(x1) + x2;
    printVar('x4', x4);
}

//les types de bases de js sont les suivants : number, string, boolean, undefined, null, symbol