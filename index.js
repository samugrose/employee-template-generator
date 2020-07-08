const employee = require("./employee");
const manager = require("./manager");
const engineer = require("./engineer");
const intern = require("./intern");

const fs = require("fs");
const inquirer = require("inquirer");

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
    console.log(response)
});

