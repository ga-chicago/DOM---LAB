// DOM MANIPULATIOn
 // DOM - Document Object Model

 // Creating elements

const div = document.createElement('div');

//  putting some text into the div
div.innerText = 'This is text';
div.style.backgroundColor = '#ffcaba';

// GRABBING AN ELEMENT
// document.getElementById
// getElementByClassName
// getElementsByTagName
const body = document.querySelector('body');


// puts the element on the page
body.appendChild(div);

// Create a Ul tag
const ul = document.createElement('ul');
// Create an Li tag with some values
const li = document.createElement('li');
const li2 = document.createElement('li');
// append them to the page
li.innerText = 'this li one';
li2.innerText = 'this li two';

li.className = 'taco';
li.id = 'burrito';

li.style.backgroundColor = 'yellow';
// how do attach the li's to the ul
ul.appendChild(li);
ul.appendChild(li2);

body.appendChild(ul);

// returns an array of all the lis
const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++){
  listItems[i].style.backgroundColor = '#abffff';
  listItems[i].className = 'taco';
}

// Create a function that will accept an element, a backgroundColor, height,
/// and a width
// This function will append the the given element to the body
const createElement = (element, color, height, width) => {
  const createdElement        =  document.createElement(element);
  createdElement.style.backgroundColor  = color;
  createdElement.style.height = height;
  createdElement.style.width   = width;

  body.appendChild(createdElement);
}


// call the function two times with different inputs
createElement('div', 'blue', '90px', '50px');















