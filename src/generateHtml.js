const Employee = require("../lib/Employee");

// filter/run getRole(team)
// // if manager, create managerArr.
// // if engineer, create engineerArr.
// // if intern, create internArr.

// make bootstrap card for each employee.
//create card, put in html string

const renderCards = (team) => {
  var cardArr = [];

  for (var i = 0; i < team.length; i++) {
    const employee = team[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = renderManagerCard(employee);
      cardArr.push(managerCard);
      // console.log(cardArr);
    } else if (role === "Engineer") {
      const engineerCard = renderEngineerCard(employee);
      cardArr.push(engineerCard);
    } else if (role === "Intern") {
      const internCard = renderInternCard(employee);
      cardArr.push(internCard);
    }
  }
  return cardArr.join("");
};

//create manager card
const renderManagerCard = (managerInfo) => {
  if (!managerInfo) {
    return "";
  }
  return `
    <section class="mgr-info text-white .col-md-4 .col-md-offset-4">
      <div class="card mgr-card border-danger text-center" style="width: 18rem"> 
        <ul class="list-group list-group-flush">

          <li class="list-group-item bg-primary">
            <i class="fas fa-mug-hot"></i> MANAGER <br>
            ${managerInfo.name}
           </li>

          <li class="list-group-item bg-dark">
            Office Number : ${managerInfo.officeNumber}
          </li>

          <li class="list-group-item bg-dark">
            Employee id: ${managerInfo.id}
          </li>

          <li class="list-group-item bg-dark">
            Email : ${managerInfo.email}
          </li>

        </ul>
      </div>
    </section>
    `;
};

const renderEngineerCard = (engineerInfo) => {
  if (!engineerInfo) {
    return "";
  }
  return `
    <section class="engr-info text-white .col-md-4 .col-md-offset-4">
      <div class="card engr-card border-danger text-center" style="width: 18rem"> 
        <ul class="list-group list-group-flush">

          <li class="list-group-item bg-primary">
            <i class="fas-solid fas-glasses-round"></i> ENGINEER <br>
            ${engineerInfo.name}
           </li>

          <li class="list-group-item bg-dark">
            Office Number : ${engineerInfo.github}
          </li>

          <li class="list-group-item bg-dark">
            Employee id: ${engineerInfo.id}
          </li>

          <li class="list-group-item bg-dark">
            Email : ${engineerInfo.email}
          </li>

        </ul>
      </div>
    </section>
    `;
};

const renderInternCard = (internInfo) => {
  if (!internInfo) {
    return "";
  }
  return `
    <section class="engr-info text-white .col-md-4 .col-md-offset-4">
      <div class="card engr-card border-danger text-center" style="width: 18rem"> 
        <ul class="list-group list-group-flush">

          <li class="list-group-item bg-primary">
            <i class="fa-solid fa-graduation-cap"></i> INTERN <br>
            ${internInfo.name}
           </li>

          <li class="list-group-item bg-dark">
            Office Number : ${internInfo.school}
          </li>

          <li class="list-group-item bg-dark">
            Employee id: ${internInfo.id}
          </li>

          <li class="list-group-item bg-dark">
            Email : ${internInfo.email}
          </li>

        </ul>
      </div>
    </section>
    `;
};

module.exports = function (team) {
  console.log(team);

  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Builder</h1>  
        </div>  
      </header>  

      <main class="container my-5">
        ${renderCards(team)}
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy ${new Date().getFullYear()}</h3>
      </footer>
    </body>
    </html>
  `;
};
