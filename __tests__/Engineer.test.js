const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("creates a Engineer Object", () => {
  const engineer = new Engineer("Engineer", 2, "engineer@gmail.com", "gitout");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer role, returns 'Engineer'", () => {
  const engineer = new Engineer("Engineer", 2, "engineer@gmail.com", "gitout");

  expect(engineer.getRole()).toEqual(
    expect.objectContaining({ role: "Engineer" })
  );
});
