const fizzBuzz=require("./fizzbuzz");
test("",()=>{
    expect(fizzBuzz(25)).toBe('fizzBuzz');
});
test("",()=>{
    expect(fizzBuzz(30)).toBe('fizz');
});
test("",()=>{
    expect(fizzBuzz(45)).toBe('Buzz');
});