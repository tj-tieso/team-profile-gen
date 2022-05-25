const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Trevor", 1, "tj.tieso@gmail.com");

  expect(employee.name).toBe("Trevor");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
