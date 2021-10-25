const Manager = require("./lib/Manager"); //importing manager
const Engineer = require("./lib/Engineer"); //importing engineer
const Intern = require("./lib/Intern"); //importing intern
const inquirer = require("inquirer"); // importing inqirer prompts
const fs = require("fs"); //ability to read/write to file

//empty array to push each new profile created by questions
const teamMembers = [];
//entire index of all questions for each member type
//use awaits inside async function to return a promise that we can then resolve later
const questionIndex = async () => {
  const answers = await inquirer.prompt([
    //main questions
    {
      type: "input",
      message: "Please enter your name:",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your ID number:",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter your email:",
      name: "email",
    },
    {
      type: "list",
      message: "Please enter job role:",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
  //manager questions and push to teamMember array
  if (answers.role === "Manager") {
    const managerQuestion = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter office number:",
        name: "OfficeNum",
      },
    ]);
    //create new manager subclass and add answers to class
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerQuestion.OfficeNum
    );
    //pushing to empty teamMembers array
    teamMembers.push(newManager);
  }
  //engineer question and push to teamMember array
  //if role they choose matches engineer prompt question
  else if (answers.role === "Engineer") {
    const githubInput = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter your Github username:",
        name: "github",
      },
    ]);

    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubInput.github
    );
    //pushing to empty teamMembers array
    teamMembers.push(newEngineer);

    // console.log(answers.name);
    // console.log(answers.id);
    // console.log(answers.email);
    // console.log(githubInput.github);
  }
  //intern question
  //constructing new Intern
  //push to teamMember array
  else if (answers.role === "Intern") {
    const internInput = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter the university you attended:",
        name: "university",
      },
    ]);
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internInput.university
    );
    teamMembers.push(newIntern);
  }
  // promptQuestions();
};

async function promptQuestions() {
  await questionIndex();
  const addNewMember = await inquirer.prompt([
    {
      type: "list",
      message: "Please enter what you would like to do now:",
      choices: ["Create new member", "Generate team"],
      name: "newMember",
    },
  ]);

  if (addNewMember.newMember === "Create new member") {
    console.log("choice 1");
    return promptQuestions();
  } else if (addNewMember.newMember === "Generate team") {
    console.log("choice 2");
    return generateTeam();
  }
}

const teamCardArr = [];

const teamCard = (team) => {
  team.forEach((teamMember) => {
    let role = teamMember.getRole();
    switch (role) {
      case "Manager":
        const managerCard = `
            <div class="card" style="background-color: #8C4E03;">
                <div class="card-header" style="border-color:yellow">Manager
                    <i class="fas fa-coffee"></i>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${teamMember.getName()}</h5>
                    <p class="card-text">${teamMember.getId()}</p>
                    <p>Email: ${teamMember.getEmail()}</p>
                    <p>Office Number: ${teamMember.getOfficeNumber()}</p>
                </div>
            </div>
                `;
        teamCardArr.push(managerCard);

        break;

      case "Engineer":
        const engineerCard = `
                <div class="card" style="background-color: #8C4E03;">
                    <div class="card-header" style="border-color:yellow">Engineer
                        <i class="fas fa-glasses"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${teamMember.getName()}</h5>
                        <p class="card-text">${teamMember.getId()}</p>
                        <p>Email: ${teamMember.getEmail()}</p>
                        <p>Github: ${teamMember.getGitHub()}</p>
                    </div>
                </div>
                    `;
        teamCardArr.push(engineerCard);

        break;

      case "Intern":
        const internCard = `
                    <div class="card" style="background-color: #8C4E03;">
                        <div class="card-header" style="border-color:yellow">Intern
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${teamMember.getName()}</h5>
                            <p class="card-text">${teamMember.getId()}</p>
                            <p>Email: ${teamMember.getEmail()}</p>
                            <p>School: ${teamMember.getSchool()}</p>
                        </div>
                    </div>
                        `;
        teamCardArr.push(internCard);

        break;
      default:
        console.log("Nothing matched");
    }
  });
};

promptQuestions();

//function repeatedly runs over and over with same teamMember data
//--

// const promptPop = async () => {
//     const logArray = await questionIndex();
//     logArray;
//     console.log(teamMembers);
// };
// promptPop();

// // TODO: Create a function to write README file
// function writeToFile(filename, data) {
//     fs.writeFile(filename, data, function(err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Success!');
//     })

// };

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then(function(data) {
//        writeToFile('indexT.html', generateMarkdown(data));
//     })

// };

// Function call to initialize app
// init();

//^^asking questions but returning undefined ater entering questions for any role

//need to write(fs) to index.html file to generate page

//need to add question to add teammate or finish and create team
//question asking create new teammember or finish team in inquiry prompt??
//if choose new teammember, send back to list of teammember options

//need to write test files still
