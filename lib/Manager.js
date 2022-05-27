// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager

const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return {
      role: "Manager",
    };
  }
}

module.exports = Manager;
