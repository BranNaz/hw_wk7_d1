//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]


function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        const lowerCaseString = dog_string.toLowerCase();

        const lowerCaseDogName = dog_names[i].toLowerCase();

        if (lowerCaseString.includes(lowerCaseDogName)) {
            console.log("Matched dog_name " + dog_names[i]);

        } else {
            console.log("No Matches");
         }

    }

}
console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}


console.log(replaceEvens(arr))
    

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// codewars!

function multiply(a, b){
    return a * b
}
const funcRes = multiply(2, 3)
console.log(funcRes)

// Make a simple function called greet that returns the most-famous "hello world!".
function greet(greetings){
    return greetings
}
const func = greet('hello world!')
console.log(func)