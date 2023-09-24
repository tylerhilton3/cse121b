/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Tyler Kent Hilton";
let currentYear = "2023";
let profilePicture = "images/Tyler-4.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[alt="Placeholder Image"]');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let foodarr = ['Beef Jerky', 'Orange Chicken', 'Bean Burrito', 'Chips n Dip'];
let fav = 'Mango';
foodElement.innerHTML = foodarr.toString();
foodarr.push(fav);
foodElement.innerHTML += `<br>${foodarr}`;
foodarr.splice(0,1);
foodElement.innerHTML += `<br>${foodarr}`;
foodarr.pop();
foodElement.innerHTML += `<br>${foodarr}`;