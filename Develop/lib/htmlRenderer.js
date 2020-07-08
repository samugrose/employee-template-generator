const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const employees = [];
const done = false; //boolean flag to trigger end of recursion
let id = 1;
inquirer.prompt(
    [
        {
            type: "input",
            message: "What is the manager's name?",
            name: "mname"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "moffice"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "memail"
        }
    ]

).then(function(response) {
    const manager = new Manager(response.mname, id, response.memail, response.moffice );
    employees.push(manager);
    console.log(manager);
    id++; //makes it so that id is now 2
    recursivelyGen(done);
});

function recursivelyGen(done) {
    if (!done) {
        //generate employees and recurse
        inquirer.prompt(
            [
                {
                    type:"list",
                    message: "what type of license would you like?",
                    name: "emptype",
                    choices: [
                        "Intern",
                        "Engineer",
                        "Exit"
                    ]
                }
            ]
        ).then(function(response) {
            if (response.emptype === "Intern") {
            inquirer.prompt(
                [
                {
                    type: "input",
                    message: "What is the Intern's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the Intern's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the Intern's school?",
                    name: "school"
                }
            ]
            ).then(function(response) {
                let intern = new Intern(response.name, id, response.email, response.school);
                console.log(intern);
                employees.push(intern);
                id++;
                recursivelyGen(done);
            })
            } else if(response.emptype === "Engineer") {
            inquirer.prompt(
                [
                {
                    type: "input",
                    message: "What is the Engineer's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the Engineer's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the Engineer's github username?",
                    name: "github"
                }
            ]
            ).then(function(response) {
                let engineer = new Engineer(response.name, id, response.email, response.github);
                console.log(engineer);
                employees.push(engineer);
                id++;
                recursivelyGen(done);
            })
            } else { // leave
                recursivelyGen(!done);
            }
    })
    } else {
        console.log("printing list");
    }
}

