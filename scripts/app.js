const container = document.querySelector("#container");

const secondImg = document.querySelector("#second-img");

const infoElements = document.querySelectorAll(".info");

const firstP = document.querySelector("p");

// firstP.innertext = "Jamboree sandwich at the Jambo-ree";

firstP.innerHTML = "<strong>Put your hands where I can see \'em, so they they look like 12pm</strong>" ;

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

const firstSection = document.querySelector("section");
const someP = document.createElement("p");
firstSection.appendChild(someP);


const newImage =  document.createElement("img");
newImage.src = "https://c8234d680a5ae618106c-6b3bd0826ac1075e2d1b52b94a2e0f63.ssl.cf1.rackcdn.com/20326_d2b8526a.jpg";
document.body.appendChild(newImage);

newSection = document.createElement("section");
newSection.id = "butterfly";
document.body.appendChild(newSection);

const sectClass = firstSection.classList;

firstSection.classList.add("wdi-gravy-train");
// sectClass.contains("wdi-gravy-train");
firstSection.classList.remove("wdi-gravy-train");










