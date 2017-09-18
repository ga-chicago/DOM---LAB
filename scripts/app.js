const container = document.querySelector('#container'); // gives the element that has this id
console.log(container);
const secondImg = document.querySelector('#second-img');
console.log(secondImg);
const infoElements = document.querySelectorAll('.info'); // gives array of elements that share this class
console.log(infoElements);

const firstP = document.querySelector('p');
firstP.innerText = 'Jamboree sandwich at the Jambo-ree';
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'; // overwrites what was written into the innerText

const newDiv = document.createElement('div');
console.log(newDiv);

document.body.appendChild(newDiv);

const firstSection = document.querySelector('section');
const someP = document.createElement('p');
firstSection.appendChild(someP);

const newImg = document.createElement('img');
newImg.src = 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';
document.body.appendChild(newImg);

const newSection = document.createElement('section');
newSection.id = "butterfly";
document.body.appendChild(newSection);

const firstSectionClasses = firstSection.classList;
console.log(firstSectionClasses);

firstSection.classList.add('wdi-gravy-train');

firstSectionClasses.contains('wdi-gravy-train');
console.log(firstSectionClasses.contains('wdi-gravy-train'));

firstSection.classList.remove('wdi-gravy-train');




