const container = document.querySelector('container');
const secondImg = document.querySelector('#second-img');
const infoElements = document.querySelectorAll('.info');
const firstP = document.querySelector('p')
firstP.innerText = 'Jamboree sandwich at the Jambo-ree';
firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
const  firstSection = document.querySelector('section')
const someP = document.createElement('p');
someP.innerText = "DDDDDDDDDDDDD"
firstSection.appendChild(someP);
const newImg = document.createElement('img');
newImg.src = "http://rs255.pbsrc.com/albums/hh134/bjz0819/uglycat2.jpg?w=280&h=210&fit=crop"
document.body.appendChild(newImg);
const newSection = document.createElement('section')
newSection.id = 'butterfly'
document.body.appendChild(newSection);
const sectionClasses = firstSection.classList;
firstSection.classList.add("wdigravytrain");
firstSection.classList.remove("wdigravytrain");