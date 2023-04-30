//Coding Steps:
//The answer to all questions must be printed to your Browser’s console -- using console.log():
// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3,9,23,64,2,8,28,93] // set variable 'ages' to the set of numbers.
console.log(ages); // output the array.

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

let result = ages[ages.length - 1] - ages[0]; // ages[ages.length - 1] takes the last number in the array; ages[0] takes the first number in the array.
console.log(result); // output 90 because 93-3=90.

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(52); // pushes the number 52 to the end of the array.
result = ages[ages.length - 1] - ages[0] // ages[ages.length - 1] takes the last number in the array; ages[0] takes the first number in the array.
console.log(result); // output 49 because 52-3=49


// 1c.	Use a loop to iterate through the array and calculate the average age. 
let sum = 0; // created a new variable sum to begin calculations.
    for(let i = 0; i <ages.length; i++){ //created a loop to display the numbers
        sum += ages[i]; // then add up the values in the array.
    }
let average = sum / ages.length; //create the average equal to the sum (282) divided by the amount of values in the array(9)
console.log(average); // output the average of the array 282 / 9 = 31.333333



// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob']; //created an array with the given names.

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalLetters = 0; // created a sum of the total letters.
for (let i = 0; i <names.length; i++){ // created a loop for to run the length of each name
    totalLetters += names[i].length; // add up the sum of each name.length
}
let averageLetters = totalLetters / names.length; //create a new variable averageLetter to equal the total amount of letters divided by the number of values in the array.
console.log(averageLetters); // output 3.8333333 because totalLetters(23) divided by names.length(6) equals 3.83333

// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let allNames = '';
for( let i = 0; i < names.length; i++){
    allNames += names[i] + ' ';
}
console.log(allNames.trim())

// 3.	How do you access the last element of any array?

// To access the last element of an array you enter nameOfTheArray.length - 1. This pushes out the last variable in the array. The - 1 is because the first element in the array is 0 and the .length tells the amount of elements in the array.

// 4.	How do you access the first element of any array?

// To acces the first element in any array is by nameOfTheArray[0]. The first element is always 0.

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = []; //I created an empty array to find the lengths of each name in the names array.
for(let i = 0; i < names.length; i++){ // Created a loop that iterates over the array names.
    nameLengths.push(names[i].length) // Within the loop, I used the push() method to run the lengths of the current names to the nameLengths array.
}

console.log(nameLengths); // output namesLengths; which gave [3,5,3,5,4,3] the length of each name in the above array.

// For example:

// let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
// let nameLengths = [5, 3, 4]; 			//create this new array


// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfArray = 0 // created a variable sumOfArray and set it to 0 to keep track of the sum of elements in the array.
for(let i = 0; i < nameLengths.length; i++){ // created a loop that iterates over the elements in the nameLengths array.
    sumOfArray += nameLengths[i]; // Within the loop, we added up the lengths of each element of the array
}
console.log(sumOfArray); // Output the sumOfArray through console.log 3 + 5 + 3 + 5 + 4 + 3 = 23

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function functionOne(word,n){ //created a function called functionOne(word,n) for the arguments
    let result = ""; // next step was to create an empty string called result
    for(let i = 0; i < n; i++){ // create a loop to iterate n times and repeat the word that many times.
        result += word;
    }
    return result; // return the result
}
console.log(functionOne('SunnyDay ',8)); // Output the string 'SunnyDay' 8 times by plugging them into the arguments.

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){ // Created a function named fullName and then placed firstName, lastName as its arguments.
    return firstName + " " + lastName; // return the firstName plus a space and then the lastName.

}
console.log(fullName('LaMarcus', 'Williams')); // Output the function with my name in it.


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function sumGreaterThan100(array){ // created a function call sumGreaterThan100 with a single parameter
    let sum = 0 // created a variable 'sum' to add up all of the numbers in the array
    for(let i = 0; i < array.length; i++){ // created a for loop that starts at 0 and goes up to the array.length.
    sum += array[i]; // add up the sum of the array
    }
    return sum > 100; // return true if sum is greater than 100
}
console.log(sumGreaterThan100([150])) // returned true because 150 > 100

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(array){ // created a function with a single parameter
    let sum = 0 // created a variable 'sum' to add up all of the numbers in the array.
    for(let i = 0; i < array.length; i++){ // created a for loop that starts from 0 and goes to the end of the array.
        sum += array[i]; // each number on the array is added up to the sum variable.
    }
    return sum / array.length; //return the sum divided by the array length which is 45 / 9 = 9
}

console.log(calculateAverage([3, 6, 9, 12, 15]));


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAvg(array1, array2){ // created a function named compareAvg with 2 arguments. 
    let avg1 = array1 / array1.length; // declared a new variable avg1 set it equal to array1 divided by array1's length.
    let avg2 = array2 / array2.length; // declared a new variable avg2 set it equal to array2 divided by array2's length.
    return avg1 > avg2; // return true is avg1 is greater than avg2. 
}
let num1 = [1,2,3]; // created an array in replace of array1
let num2 = [4,5,6]; // created an array in replace of array2
console.log(compareAvg(num1,num2)); // outputed the arrays into console.log which returned false due to the avg. of num1 being less than num2's avg.

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){ // created a function with two arguments.
    if (isHotOutside && moneyInPocket > 10.50) { // created an if statement tying the isHotOutside and moneyInPocket is greater that 10.50
        return true; // if both are true
    } else { // else statement saying if both aren't true then it will return false.
        return false
    }
}
console.log(willBuyDrink(true, 15)); // input (true,15) resulting in the console reading true because both came back true.

// 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

function didHeWin(pts,reb,ast){ // created a function called didHeWin with three parameters pts, reb, ast
    if (pts >= 30){ // created an if statement that if the player scores of 30 pts he wins
        return 'win';
    } else if (pts >= 20 && (reb >=10 || ast >= 10)){ // created an else if statement if he scores over 20 pts and 10 or more reb or 10 or more ast he also wins.
        return 'win';
    } else if (pts >= 10 && reb >= 10 && ast >= 10){ // created an else if statement if he scores over 10 pts and 10 or more reb and 10 or more ast he also wins.
        return 'win';
    } else { // if none of the state condidtions are met he loses.
        return 'loss';
    }
}

let pts = 25; // declared the variables pts, reb, ast
let reb = 4;
let ast = 4;

let gameResult = didHeWin(pts,reb,ast) // created a variable gameResult set it to equal the didHeWin function

if (gameResult === 'win'){ // if the game result is a win I want the output to shoot out the string.
    console.log(`Player won the game with ${pts} points, ${reb} rebounds, and ${ast} assists!`); // ${} to perform a string interpolation which makes the string more dynamic.
} else { // if the game result is a loss I want the output to shoot out this string.
    console.log(`Player lost the game with ${pts} points, ${reb} rebounds, and ${ast} assists!`);
}

console.log(didHeWin(25,4,4)); // in put the following numbers which results in a loss and the second string appearing.
