const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("sets manager officeNumber", () => {
  const manager = new Manager("Manager", 23, "manger@gmail.com", 123);

  expect(manager.officeNumber).toBe(123);
});

test("gets manager officeNumber", () => {
  const manager = new Manager("Manager", 23, "manger@gmail.com", 123);

  expect(manager.getOfficeNumber()).toBe(123);
});

test("gets manager role, returns 'manager'", () => {
  const manager = new Manager("Manager", 23, "manger@gmail.com", 123);

  expect(manager.getRole()).toBe("Manager");
});
