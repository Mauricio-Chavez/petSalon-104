console.log("Register.js");

let salon = {
    name: "The Fashion Pet",
    phone: "999-999-9999",
    address: {
        street: "Main St",
        number: "123-k",
        zip: "12345",
    },
    pets: [
        {
            name: "Scooby",
            age: 60,
            gender: "male",
            services: ["Tooth Brushing"],
            package: "Basic",
            breed:"Beagle",
        },
        {
            name: "Scrappy",
            age: 50,
            gender: "male",
            services: ["Nail Cutting", "Pet haircut"],
            package: null,
            breed: "Bulldog",
        },
        {
            name: "Tweety bird",
            age: 80,
            gender: "female",
            services: ["Nail Cutting", "Pet haircut"],
            package: null,
            breed: "Siberian Husky",
        }
    ]
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);

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
    let text = "<table><tr><th>Name</th><th>Age</th><th>Gender</th><th id='counter-container'></th></tr>";
    for (let i = 0; i < pets.length; i++) {
        text += `<tr><td>${pets[i].name}</td><td>${pets[i].age}</td><td>${pets[i].gender}</td><td><button class="delete-btn" onClick="deleteElement('${pets[i].name}')">Delete</button></td></tr>`;
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

displayNames();
displayCount()
displayFooterInfo()

