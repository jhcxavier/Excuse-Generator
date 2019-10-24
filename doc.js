window.onload=()=>{
button = () =>{
let who = ['The dog ','My granma ','His turtle ','My bird '];
let what = ['eat ','pissed ','crushed ','broked '];
let when = ['before the class.','right in time.','when I finished.','during my lunch.'];

// function randEx( arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

let who2 = Math.floor(Math.random() * who.length);
let what2 = Math.floor(Math.random() * what.length);
let when2 = Math.floor(Math.random() * when.length);
document.querySelector('#excuses').innerHTML = who[who2] + what[what2] + when[when2];
}
}
// function excuse() {
//     // let exc = "";
//     let who2 = randEx(who);
//     let what2 = randEx(what);
//     let when2 = randEx(when);
//     let exc = 'OMG! You will not believe me but, '+ who2 +" "+ what2 +" "+ when2;
// console.log(exc);
//     document.getElementById('excuses').innerHTML = exc;
// }


//let content = 'OMG! You will not believe me but,'+'' +'' +'';


