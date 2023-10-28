/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Vanessa Yang";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me1.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.getElementById('myImage'); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture); 
imageElement.setAttribute('alt', `Profile image of ${fullName}`); 

/* Step 5 - Array */
let favFoods = ["Ice cream", "Korean bbq", "Steak", "Jello", "Burger", "Pizza"];
foodElement.textContent = favFoods.join(', ');

let singleFavoriteFood = "Chocolate covered almonds";
favFoods.push(singleFavoriteFood);

foodElement.innerHTML += `<br>${singleFavoriteFood}`;

favFoods.shift();//remove first
foodElement.textContent = favFoods.join(', ');

favFoods.pop();//remove last
foodElement.textContent = favFoods.join(', ');
