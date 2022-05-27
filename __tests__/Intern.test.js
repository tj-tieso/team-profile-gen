const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern");

test("creates a Intern Object", () => {
  const intern = new Intern("Intern", 3, "Intern@school.com", "Wisconsin");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("gets Intern role, returns 'Engineer'", () => {
  const intern = new Intern("Intern", 3, "Intern@school.com", "Wisconsin");

  expect(intern.getRole()).toEqual(expect.objectContaining({ role: "Intern" }));
});
