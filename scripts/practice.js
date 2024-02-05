var globalVariable = "I'm in global scope";

function myFunction() {
    //This function can access the global variable
    console.log(globalVariable);
}

myFunction(); //Output: I'm in global scope

function myFunction2() {
    var localVariable = "I'm in local scope";
    console.log(localVariable);
    if (true) {
        //Conditional statements(If, else, switch) and loops(for, while) 
        var blockVariable = "I'm in block scope";
        console.log(blockVariable);
    }
    //accessing blockVariable here would result in an error
}

myFunction2();
//Accessing localVariables here would result in an error

function planeTicket(destination,price) {
    console.log('Traveling to.... ' + destination);
    return price*1.11;
}
function calculateProfits(){
    var price1=planeTicket('Hawaii',100); //Output: Ticket to.... Hawaii
    var price2=planeTicket('Japan',200); //Output: Ticket to.... Japan
    var price3=planeTicket('canada',300); //Output: Ticket to.... canada
    console.log(price1+price2+price3);
}

calculateProfits(); 

