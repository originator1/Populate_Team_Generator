const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Cindy', '15', 'cindy@gmail.com');

test('check employee constructor adds parameters to new employees', () => {
    expect(engineer.name).toBe('Cindy');
    expect(engineer.id).toBe('15');
    expect(engineer.email).toBe('cindy@gmail.com');
});

test('check if correct name is equal to getName method returned value', () => {
    expect(engineer.getName()).toBe('Cindy')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(engineer.getId()).toBe('15')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(engineer.getEmail()).toBe('cindy@gmail.com')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(engineer.getRole()).toBe('Engineer')
});