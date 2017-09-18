document.querySelector('div');
document.querySelector('#someId');
document.querySelectorAll('.someClass');

const elem = document.querySelector('#someId');

console.log(elem);

const container = document.querySelector('#container');

console.log(container);

const secondImg = document.querySelector('#second-img');
console.log(secondImg);

const infoElements = document.querySelectorAll('.info');
console.log(infoElements);

const firstP = document.querySelector('p');
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>';

const newDiv = document.createElement('div');
console.log(newDiv);

document.body.appendChild(newDiv);

const firstSection = document.querySelector('section');
const someP = document.createElement('p');
document.body.appendChild(firstSection);
firstSection.appendChild(someP);

const newImg = document.createElement('img');
newImg.src = "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg";
document.body.appendChild(newImg);

const secondSection = document.createElement('section2');
secondSection.id = "butterfly";
document.body.appendChild(secondSection);

const firstSectionClasses = firstSection.classList;
console.log(firstSectionClasses);

firstSection.classList.add('wdi-gravy-train');

console.log(firstSectionClasses.contains('wdi-gravy-train'));

firstSection.classList.remove('wdi-gravy-train');



