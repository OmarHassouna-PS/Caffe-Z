const Name = prompt("Please enter your name:");
const Gander = prompt("Please enter your Gander male/female:");
let Nickname = " ";

    if (Gander === "male") {
        alert("Welcome Mr " + Name);
        Nickname = " Mr ";
        
    }
    else if (Gander === "female") {
        alert("Welcome Ms " + Name);
        Nickname = " Ms ";
    }
    else {
        alert("Welcome " + Name);
    }

    
    let DrinkChoices = prompt("Do you want drink hot or cold drink" + Nickname + Name);
    
    let DrinkName = prompt("Please enter drink name" + Nickname + Name);
    
    alert("Your request is being prepared");
    
    console.log("User Name : " + Name + ", Drink Name : " + DrinkName)
    
    /* 
        Problem domain :
        You are going to build a web page for a caffe, where the user can enter their order, display it and check the status for each one 


        Requirements : 
        - create index.html, style.css, and app.js files and link them together 
        - build the home page by adding any elements you want and with a proper style 
        - using Javascript : 

            Ask the user to enter his/her name as input.
            Ask the user to enter his/her gender as input. The answer should be either (male or female).
            Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title
            Ask the user if he/she wants to drink a hot or cold drink 
            Ask the user to write the name of the drink he/she wants 
            Alert to the user a message that their drink is getting prepared 
            Print on the console a statement that shows the name of the user with the drink he/she ordered 
    */
