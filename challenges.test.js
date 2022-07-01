const {myArray, checker, multiply, createUser, numToString, register} = require('./challenges')

//challenge 1
it('should not be null', () => {
    expect(multiply(5, 3)).not.toBe(null);
})

//challenge 2
it('5*3 = 15 should be truthy', () => {
    expect(multiply(5, 3)).toBeTruthy();
})

//challenge 3
it('5*3 = 15 should not be falsy', () => {
    expect(multiply(5, 3)).not.toBeFalsy();
})

//challenge 4
test('create an object with 2 properties', () => {
    expect(createUser('Aidan', 'Graham')).toEqual({firstName: 'Aidan', lastName: 'Graham'})
})

//challenge 5
it('array with 6 or more characters', () => {
    expect(checker(myArray)).toEqual(['Iron Man', 'Ant-Man'])
})

//challenge 6
let num = 42
test('number to string', () => {
    expect(numToString(num)).toEqual('42')
})
test('fail if number', () => {
expect(numToString(num)).not.toEqual(42)
})

//challenge 7 
test('count the booleans', () => {
    let arr = [true, true, false, false]
    expect(register(arr)).toBe(2)
})
test('count the booleans', () => {
    let arr = [true, true, true, true]
    expect(register(arr)).toBe(4)
})