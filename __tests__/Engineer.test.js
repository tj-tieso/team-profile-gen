const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("sets Engineer github", () => {
  const engineer = new Engineer("Engineer", 2, "engineer@gmail.com", "gitout");

  expect(engineer.github).toBe("gitout");
});

test("gets Engineer github", () => {
  const engineer = new Engineer("Engineer", 2, "engineer@gmail.com", "gitout");

  expect(engineer.getGithub()).toBe("gitout");
});

test("gets engineer role, returns 'Engineer'", () => {
  const engineer = new Engineer("Engineer", 2, "engineer@gmail.com", "gitout");

  expect(engineer.getRole()).toBe("Engineer");
});
