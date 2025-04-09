const isValidEmail=require("./validateemail");
test("",()=>{
    expect(isValidEmail()).toBe(false);
});