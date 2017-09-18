const container = document.querySelector('#container');
const secondImg = document.querySelector('#second-img');
const infoElements = document.querySelectorAll('.info');

//altering

const firstP = document.querySelector('p');
firstP.innerText = 'Jamboree sandwich at the Jambo-ree';
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>';

//new elements

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

//appending elements
const firstSection = document.querySelector('section');

const someP = document.createElement('p');
document.firstSection.appendChild(someP);

const newImg = document.createElement('img');
newImg.src = 'https://www.rickey.org/wp-content/uploads/2015/11/Adorable-Kitten-Attacks-Husky-Too-Cute-VIDEO.png';
document.body.appendChild(newImg);

const pretty = document.createElement('section');
pretty.id = 'butterfly';
document.body.appendChild(pretty);

firstSection.classList.add('wdi-gravy-train');
firstSection.classList.contains('wdi-gravy-train') = true;
firstSection.classList.remove('wdi-gravy-train');