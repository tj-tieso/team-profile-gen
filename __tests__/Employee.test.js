const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getName()).toEqual(
    expect.objectContaining({ name: employee.name })
  );
});

test("gets employee's id", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getId()).toEqual(
    expect.objectContaining({ id: employee.id })
  );
});

test("gets employee's email", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.objectContaining({ email: employee.email })
  );
});

test("gets employees role, returns 'Employee'", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getRole()).toEqual(
    expect.objectContaining({ role: "Employee" })
  );
});
