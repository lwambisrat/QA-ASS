const fizzBuzz=require("./fizzbuzz");
test("",()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});
test("",()=>{
    expect(fizzBuzz(27)).toBe('Fizz');
});
test("",()=>{
    expect(fizzBuzz(20)).toBe('Buzz');
});