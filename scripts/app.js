const container = document.querySelector('#container');
console.log(container);

const secondImg = document.querySelector('#second-img');
console.log(secondImg);

const thirdImg = document.querySelector('#third-img');
console.log(thirdImg);

const infoElements = document.querySelectorAll('.info');
console.log(infoElements);

const firstP = document.querySelector('p');
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

const firstSection = document.querySelector('section');
const someP = document.createElement('p');
firstSection.appendChild(someP);

const newImg = document.createElement('img')
newImg.src = "http://someco.fi/wp-content/uploads/2014/06/some.png";
document.body.appendChild(newImg);

const newSection = document.createElement('section')
newSection.id = 'butterfly';
document.body.appendChild(newSection);

const divClasses = firstSection.classList;

firstSection.classList.add('wdi-gravy-train');
console.log(divClasses.contains('wdi-gravy-train'));
firstSection.classList.remove('wdi-gravy-train');