let arrAnswer = [];

let name = prompt("Please enter your name:");
let age = prompt("Please enter your age:");
let nickname = " ";

function ganderFunction() {

    let gander = "";
    while (gander != "male" && gander != "female") {
            
            gander = prompt("Please enter your Gander male/female:");
    }   
    return gander;
}

let gander = ganderFunction();

    if (gander === "male") 
        nickname = " Mr "; 
    else
        nickname = " Ms ";

    alert("Welcome" + nickname + name);
    
    let drinkType = prompt("Do you want drink hot or cold drink" + nickname + name);
    
    let drinkName = prompt("Please enter drink name" + nickname + name);
    
    alert("Your request is being prepared");

    arrAnswer.push(name);
    arrAnswer.push(gander);
    arrAnswer.push(drinkType);
    arrAnswer.push(drinkName);

    for (let index = 0; index < arrAnswer.length; index++) {
        console.log(arrAnswer[index]);
    }

    let container = document.getElementById("userInf");
    let div = document.createElement('div');
    let paragraph = document.createElement('p');

    paragraph.textContent = "Name : " + name;

    div.appendChild(paragraph);

    let ul = document.createElement('ul');

    
    let ligander = document.createElement('li');
    let liage = document.createElement('li');
    let lidrinkName = document.createElement('li');
    
    const ganderTextNode = document.createTextNode("Gander : " + gander);
    const ageTextNode = document.createTextNode("Age : " + age);
    const drinkNameTextNode = document.createTextNode("Drink : " + drinkType + " " + drinkName);


    ligander.appendChild(ganderTextNode);
    liage.appendChild(ageTextNode);
    lidrinkName.appendChild(drinkNameTextNode);

    ul.appendChild(ligander);
    ul.appendChild(liage);
    ul.appendChild(lidrinkName);
    
    div.appendChild(ul);

    container.appendChild(div);

