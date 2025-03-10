//const objects = new Object();
const Objects = {};//new object();

//vous etes capable de creer des obj sans l existance de type

Objects.exp01 = function(){
    console.clear();
    let z = 40;
    let p1 = {
        x : 20,
        y : 30,
        // ES-6 (z : z, <=> z,) prc on a du z definie avant
        z,
        //Redéfinition de la methode tostring()
        toString : function(){
            return 'Point(' + this.x + ', ' + this.y + ',' + this.z + ')'; //this fait reference a l objet courant dans js obligatoire et java non
        },
        //POssibilté ES6 (raccourci) : print et pas print : function(){}
        print(message){
            if (message === undefined) message = 'Point';
            console.log(message + '(' + this.x + ', ' + this.y + ',' + this.z + ')');
        }
    }

    console.log('p1 = ' +p1);//comme objet p1.tostring() objet comme etant chaine
    console.log('p1 = ' ,p1);
    printVar('p1', p1); //base sur la concataination 
    p1.print(); // surcharge existe avec cet methode
    p1.print('p1'); // surcharge pardefaut c est la redefinition de la methode  je peux pas reprendre la def d une methode c est de la rede l ecraser 
    // privatisation 

}

Objects.exp02 = function(){
    console.clear();
    let z = 40;
    let p1 = {}
        p1.x = 20,
        p1.y = 30,
        p1.toString = function(){
            return 'Point(' + this.x + ', ' + this.y + ')'; //this fait reference a l objet courant dans js obligatoire et java non
        }
        p1.print = function(message){
            if (message === undefined) message = 'Point';
            console.log(message + '(' + this.x + ', ' + this.y + ')');
        }
    

    console.log('p1 = ' +p1);
    console.log('p1 = ' ,p1);
    printVar('p1', p1);  
    p1.print(); 
    p1.print('p1');  
    
}


Objects.exp03 = function(){
    let prop = 'id';
    let value = 100;
    let p1 = {
        x : 20,
        y : 30,
        ['max-y'] : 1000,
        [prop] : value
    }
    p1.name = 'p1';

    console.log('p1' , p1);
    console.log('p1.x :', p1.x);


    console.log("p1['x1]", p1['x1']);
    p1['max-x'] = 30;
    //document.getElementById('...'.style.color = 'red');
    let keys = Object.keys(p1);
    console.log("p1['x'] :", p1['x']);
    console.log('keys :' , keys);

    prop = 'y';
    //console.log('p1.' +prop + ' = ' +p1.prop); // pas faire
    console.log('p1.' +prop + ' = ' +p1[prop]);// a faire

    for (let key in p1){
        console.log('p1.' + key + ' =' +p1[key]);
    }
}
Objects.exp04 = function(){
    let t1 = [];
    let a1 = {};

    console.log('t1 : ', typeof t1);
    console.log('a1 : ', typeof a1);

    t1[0] = 20;
    a1[0] = 20;


    console.log('t1.length : ' + t1.length);
    console.log('a1.length : ' + a1.length);
    a1.length = 1;
    console.log('a1.length (aprés affectationt) :'  +a1.length);

    console.log('t1 keys : ' + Object.keys(t1));
    console.log('a1 keys : ' + Object.keys(a1)); //key on extrait les prop 

}

Objects.exp05 = function(){
    //Spread Opeator
    let p1 = {x:20, y:30};

    p1 = {...p1, x:  50, z: 80};
    console.log('p1 :', p1);

    // Destructuring 
    let {x, z: a} = p1; // recup par nom de p1
    console.log('a = ' + a);
    console.log('x = ' + x);

}

Objects.exp06 = function() {
    console.clear();

    let p1 = {
        name : 'p1',
        x : 20,
        y : 30,
        toString() {
            return 'Point(' + this.id  + this.name + ',' +this.x + ',' + this.y + ')';
        }
    }
    
    Object.prototype.id = 100;    // c est obj de type obj
    

    let p2 = Object.create(p1);
    p2.x = 0; // on a cree x pas remontee a p1
    // le prototypede p1 c est un prototype objet de type object c est l heritage prototypage 3 obj chacun herite de la autre . on a cree p2 par create..  on a rien mis dans le il herite de p1 il y a accee en lecture et accee en ecriture  
    p1.x = 0; 

    console.log('p2 =' +p2); //la concatenation pour utiliser toString
    console.log('p1 =' +p1); //la concatenation pour utiliser toString

    console.log('p2 :', p2);
    console.log('p1 :' ,p1);  //on a les afficher comme objet

    console.log('p2.x :', p2.x);//ila mal9ahach kimchi i9lb liha f p1 le pere un objet de type object
}
