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
function Pet(n,a,g,b,s,p,sp,o){
    this.name = n;
    this.age = a
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.package = p;
    this.species = sp;
    this.owner = o;
}


for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
}

function getE(id){
    return document.getElementById(id);
}
function deleteElement(petName){
    let index = salon.pets.findIndex(pet => pet.name === petName);
    if (index !== -1) {
        salon.pets.splice(index, 1);
    }
    displayPetCards();
    displayCount();
    displayNames();
}

    let name = getE('name');
    let age = getE('age');
    let gender = getE('gender');
    let breed = getE('breed');
    let package = getE('package');
    let services = getE('service');
    let species = getE('species');
    let owner = getE('owner');
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
    if (!owner.value) {
        alert("Please fill out the owner field.");
        return;
    }

    servicesSp = services.value.split(", ");
    let pet = new Pet(name.value,age.value,gender.value,breed.value,servicesSp,package.value,species.value,owner.value);
    salon.pets.push(pet);
    name.value = "";
    age.value = "";
    gender.value = "";
    breed.value = "";
    package.value = "";
    services.value = "";
    species.value = "";
    owner.value = "";

    displayPetCards();
    displayCount();
}
function init(){
    displayFooterInfo();
    let pet1 = new Pet("Scooby",60,"Male","Golden Retriever","Vaccine","Basic","Dog","Mauricio Chavez")
    let pet2 = new Pet("Scrappy",50,"Male","Bulldog","Shower","Standard","Dog","Kimberly")
    let pet3 = new Pet("Tweety bird",80,"Female","Canary","Nails cut, Shower","Premium","Bird","Abel")
    let pet4 = new Pet("Tweety bird",80,"Female","Canary","Nails cut","None","Bird","Abel")
    salon.pets.push(pet1,pet2,pet3,pet4); 
    displayNames();
    displayCount();
    displayPetCards();
}
window.onload = init;


