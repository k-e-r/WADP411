class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} has logged in`);
    return this;
  }

  logout() {
    console.log(`${this.username} has logged out`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }

  deleteUser(user) {
    console.log(`The user: ${user}, has been deleted `);
    return this;
  }
}

const userOne = new User('Tim', 'timmies@horton.com');
const userTwo = new Admin('Brad', 'brad@horton.com', 'super-admin');

userOne.logout().login();
console.log(userTwo.deleteUser('Jerry'));
// console.log(userOne.deleteUser('Jerry'))
