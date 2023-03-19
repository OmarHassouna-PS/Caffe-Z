let arrAnswer = [];

let name = prompt("Please enter your name:");
let nickname = " ";
let gander = "";

    while (gander != "male" && gander != "female") {
        
        gander = prompt("Please enter your Gander male/female:");
    }    

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