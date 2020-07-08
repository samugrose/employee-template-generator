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
    console.log("current employee array: ");
    console.log(employees);
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
        //then generate the html document with the added info
        // make an html doc that looks like the spec sheet, add cards in a container with info, each template imported from the various files.
        let mainstring = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">`
                 //run for loop here, adding cards as needed from strings imported

                var counter = 0;
                for (let i = 0; i < employees.length; i++) {
                    if (counter === 3) {
                        counter = 0;
                        //close off row and column, start new one
                        mainstring += `</div>
                        </div>
                        <div class="row">
                        <div class="team-area col-12 d-flex justify-content-center">`
                    }
                    
                    if (employees[i].getRole() === "Manager") {
                        mainstring += `<div class="card employee-card col-md-4">
                        <div class="card-header">
                            <h2 class="card-title">${employees[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employees[i].getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${employees[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                                <li class="list-group-item">Office number: ${employees[i].getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>`


                    } else if  (employees[i].getRole() === "Engineer") {

                       mainstring += `<div class="card employee-card col-md-4">
    <div class="card-header">
        <h2 class="card-title">${employees[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${employees[i].getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employees[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${employees[i].getGithub()}" target="_blank" rel="noopener noreferrer">${employees[i].getGithub()}</a></li>
        </ul>
    </div>
</div>`
                    } else if (employees[i].getRole() === "Intern") {

                        mainstring += `<div class="card employee-card col-md-4">
                        <div class="card-header">
                            <h2 class="card-title">${employees[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employees[i].getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${employees[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                                <li class="list-group-item">School: ${employees[i].getSchool()}</li>
                            </ul>
                        </div>
                    </div>`
                    }
                    counter++;
                }

                // append this to mainstring
                mainstring+= `          </div> 

        </div>
    </div>
</body>

</html>`;

        fs.writeFile("index.html", mainstring, function(err){
            if(err){
                throw err;
            }console.log("new html written");
        })
    }
}

