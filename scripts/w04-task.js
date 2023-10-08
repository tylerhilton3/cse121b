/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Tyler Hilton",
    photo: 'images/Tyler-4.jpg',
    favoriteFoods: ["Mango", "Orange Chicken", "Mounatin Dew"],
    hobbies: ["Video Editing", "Music", "Mountain Biking"],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived = [{place: 'Livermore', length: '1 year'}];


/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").setAttribute("src", myProfile.photo);
document.getElementById("photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})

