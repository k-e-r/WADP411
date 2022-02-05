function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email) {
  User.call(this, username, email);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  //delete user
};

const userOne = new User('Harry', 'harry@mail.com');
console.log(userOne);
userOne.login().logout();

const userTwo = new Admin('Eric', 'eric@mail.com');
console.log(userTwo);

//////////////////////////////////////

class User2 {
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

class Admin2 extends User2 {
  constructor(username, email) {
    super(username, email);
  }

  deleteUser(user) {}
}
console.log('-------------------------');
// const userOne2 = new User2('Tim', 'timmies@horton.com');
// const userTwo2 = new Admin2('Brad', 'brad@horton.com', 'super-admin');

// const userOne2 = new User2('Harry', 'harry@mail.com');
// console.log(userOne2);
// userOne2.login().logout();

const userTwo2 = new Admin2('Eric', 'eric@mail.com');
console.log(userTwo2);
userTwo2.login().logout();
// console.log(userTwo2.deleteUser('Jerry'));
// console.log(userOne.deleteUser('Jerry'))
