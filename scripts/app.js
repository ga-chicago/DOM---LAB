document.querySelector("#container");
const container = document.querySelector('#container');
console.log(container);



document.querySelector("#second-img");
const secondImg = document.querySelector("#second-img")
console.log(secondImg);



document.querySelector(".info");
const infoElements = document.querySelector(".info");
console.log([infoElements,infoElements]);


const firstP = document.querySelector("p");
firstP.innerHTML = "Jamboree sandwich at the Jambo-ree";

firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>';

const newDiv = document.createElement("div");
console.log(newDiv)

document.body.appendChild(newDiv)

const firstSection = document.querySelector("section");
const someP = document.createElement("p");
firstSection.appendChild(someP);

const newImg = document.createElement("img")
newImg.src = "https://chicagoganghistory.com/wp-content/uploads/2017/07/photo-chicago-south-shore-country-club-front-gates-1940.jpg";
document.body.appendChild(newImg);

const newSection = document.createElement("section");
newSection.id = "butterfly";
document.body.appendChild(newSection);

const classSection = firstSection.classList;
console.log(classSection)


firstSection.classList.add("wdi-gravy-train")
firstSection.contains('wdi-gravy-train');
firstSection.remove("wdi-gravy-train")


