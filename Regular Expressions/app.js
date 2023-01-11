// EVALUATION FUNCTION
// let re;
// re = /hello/;
// re = /hello/i; //i = case insensitive
//re = /hello/g; // Global serach - If u have a paragraph it is going to search for the entire instances of hello not just then first one

// console.log(re);
// console.log(re.source);

// exec() - Return results in an array or null if there is a match
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false if there is a match
// const result = re.test('Hello');
// console.log(result)

// match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result)

// search() - Returns the index of the first match and if not found Returns -1
// const str = ' Brad Hello There';
// const result = str.search(re)
// console.log(result);

// replace() - Return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);





// METACHARACTER SYMBOLS
let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; //Must start with h
re = /World$/i; //Must end with World
re = /^hello$/i; //Must begin and end with hello
re = /^h.llo$/i; //Matches any ONE character
re = /h*llo/i;  //Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /^[GF]ray/i; // Has to start with a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any case letter
re = /[0-9]ray/; //Match any digit
re = /[0-9][0-9]ray/; //Match any double digit

// Braces {} - Quantifiers
re = /Hel{2}o/i //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i //Must occur exactly {m} amount of times
re = /Hel{2,}o/i //Must occur atleast {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; //Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match any whitespace char
re = /\S/; // Match any Non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if not followed by y

// String to match
const str = 'shdhhdghdhdhx';
// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`)
    }
}

reTest(re, str);

