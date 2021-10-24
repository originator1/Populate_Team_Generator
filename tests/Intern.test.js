const Intern = require('../lib/Intern');

const intern = new Intern('Sally', '29', 'sally@gmail.com');

test('check employee constructor adds parameters to new employees', () => {
    expect(intern.name).toBe('Sally');
    expect(intern.id).toBe('29');
    expect(intern.email).toBe('sally@gmail.com');
});

test('check if correct name is equal to getName method returned value', () => {
    expect(intern.getName()).toBe('Sally')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(intern.getId()).toBe('29')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(intern.getEmail()).toBe('sally@gmail.com')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(intern.getRole()).toBe('Intern')
});