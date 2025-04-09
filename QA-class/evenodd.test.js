const isEven = require('./evenodd');

test('even',()=>{
    expect(isEven(9)).toBe(false);
});