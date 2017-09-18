const container = document.querySelector('#container');
console.log(container);

const secondImg = document.querySelector('#second-img');
console.log(secondImg);

const infoElements = document.querySelectorAll('.info');
console.log(infoElements);

const firstP = document.querySelector('p');
firstP.innerText = "Jamboree sandwich at the Jambo-ree";
firstP.innerHTML = "<strong>Put your hands where I can see \'em, so they look like 12pm</strong>";

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

const firstSection = document.querySelector('section');
const someP = document.createElement('p');
firstSection.appendChild(someP);

const newImg = document.createElement('img');
newImg.src = "https://i.imgur.com/e4QIXVN.png";
document.body.appendChild(newImg);

const newSection = document.createElement('section');
newSection.id = "butterfly";
document.body.appendChild(newSection);

const sectionClasses = firstSection.classList;

firstSection.classList.add('wdi-gravy-train');

sectionClasses.contains('wdi-gravy-train');

firstSection.classList.remove('wdi-gravy-train');