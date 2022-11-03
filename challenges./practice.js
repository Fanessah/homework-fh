//Create a function that takes the age in years and returns the age in days.
function convertAge (ageInYears) {
    return ageInYears * 365
}



console.log(convertAge(9))

//Write a function that returns the string 
// "something" joined with a space " " and the given argument a.
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

function giveSomething (a) {
    return ("something sounds good " + a)
}

console.log(giveSomething("today"))

//You are counting points for a basketball game, given the amount of 2-pointers scored
//  and 3-pointers scored, find the final points for the team and return that value.

function calcPoints (a,b) {
    return (a*2)+(b*3) 
}

console.log(calcPoints(10,20))

//Write a function that takes an integer minutes and converts it to seconds.
function convertMinutes (a) {
    return ( a * 60 )
}

console.log(convertMinutes(5) + " seconds ")

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
//The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. 
// You have to implement a function that returns the total number of legs of all the animals.

