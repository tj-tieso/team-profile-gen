const Employee = require("../lib/Employee");

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
    <section class="text-white .col-md-4 .col-md-offset-4">

      <div class="card text-bg-dark mb-3" style="max-width: 18rem;"> 
        <ul class="list-group list-group-flush">

          <li class="list-group-item text-center bg-info">
            <i class="fas fa-mug-hot"></i> Manager <br>
            ${managerInfo.name}
           </li>

          <li class="list-group-item text-left text-light bg-dark">
            Employee id: ${managerInfo.id}
          </li>

          <li class="list-group-item text-left text-light bg-dark">
            Email: <a class="text-light text-decoration-none" href="mailto:${managerInfo.email}"> ${managerInfo.email} </a>
          </li>

          <li class="list-group-item text-left text-light bg-dark">
            Office Number : ${managerInfo.officeNumber}
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
    <section class="text-white .col-md-4 .col-md-offset-4">

      <div class="card text-bg-dark mb-3" style="max-width: 18rem;">  
        <ul class="list-group list-group-flush">

          <li class="list-group-item text-center bg-info">
            <i class="fas fa-mug-hot"></i> Engineer <br>
            ${engineerInfo.name}
           </li>

          <li class="list-group-item text-left text-light bg-dark">
            Employee ID: ${engineerInfo.id}
          </li>

          <li class="list-group-item text-left text-light bg-dark">
            Email: <a class="text-light text-decoration-none" href="mailto:${engineerInfo.email}"> ${engineerInfo.email} </a>
          </li>

          <li class="list-group-item text-left text-light bg-dark">
            GitHub: <a class="text-light text-decoration-none" href="https://github.com/${engineerInfo.github}"> ${engineerInfo.github} </a>
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
    <section class="text-white .col-md-4 .col-md-offset-4">

      <div class="card text-bg-dark mb-3" style="max-width: 18rem;"> 

        <ul class="list-group list-group-flush">

          <li class="list-group-item text-center bg-info">
            <i class="fas fa-mug-hot"></i> Intern <br>
            ${internInfo.name}
           </li>

          <li class="list-group-item text-left text-light bg-dark">
            Employee ID: ${internInfo.id}
          </li>

          <li class="list-group-item text-left text-light bg-dark">
            Email: <a class="text-light text-decoration-none" href="mailto:${internInfo.email}"> ${internInfo.email} </a>
          </li>
          
          <li class="list-group-item text-left text-light bg-dark">
            School: ${internInfo.school}
          </li>

        </ul>
      </div>
    </section>
    `;
};

module.exports = function (team) {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Builder</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>

    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-center text-light bg-dark py-2 px-3">Team Builder</h1>  
        </div>  
      </header>  

      <main class="container my-5">
        ${renderCards(team)}
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy ${new Date().getFullYear()}</h3>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
    </html>
  `;
};
