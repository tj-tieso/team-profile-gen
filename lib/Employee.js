// The first class is an Employee parent class with the following properties and methods:
// name;
// id;
// email;
// getName();
// getId();
// getEmail();
// getRole(); // Returns 'Employee'

class Employee {
  constructor(name = "", id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return {
      name: this.name,
    };
  }

  getId() {
    return {
      id: this.id,
    };
  }

  getEmail() {
    return {
      email: this.email,
    };
  }
  getRole() {
    return {
      role: "Employee",
    };
  }
}

module.exports = Employee;
