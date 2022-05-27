const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(typeof employee).toBe("object");
});

// START Gets
test("gets employee's name", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getName()).toBe("Trevor");
});

test("gets employees role, returns 'Employee'", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});

test("gets employee's id", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getId()).toBe(1);
});

test("gets employee's email", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.getEmail()).toBe("tj.tieso@gmail.com");
});

// START Sets
test("can set name", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.name).toBe("Trevor");
});

test("can set id", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.id).toBe(1);
});

test("can set email", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.email).toBe("tj.tieso@gmail.com");
});
