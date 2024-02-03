let salon={
    name:"The Fashion Pet",
    phone:"999-999-9999",
    address:{
        street:"Main St",
        number:"123-k",
        zip:"12345",
    },
    pets:[
        {
            name:"Scooby",
            age:60,
        },
        {
            name:"Scrappy",
            age:50,
        },
        {
            name:"Tweety bird",
            age:80,
        }
    ]
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);

for(let i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i].name);
}

function displayFooterInfo(){
    document.getElementById('info').innerHTML = `<p> Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
}

displayFooterInfo()