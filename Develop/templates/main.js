const mainstring = `<!DOCTYPE html>
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
                for (let i = 0; i < employees.length; i++) {
                    if (employees[i].getRole() === "Manager") {
                        mainstring += `<div class="card employee-card">
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
                    } else if if (employees[i].getRole() === "Engineer") {
                       mainstring += `<div class="card employee-card">
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
                        mainstring += `<div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${employees[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employees[i].getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${employees[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
                                <li class="list-group-item">School: ${employees[i].getSchool();}</li>
                            </ul>
                        </div>
                    </div>`
                    }
                }
                // append this to mainstring
                mainstring+= `          </div> 

        </div>
    </div>
</body>

</html>`;
