const employee = require("./Employee");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");

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
    const manager = new manager(mname, id, memail, moffice );
    employees.push(manager);
    console.log(manager);
    id++; //makes it so that id is now 2
    //recursivelyGen(done);
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
                        "Exit";
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

            })
            } else if(response.emptype === "Engineer") {
            inquirer.prompt(
                [
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
                
            })
            } else { // leave

            }
    })
    } else {
        console.log("printing list");
    }
}

