const Employee = require('../lib/Employee');

const employee = new Employee('Mike', '22', 'mike@gmail.com');

test('check employee constructor adds parameters to new employees', () => {
    expect(employee.name).toBe('Mike');
    expect(employee.id).toBe('22');
    expect(employee.email).toBe('mike@gmail.com');
});

test('check if correct name is equal to getName method returned value', () => {
    expect(employee.getName()).toBe('Mike')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(employee.getId()).toBe('22')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(employee.getEmail()).toBe('mike@gmail.com')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(employee.getRole()).toBe('Employee')
});

