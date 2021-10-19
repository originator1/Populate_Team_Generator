const Manager = require('./lib/Manager'); //importing manager
const Engineer = require('./lib/Engineer'); //importing engineer
const Intern = require('./lib/Intern'); //importing intern
const inquirer = require('inquirer');// importing inqirer prompts
const fs = require('fs'); //ability to read/write to file



//empty array to push each new profile created by questions
const teamMembers = [];
//entire index of all questions for each member type
//use awaits inside async function to return a promise that we can then resolve later
const questionIndex = async () => {
    const answers = await inquirer
    .prompt([
        //main questions
        {
            type: 'input',
            message: 'Please enter your name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter your ID number:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter your email:',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Please enter job role:',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        
    ]);
//manager questions and push to teamMember array
    if (answers.role === 'Manager') {
        const managerQuestion = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter office number:',
                name: 'OfficeNum'
            },
            
        ])
        //create new manager subclass and add answers to class
        const newManager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            managerQuestion.officeNum
        );
        //pushing to empty teamMembers array
        teamMembers.push(newManager);
    };
    //engineer question and push to teamMember array
    //if role they choose matches engineer prompt question
    if (answers.role === 'Engineer') {
        const githubInput = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter your Github username:',
                name: 'github',
            }
        ])
        
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubInput.github,
        );
        //pushing to empty teamMembers array
        teamMembers.push(newEngineer);
        
    };
    //intern question
    //constructing new Intern
    //push to teamMember array

    if (answers.role === 'Intern') {
        const internInput = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the university you attended:',
                name: 'university',
            }
        ]);
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internInput.university
        );
        teamMembers.push(newIntern);

    };

};

questionIndex().then(console.log)
//^^asking questions but returning undefined ater entering questions for any role

//need to write(fs) to index.html file to generate page
//need to add question to add teammate or finish and create team
//question asking create new teammember or finish team in inquiry prompt??
//if choose new teammember, send back to list of teammember options


//need to write test files still 