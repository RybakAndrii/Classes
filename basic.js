class User {
  constructor(name, role) {
    this.validRoles = ["admin", "user"];

    if (typeof name !== "string" || name.trim() === "") {
      alert("Некоректне імʼя");
      return;
    }

    if (!this.validRoles.includes(role)) {
      alert("Некоректна роль");
      return;
    }

    this.name = name;
    this.role = role;
    this.loggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.loggedIn = true;
    console.log(`${this.name} увійшов у систему.`);
  }

  logout() {
    this.loggedIn = false;
    console.log(`${this.name} вийшов із системи.`);
  }

  changeName(newName) {
    if (typeof newName !== "string" || newName.trim() === "") {
      alert("Некоректне нове імʼя");
      return;
    }
    this.name = newName;
    console.log(`Ім'я змінено на ${this.name}`);
  }

  changePassword(newPassword) {
    if (typeof newPassword !== "string" || newPassword.length < 6) {
      alert("Некоректний пароль. Пароль має бути щонайменше 6 символів.");
      return;
    }
    console.log(`Пароль змінено для користувача ${this.name}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      alert("Невірний обʼєкт користувача");
      return;
    }
    this.users.push(user);
    console.log(`Користувач ${user.getName()} доданий.`);
  }
  а;
  removeUser(userName) {
    this.users = this.users.filter((user) => user.getName() !== userName);
    console.log(`Користувач ${userName} видалений.`);
  }

  changeUserRole(userName, newRole) {
    const user = this.users.find((user) => user.getName() === userName);
    if (user && this.validRoles.includes(newRole)) {
      user.role = newRole;
      console.log(`Роль користувача ${userName} змінено на ${newRole}`);
    } else {
      alert("Некоректна роль або користувач не знайдений");
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log("Усі користувачі видалені.");
  }
}

const admin = new Admin("Oleh");
const user1 = new User("Ivan", "user");
const user2 = new User("Maria", "admin");

admin.addUser(user1);
admin.addUser(user2);

console.log(admin.getAllUsers());

admin.changeUserRole("Ivan", "admin");

admin.removeUser("Maria");

console.log(admin.getAllUsers());
