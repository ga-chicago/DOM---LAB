//Use document.querySelector() to find an element in the DOM.
//Use document.querySelectorAll() to find a collection 
//of elements in the DOM



//Prompts

//1
// document.querySelector('#container');

const container = document.querySelector('#container');

console.log(container);		


//2
// document.querySelector('#second-img');
const secondImg = document.querySelector('#second-img');

console.log(secondImg);

//

//4
// document.querySelector('.info');

const infoElements = document.querySelector('.info');

console.log([infoElements,infoElements]);


//5

// document.querySelector('p');

const firstP = document.querySelector('p');

console.log(firstP)

firstP.innerHTML = '<strong>Jamboree sandwich at the Jambo-ree</strong>';

const newDiv = document.createElement('div')

document.body.appendChild(newDiv)

container.appendChild(newDiv)
// Get the first section element from the pag
// and save it to a variable firstSection.

 //Create a p element and save it to a variable someP.

//Append it to the section.


const firstSection = document.querySelector('section');

const someP = document.createElement('p');

firstSection.appendChild(someP);

const newImg = document.createElement('img')

newImg.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Castle_Neuschwanstein.jpg'

document.body.appendChild(newImg)


//Create an element and git it an  id

const newSection = document.createElement('section')

newSection.id = 'butterfly'

document.body.appendChild(newSection)

//We can see the different 
//classes on an element with the .classList property

//Append your previously created div to the body of the document.
//You should see your <div></div> in the elements tab, 
//located within the body tag:


const classSection = firstSection.classList;

console.log(classSection)

firstSection.classList.add('wdi-gravy-train');
















































