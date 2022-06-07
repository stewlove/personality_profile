/*
 * Stewart Lovell
 * Personality Profile Lab
 * 1/21/2022
 */

//Ask the user what they ate for breakfast, store the result in a variable
let breakfastChoice = prompt("What did you eat for breakfast?");

//Ask the user if they exercise daily, store the result in a variable
let exerciseCheck = confirm(`Do you exercise daily? (Click OK for yes, cancel for no)`);

//Create if statements that produce output based on user input, create a placeholder variable for the output
let personality = "";
if(exerciseCheck && breakfastChoice === "cereal")
{
    personality = "studious";
}
else if(exerciseCheck && breakfastChoice === "pancakes")
{
    personality = "watchful";
}
else if(exerciseCheck && breakfastChoice === "eggs")
{
    personality = "silly";
}
else if(!exerciseCheck && breakfastChoice === "cereal")
{
    personality = "melodramatic";
}
else if(!exerciseCheck && breakfastChoice === "pancakes")
{
    personality = "unwise";
}
else if(!exerciseCheck && breakfastChoice === "eggs")
{
    personality = "brave";
}
else if(breakfastChoice === "fruit")
{
    if(exerciseCheck || !exerciseCheck)
    {
        personality = "wise";
    }
}
else
{
    personality = "unknown, no personality profile could be created based off of your input";
}

alert("You are " + personality);