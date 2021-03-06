const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHtml = require("./src/generateHtml");
const fs = require("fs");
const path = require("path");

const team = [];

const buildTeam = () => {
  fs.writeFileSync(
    path.join(__dirname, "/dist/", "team.html"),
    generateHtml(team),
    "utf8"
  );
  console.log("File created! Check your dist folder for team.html");
};

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Please enter Team Manager name",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid name";
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Team Manager Id",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/); //regex
          if (pass) {
            return true;
          }
          return "Please enter a valid number";
        },
      },
      {
        type: "text",
        name: "email",
        message: "Please enter Team Manager email address",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid email address";
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter Team Manager Office Number",
        validate: (answer) => {
          if (isNaN(answer)) {
            return "Please enter a valid number";
          }
          return true;
        },
      },
    ])
    .then((managerObj) => {
      const manager = new Manager(
        managerObj.name,
        managerObj.id,
        managerObj.email,
        managerObj.officeNumber
      );
      team.push(manager);
      addEmployee();
    });
};

const addEmployee = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Would you like to add another Employee",
      name: "direction",
      choices: ["Engineer", "Intern", "Finish Building Team"],
    })
    .then((answers) => {
      if (answers.direction === "Engineer") {
        promptEngineer();
      } else if (answers.direction === "Intern") {
        promptIntern();
      } else {
        // console.log(team);
        buildTeam();
      }
    });
};

const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "text", // change to input
        name: "name",
        message: "Please enter Engineer name",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid name";
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Engineer Id",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/); //regex
          if (pass) {
            return true;
          }
          return "Please enter a valid number";
        },
      },
      {
        type: "text",
        name: "email",
        message: "Please enter Engineer email address",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid email address";
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter Engineer github",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid email github";
        },
      },
    ])
    .then((engineerObj) => {
      const engineer = new Engineer(
        engineerObj.name,
        engineerObj.id,
        engineerObj.email,
        engineerObj.github
      );
      team.push(engineer);
      addEmployee();
    });
};

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "text", // change to input
        name: "name",
        message: "Please enter Intern name",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid name";
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter Intern Id",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/); //regex
          if (pass) {
            return true;
          }
          return "Please enter a valid number";
        },
      },
      {
        type: "text",
        name: "email",
        message: "Please enter Intern email address",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid email address";
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter Intern School",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter valid school";
        },
      },
    ])
    .then((internObj) => {
      const intern = new Intern(
        internObj.name,
        internObj.id,
        internObj.email,
        internObj.school
      );
      team.push(intern);
      addEmployee();
    });
};

promptManager();
