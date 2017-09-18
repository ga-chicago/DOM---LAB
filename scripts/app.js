//Find / retrieve an element
document.querySelector('selection');
document.querySelectorAll('secletion');

const container = document.querySelector('#container');
const secondImg = document.querySelector('#second-img');
const infoElements =document.querySelectorAll('.info');

// Alter an element's HTML
const firstP = document.querySelector('p');
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>';

// Create a new element
const newDiv = document.createElement('div');

// Append an element to the body
document.body.appendChild(newDiv);

// Append an element to a retrieved element
const firstSection = document.querySelector('section');
const someP = document.createElement('p');
firstSection.appendChild(someP);

// Create an element and give it an attribute before appending it
const newImg = document.createElement('img');
newImg.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMGVPAO_K57_gWNc57iyVVEmOp6fWBJ57m0kjsRxVOt-nlyduKmkKTfc";
document.body.appendChild(newImg);

// Create an element and give it an id
const newSection = document.createElement('section');
newSection.id = "butterfly";
document.body.appendChild(newSection);

// Get a list of the classes given to an element
const foundSection = document.querySelector('section');
const sectionClasses = foundSection.classList;

// Add a class to an element
foundSection.classList.add('wdi-gravy-train');

// See if a class has been added to an element
sectionClasses.contains('wdi-gravy-train');

//Remove a class from an element
foundSection.classList.remove('wdi-gravy-train');

