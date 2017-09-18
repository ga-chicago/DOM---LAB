

document.querySelector('selection');

document.querySelectorAll('selection');


document.querySelector('#first-img');
document.querySelector('.info');


const example = document.querySelector('.info');


console.log(example)

const container = document.querySelector('#container');

console.log(container)

const secondImg = document.querySelector('#second-img');

console.log(secondImg)

const infoElements = document.querySelectorAll('.info');

console.log(infoElements)



const firstP = document.querySelector('p');

firstP.innerText = 'Jamboree sandwich at the Jambo-ree';


firstP.innerHTML = '<strike>Jamboree sandwich at the Jambo-ree</strike>';



const newDiv = document.createElement('div');


console.log(newDiv)

document.body.appendChild(newDiv);


const appendage = document.createElement('li');

newDiv.appendChild(appendage);







const firstSection = document.querySelector('.info');

const someP = document.createElement('p');

firstSection.appendChild(someP);



const newImg = document.createElement('img');

newImg.src = 'https://i.pinimg.com/236x/cb/16/80/cb168000f4edde7fe65f4ced0323c21d--classic-cartoons-cartoon-characters.jpg';


document.body.appendChild(newImg);


const bugsLife = document.createElement('section'); 

bugsLife.id = 'butterfly';

document.body.appendChild(bugsLife);






const search = firstSection.classList;


console.log(search)



firstSection.classList.add('wdi-gravy-train');


console.log(search.contains('wdi-gravy-train'));

firstSection.classList.remove('wdi-gravy-train');








