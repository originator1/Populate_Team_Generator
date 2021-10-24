const Employee = require('../lib/Employee');

const employee = new Employee('Jack', '14', 'jack@gmail.com');

test('check employee constructor adds parameters to new employees', () => {
    expect(employee.name).toBe('Jack');
    expect(employee.id).toBe('14');
    expect(employee.email).toBe('jack@gmail.com');
});

test('check if correct name is equal to getName method returned value', () => {
    expect(employee.getName()).toBe('Jack')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(employee.getId()).toBe('14')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(employee.getEmail()).toBe('jack@gmail.com')
});

test('check if correct id is equal to getId method returned value', () => {
    expect(employee.getRole()).toBe('Employee')
});