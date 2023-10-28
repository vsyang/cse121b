document.addEventListener('DOMContentLoaded', function () {
    /* W02-Task - Profile Home Page */

    /* Step 2 - Variables */
    let fullName = 'Vanessa Yang'; 
    const currentYear = new Date().getFullYear(); 
    let profilePicture = 'images/yourprofileimagename.png'; 
    
    /* Step 3 - Element Variables */
    const nameElement = document.getElementById('name'); 
    const foodElement = document.getElementById('food'); 
    const yearElement = document.querySelector('#year'); 
    let imageElement = document.getElementById('myImage'); 

    /* Step 4 - Adding Content */
    nameElement.innerHTML = `<strong>${fullName}</strong>`; 
    yearElement.textContent = currentYear; 
    imageElement.setAttribute('src', profilePicture); 
    imageElement.setAttribute('alt', `Profile image of ${fullName}`); 

    /* Step 5 - Arrays */
    let favFoods = ["Ice cream", "Korean BBQ", "Steak", "Jello", "Burger", "Pizza"]; 
    foodElement.textContent = favFoods.join(', '); 

    let singleFavoriteFood = 'Sushi'; 
    favFoods.push(singleFavoriteFood); 

    foodElement.innerHTML += `<br>${favFoods.join(', ')}`; 

    favFoods.shift(); 
    foodElement.innerHTML += `<br>${favFoods.join(', ')}`; 

    favFoods.pop(); 
    foodElement.innerHTML += `<br>${favFoods.join(', ')}`; 
});
