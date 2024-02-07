console.log("Register.js");

let salon = {
    name: "The Fashion Pet",
    phone: "999-999-9999",
    address: {
        street: "Main St",
        number: "123-k",
        zip: "12345",
    },
    pets: []
}
function Pet(n,a,g,b,s,p,sp){
    this.name = n;
    this.age = a
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.package = p;
    this.species = sp;
    console.log(this.service);
}


for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
}

function displayFooterInfo() {
    document.getElementById('info').innerText = `Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.number} ${salon.address.zip}`;
}
function displayCount(){
    let count = salon.pets.length;
    document.getElementById('counter-container').innerHTML = `Total Pets: <span class="highlighting-green">${count}<span/>`;

}

function displayNames(){
    let pets = salon.pets;
    let text = "<table><tr><th>Name</th><th>Age</th><th>Gender</th><th class ='none-display'>Breed</th><th class ='none-display'>Species</th><th id='counter-container'></th></tr>";
    for (let i = 0; i < pets.length; i++) {
        text += `<tr><td>${pets[i].name}</td><td>${pets[i].age}</td><td>${pets[i].gender}</td><td class ='none-display'>${pets[i].breed}</td><td class ='none-display'>${pets[i].species}</td><td><button class="delete-btn" onClick="deleteElement('${pets[i].name}')">Delete</button></td></tr>`;
    }
    text += "</table>";
    document.getElementById('pets-container').innerHTML = text;
}


function deleteElement(petName){
    let index = salon.pets.findIndex(pet => pet.name === petName);
    if (index !== -1) {
        salon.pets.splice(index, 1);
    }
    displayNames();
    displayCount();
}

    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');
    let breed = document.getElementById('breed');
    let package = document.getElementById('package');
    let services = document.getElementById('service');
    let species = document.getElementById('species');
function register(event){
    event.preventDefault();
    if (!name.value) {
        alert("Please fill out the name field.");
        return;
    }
    if (!age.value) {
        alert("Please fill out the age field.");
        return;
    }
    if (!gender.value) {
        alert("Please select a gender.");
        return;
    }
    if (!breed.value) {
        alert("Please fill out the breed field.");
        return;
    }
    if (!services.value) {
        alert("Please fill out the services field.");
        return;
    }
    if (!package.value) {
        alert("Please select a package.");
        return;
    }
    if (!species.value) {
        alert("Please fill out the species field.");
        return;
    }

    servicesSp = services.value.split(", ");
    let pet = new Pet(name.value,age.value,gender.value,breed.value,servicesSp,package.value,species.value);
    salon.pets.push(pet);
    name.value = "";
    age.value = "";
    gender.value = "";
    breed.value = "";
    package.value = "";
    services.value = "";
    species.value = "";

    displayNames();
    displayCount();
}
function init(){
    let pet1 = new Pet("Scooby",60,"Male","Golden Retriever","Vaccine","Basic","Dog")
    let pet2 = new Pet("Scrappy",50,"Male","Bulldog","Shower","Standard","Dog")
    let pet3 = new Pet("Tweety bird",80,"Female","Canary","Nails cut","Premium","Bird")
    salon.pets.push(pet1,pet2,pet3); 
    displayNames();
    displayCount();
    displayFooterInfo()
}
window.onload = init;


