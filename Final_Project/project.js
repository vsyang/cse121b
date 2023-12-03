const url = "https://api.thedogapi.com/v1/breeds";
const api_key = "live_p0C4hMKTiH7cxBI4F1Ma9MPzp4UHS2C1IBMpMz0zQB9pclPrSG3vnxvuoy4KOZMp"

/* Declare and initialize global variables */
const dogsElement = document.querySelector("#dogs");
let dogList = [];
/* async displayDogs Function */
const displayDogs = async(dogs) => {
    dogs.forEach((dog) => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = dog.name;

        console.log(dog) //so i can see what I have to play with       
        const img = document.createElement("img");
        img.src = dog.image.url;
        img.alt = dog.name;

        const temperament = document.createElement("h5");
        temperament.textContent = dog.temperament;
        
        const weight = document.createElement("h5");
        let dogWeight = dog.weight.imperial;
        weight.innerHTML += `<br>Average weight: ${dogWeight} lbs`;

        const height = document.createElement("h5");
        let dogHeight = dog.height.imperial;
        height.innerHTML += `Average height: ${dogHeight}"`

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(temperament);
        article.appendChild(weight);
        article.appendChild(height);
        dogsElement.appendChild(article);
    });
};

/* async getDogs Function using fetch()*/
const getDogs = async() => {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
        headers: {
            'x-api-key': api_key
        }
    });
    const data = await response.json();
    dogList = data;
    displayDogs(dogList);
}

/* reset Function */
const reset = () => {
    dogsElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (dogs) => {
    reset();
    const filter = document.querySelector("#sortBy").value;

    const getFirstLetter = (word) => word.charAt(0).toLowerCase();

    switch (filter) {
        case "a-c":
            displayDogs(dogs.filter(dog => ['a', 'b', 'c'].includes(getFirstLetter(dog.name))));
            break;
        case "d-f":
            displayDogs(dogs.filter(dog => ['d', 'e', 'f'].includes(getFirstLetter(dog.name))));
            break;
        case "g-i":
            displayDogs(dogs.filter(dog => ['g', 'h', 'i'].includes(getFirstLetter(dog.name))));
            break;
        case "j-l":
            displayDogs(dogs.filter(dog => ['j', 'k', 'l'].includes(getFirstLetter(dog.name))));
            break;
        case "m-o":
            displayDogs(dogs.filter(dog => ['m', 'n', 'o'].includes(getFirstLetter(dog.name))));
            break;
        case "p-r":
            displayDogs(dogs.filter(dog => ['p', 'q', 'r'].includes(getFirstLetter(dog.name))));
            break;        
        case "s-u":
            displayDogs(dogs.filter(dog => ['s', 't', 'u'].includes(getFirstLetter(dog.name))));
            break;
        case "v-z":
            displayDogs(dogs.filter(dog => ['v', 'w', 'x', 'y', 'z'].includes(getFirstLetter(dog.name))));
            break;
        default:
            displayDogs(dogs);
            break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(dogList);
});

getDogs();

