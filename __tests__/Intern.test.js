const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern");

test("sets Intern school", () => {
  const intern = new Intern("Intern", 2, "intern@gmail.com", "Kansas");

  expect(intern.school).toBe("Kansas");
});

test("gets Intern school", () => {
  const intern = new Intern("Intern", 2, "intern@gmail.com", "Kansas");

  expect(intern.getSchool()).toBe("Kansas");
});

test("gets Intern role, returns 'Intern'", () => {
  const intern = new Intern("Intern", 2, "intern@gmail.com", "Kansas");

  expect(intern.getRole()).toBe("Intern");
});
