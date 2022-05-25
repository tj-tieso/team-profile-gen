const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("creates a Manager Object", () => {
  const manager = new Manager("Michael", 1, "ScottsTots@yahoo.com", 130);

  expect(manager.name).toBe("Michael");
  expect(manager.id).toEqual(1);
  expect(manager.email).toBe("ScottsTots@yahoo.com");
  expect(manager.officeNumber).toEqual(130);
});

test("gets manager role, returns 'Manager'", () => {
  const manager = new Manager("Michael", 1, "ScottsTots@yahoo.com", 130);

  expect(manager.getRole()).toEqual(
    expect.objectContaining({ role: "Manager" })
  );
});
