const Name = prompt("Please enter your name:");
const Gander = prompt("Please enter your Gander male/female:");
let Nickname = " ";

    if (Gander === "male") 
        Nickname = " Mr "; 
    else if (Gander === "female") 
        Nickname = " Ms ";

    alert("Welcome" + Nickname + Name);
    
    const DrinkChoices = prompt("Do you want drink hot or cold drink" + Nickname + Name);
    
    const DrinkName = prompt("Please enter drink name" + Nickname + Name);
    
    alert("Your request is being prepared");
    
    console.log("User Name : " + Name + ", Drink Name : " + DrinkName)