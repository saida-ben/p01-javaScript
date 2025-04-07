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
    //p1.x = 0; 
    p2.name = 'p2';

    console.log('p2 =' +p2); //la concatenation pour utiliser toString
    console.log('p1 =' +p1); //la concatenation pour utiliser toString

    console.log('p2 :', p2);
    console.log('p1 :' ,p1);  //on a les afficher comme objet

    console.log('p2.x :', p2.x);//ila mal9ahach kimchi i9lb liha f p1 le pere un objet de type object
    Object.prototype.id = 200;


    let pp2 = Object.getPrototypeOf(p2);
    console.log('Prototype de p2', pp2);

    let ppp2 =  Object.getPrototypeOf(pp2);
    console.log('Prototype de pp2', ppp2);

    let pppp2 =  Object.getPrototypeOf(ppp2);
    console.log('Prototype de pp2', ppp2);

   
}


//new t :cree obj t depuis un obj t.prototype

//objectPrototype : le pere des prototype



Objects.exp07 = function() {
    console.clear();
    //creer le type point  : this en javascript est neccessite 
    function Point(x = 0, y = 0){
        this.x = x;
        this.y = y;

    }

    Point.prototype.toString = function(){
        return 'Point(' + this.name + ',' + this.x + ',' + this.y + ')';
    }

    Point.prototype.print = function(){
            console.log('Point : ' +this.x + ',' + this.y);
    }

    Point.prototype.name = 'Un Point';
    Point.MAX_X = 1000; // accessible que par le type .prototype : commun avec tous les objects (il est pas definit sur l objet p1)
        
    let p1 = new Point(10, 20);
        /*
            let p1 = Object.create(POint.prototype);
            + Appel a Point() sur p1 => this dans POint correspond a p1
            clonner ..prototype apple this avec l objet courant
        */
    console.log('p1 = ' + p1);
    console.log('p1 :', p1);
    
    let p2 = new Point(24);
    p2.print();

    console.log(Point.MAX_X); 
        //console.log(p1.MAX_X); // pas accessible par l instance de point

//il y a possiblite de faire new Function -- gestion des args (passee  a la fct f)
// let x = new f(); : toutes les fct joue le role d un connstructeur
// prorotype pour etre prepare de fonctionner comme un type
// toString pas statique il est commune heritee

// par defaut tout est publique
}


Objects.exp08 = function() {
    console.clear();
    // Classes ES6 : equivalent function constructeur
    class Point {
        #name = 'Point'; // private
        static MAX_X = 1000; // static : accessible par le type Point.MAX_X


        constructor(x=0, y=0){
            this.x = x;
            this.y = y;
        }

        toString(){
            return 'Point(' + this.x + ',' + this.y + ')';
        }

        print(){
            console.log('Point : ' + this.x + ',' + this.y);
        }

        get name(){
            console.log('getter()');
            return this.#name;
        }

        set name(value){
            console.log('setter()');
            this.#name = value;
        }

        static info() {
            console.log('type Point avec MAX_X =' + Point.MAX_X);
        }

    } 

    let p1 = new Point(20, 30);
    console.log('p1 = ' + p1);
    console.log('p1 : ' , p1);
    p1.print();

    p1.name ='P1';

    console.log('p1.name :' + p1.name);
    Point.info();


    class City extends Point {
        constructor(name, x, y){
            super(x, y); // impicite dans java mais dans js explicite et important
            this.name = name;

        }

        print() {
            console.log('Ville de ' + this.name + '(' +this.x + ',' + this.y + ')' );
        }
    } 
    let c = new City('Fés', 20000, 30000);
    c.print();
}

// vous avez la possibilite de definir  des methode statiques
// this.x : public

//dériere il y a tjr heritage prototypale : la chaine prototypale

// les notions modules et packages