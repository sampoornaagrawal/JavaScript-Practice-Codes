// if divisible by 3 print fizz,if divisible by 5 print buzz
// if by both print fizzbuzz.

function fizzbuzz(x){
    if (typeof(x) !== 'number')return 'not a number';
    if (x%3 ===0 && x%5 ===0)return "fizzbuzz";
    else if (x%5 ===0)return "buzz";
    else if (x%3 ===0)return "fizz";
    else return x;
};
console.log(fizzbuzz(true));

