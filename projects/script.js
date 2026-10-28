//пустые оъекты
// let a = new Object();
// let b = {}

// let user = {
//     name: "Jon",
//     "Slave Master": true,
//     age: 28
// }

// user.isAdmin = true;
// console.log(user)

// delete user.age;
// console.log(user)

// console.log("Jon is Slave Master? - " + user["Slave Master"])

// let magaz = {
//     apple: 4,
//     banana: 8,
//     orange: 5,
//     "roten tomatoes" : 99,
//}
// let fruit = prompt("Фрукт","apple")
// alert(fruit + " - " + magaz[fruit])

// console.log(magaz["roten tomatoes"])

// function makeUser1(name, age){
//     return {
//         name: name,
//         age: age,
//     }
// };

// function makeUser2(name, age){
//     return{
//         name,
//         age,
//     }
// }

// let user = makeUser1("Obama", 68);
// let user2 = makeUser2("Joe Biden", 79)
// console.log(user)
// console.log(user2)

// console.log("user2.GigaNiga == undefined? - " + (user2.GigaNiga == undefined))

// user2.GigaNiga = undefined
// console.log("Свойство GigaNiga существует у user2?")
// console.log(!(user2.GigaNiga == undefined))
// console.log("GigaNiga" in user2)

// let object = {
//     name: "Slave",
//     age: "64",
//     admin: false,
//     slavemaster: "T2x2",
//     sus: 333
// }
//  for(let key in object){
//     console.log(key+": "+object[key])
//  }


const body = document.body;

let user = {
    Name: "Obama",
    age: 12,
    slaveMaster: "t2x2",
    GigaNiga: false,
}
const start = document.getElementById("start");

function ab(){
    if(document.getElementById('container')) document.querySelector("#container").remove();
    const container = document.createElement("div")
    container.id = 'container';
    body.appendChild(container);

    for(let el in user){
        let key = document.createElement('div');
        key.innerHTML = `<h2>${el}</h2>`;
        key.className = 'key';

        let value = document.createElement('div');
        value.innerHTML = `<h2>${user[el]}</h2>`;
        value.className = 'value';

        let strok = document.createElement('div');
        strok.className = 'strok';

        strok.append(key,value)
        container.append(strok);
    }
}

start.addEventListener("click", () =>{
    if(document.getElementById('container')) document.querySelector("#container").remove();
    const container = document.createElement("div")
    container.id = 'container';
    body.appendChild(container);

    for(let el in user){
        let key = document.createElement('div');
        key.innerHTML = `<h2>${el}</h2>`;
        key.className = 'key';

        let value = document.createElement('div');
        value.innerHTML = `<h2>${user[el]}</h2>`;
        value.className = 'value';

        let strok = document.createElement('div');
        strok.className = 'strok';

        strok.append(key,value)
        container.append(strok);
    }
});

//Новая функция!

// let pacient1 = {
//     color: (Math.trunc(Math.random().toFixed(2)*100* 167_772)).toString(16),
//     vector: Math.trunc(Math.random().toFixed(2)*100* 3.6),
//     width: Math.trunc(Math.random()*100*3),
//     height: Math.trunc(Math.random()*100*3),
//     speed: Math.trunc(Math.random()*30),
//     element: document.createElement('div'),


//     move(){
//         this.element.style.left= `${parseFloat(this.element.style.left)+3}px`;
//         this.element.style.bottom=`${parseFloat(this.element.style.bottom)+1}px`;
//         setTimeout(() => this.move(),60)
//     },
// };

// pacient1.element.style.cssText= `
//     background-color: red; //${pacient1.color};
//     width: ${pacient1.width}px;
//     height: ${pacient1.height}px;
//     position: absolute;
//     left: 900px;
// `;

//fbfdbd

let speedD = 3;

function spawnChild(papaAddres){
    console.log("aaaaaa");
    //let papa = papaAddres.element;
    //let papaStyle = window.getComputedStyle(papa);

    let papa = document.querySelector('#pacient1');
    let papaStyle = window.getComputedStyle(papa);
    let child = papaAddres ? Object.assign({},papaAddres) : {
        color: (Math.trunc(Math.random().toFixed(2)*100* 167_772)).toString(16),
        vector: Math.trunc(Math.random().toFixed(2)*100* 3.6),
        width: Math.trunc(Math.random()*100*3),
        height: Math.trunc(Math.random()*100*3),
        speed: speedD,//Math.trunc(Math.random()*30),
        element: document.createElement('div'),

        move(){
            this.element.style.left= `${parseFloat(this.element.style.left)+(Math.cos(this.vector*Math.PI/180)* this.speed)}px`;
            this.element.style.bottom=`${parseFloat(this.element.style.bottom)+(Math.sin(this.vector*Math.PI/180)* this.speed)}px`;
            setTimeout(() => this.move(),60)
        },
    };

    child.element.style.cssText= `
        background-color: #${child.color};
        width: ${child.width}px;
        height: ${child.height}px;
        position: absolute;
        left: ${papaStyle.left};
        bottom: ${papaStyle.bottom};
    `;

    document.body.append(child.element);
    child.move()
}








let spawn = document.querySelector('#spawn');

function spawnFn(){

    let pacient1 = {
        color: (Math.trunc(Math.random().toFixed(2)*100* 167_772)).toString(16),
        vector: Math.trunc(Math.random().toFixed(2)*100* 3.6),
        width: Math.trunc(Math.random()*100*3),
        height: Math.trunc(Math.random()*100*3),
        speed: speedD,//Math.trunc(Math.random()*30),
        element: document.createElement('div'),


        move(){
            this.element.style.left= `${parseFloat(this.element.style.left)+(Math.cos(this.vector*Math.PI/180)* this.speed)}px`;
            this.element.style.bottom=`${parseFloat(this.element.style.bottom)+(Math.sin(this.vector*Math.PI/180)* this.speed)}px`;
            setTimeout(() => this.move(),60)
        },
        multiply(){
            spawnChild();
            setTimeout(()=> this.multiply(),1*1000)
        }
    };

    pacient1.element.id = 'pacient1';
    pacient1.element.style.cssText= `
        background-color: #${pacient1.color};
        width: ${pacient1.width}px;
        height: ${pacient1.height}px;
        position: absolute;
        left: ${window.innerWidth/2}px;
        bottom: ${window.innerHeight/2}px;
    `;

    document.body.append(pacient1.element);
    pacient1.move();
    pacient1.multiply();
}
spawn.addEventListener('click',spawnFn)


//setInterval(spawnFn, 100)