let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch'];

function randEx( arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function excuse() {
    // let exc = "";
    let who2 = randEx(who);
    let what2 = randEx(what);
    let when2 = randEx(when);
    let exc = 'OMG! You will not believe me but, '+ who2 +" "+ what2 +" "+ when2;
console.log(exc);
    document.getElementById('excuses').innerHTML = exc;
}


//let content = 'OMG! You will not believe me but,'+'' +'' +'';


