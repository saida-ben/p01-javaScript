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
arrays.exp03 = function(){  
    let t1 = [20, 24, 54]; // ca sera la meme chose que new Array(20, 24, 12, 15, 54);
    
    t1[4] = 30;
    t1[7] = 40; 
    t1['clavier'] = 460;
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
}