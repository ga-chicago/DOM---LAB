const container = document.querySelector('#container');

const secondImg = document.querySelector('#second-img');

const infoElements = document.querySelectorAll('.info');


const firstP = document.querySelector('p');
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'

const newDiv = document.createElement('div');



document.body.appendChild(newDiv);

const firstsection = document.querySelector('section');
const someP = document.createElement('p');
firstsection.appendChild(someP);

const imagez = document.createElement('img');
imagez.src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg" 
document.body.appendChild(imagez);


const someDiv = document.createElement('div');
someDiv.id = "butterfly";
document.body.appendChild(someDiv);

firstsection.classList.add('wdi-gravy-train');

firstsection.classList.remove('wdi-gravy-train');

