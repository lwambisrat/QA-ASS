const{add,subtract,multiply,divide}= require('./math');

test('add 2+3 to equal 5',() => {
    expect(add(2,3)).toBe(5);
});

test('subtract 10-3 to equal 7',() => {
    expect(subtract(10,3)).toBe(7);
});

test('multiply 10*3 to equal 30',() => {
    expect(multiply(10,3)).toBe(30);
});
test('divide 12/3 to equal 4',() => {
    expect(divide(12,3)).toBe(4);
});
