/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Vanessa",
    photo: "images/me1.jpeg",
    favoriteFoods: [
        "sushi", 
        "burgers", 
        "steak", 
        "ribs", 
        "shrimp", 
        "crab", 
        "korean barbeque"
    ],
    hobbies: [
        "driving", 
        "swimming",
        "reading",
        "gaming"
    ],
    placesLived : [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Thornton, CO",
        length: "30 years"
    },
    {
        place: "Westminister, CO",
        length: "1 year"
    },
    {
        place: "Aurora, CO",
        length: "7 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeInfo => {
    let dt = document.createElement('dt');
    dt.textContent = placeInfo.place;

    let dd = document.createElement('dd');
    dd.textContent = placeInfo.length;

    let d1 = document.querySelector('#places-lived');
    d1.appendChild(dt);
    d1.appendChild(dd);
})
