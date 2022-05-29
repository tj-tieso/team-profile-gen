const Employee = require("../lib/Employee");

// const renderManager = (team) => {
//   console.log(team);
//   const managerArr = [];

//   return `
//     <section class="my-3" id="manager">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
//         <div class="flex-row justify-space-between">
//         `;
// };

module.exports = function (team) {
  console.log(team);

  // filter/run getRole(team)
  // // if manager, create managerArr.
  // // if engineer, create engineerArr.
  // // if intern, create internArr.

  // make bootstrap card for each employee.
  //create card, put in html string

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
          <h1 class="page-title text-secondary bg-dark py-2 px-3">TEAM MANGER NAME HERE</h1>
          <nav class="flex-row">
             <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
          </nav>  
        </div>  
      </header>  

      <main class="container my-5">
        
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy ${new Date().getFullYear()}</h3>
      </footer>
    </body>
    </html>
  `;
};
