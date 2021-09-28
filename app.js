// accessing html elements
const rollButton = document.getElementById("roll-button");
const rollResult = document.getElementById("roll-result");
const numberOfRolls = document.getElementById("number-of-rolls");
const diceType = document.getElementById("dice-type");

const rollDice = (min, max, rolls) => {
    // change the number of sides based on the user's input
        switch(diceType.value) {
        case "d4":
            max = 4;
            break;
        case "d6":
            max = 6;
            break;
        case "d8":
            max = 8;
            break;
        case "d10":
            max = 10;
            break;
        case "d12":
            max = 12;
            break;
        case "d20":
            max = 20;
            break;        
    }




    // minimum should always be 1
    min = 1;
    
    rolls = numberOfRolls.value;
    let result = 0;
    // roll multiple dice based on the user's input
    for (let i = 0; i < rolls; i++) {
       result += Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // return a random number based on user selections
    rollResult.innerHTML = result;
}

// show the result of the roll
rollButton.onclick = rollDice;