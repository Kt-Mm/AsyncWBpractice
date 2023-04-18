// test console
// var greet = "hello world";
// console.log(greet);

// whiteboard practice

// 8.) Remove the spaces found in a string 
var cohortYear = " 2019  2020  2021  2022";
console.log(cohortYear);
// to remove spaces in string
console.log(cohortYear.trim());


// 9.) Return a Boolean if a number is divisble by 10
function BooleanNum(num){
    return num % 10 === 0 ? true : false;
};
// here we enter a number inside the () connected with "booleanNum" to see if it is disvisble by 10
console.log(BooleanNum(30));

// 10.) Return the number of vowels in a string

// defining our function
function GetvowelNumbers(string){
    // giving our var a value (set this to 0) that will keep track of vowels in string
    let vowelCount = 0;
    // naming the vowels that do not change (creating an array)
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    // returning what corresponds to code
    // char= returns character that corresponds to a unicode value
    // for-let-char-of string determines what vowels are in strings
    for (let char of string){
//  now we check if each character is a value using includes() method
// AKA 'IF statement"
        if (vowel.includes(char)){
// If a character is a vowel then we increase our vowelCount variable by:
            vowelCount++;
        }
    }
// create our return function for our vowelCount variable
return vowelCount
}

// output
console.log(GetvowelNumbers('I am coding'))
