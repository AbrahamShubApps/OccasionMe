class User {
  constructor(name) {
    this._name = name;
    this._logInStatus = false;
    this._lastLoggedIn = null;
  }
  isLoggedIn() {
    return this._logInStatus;
  }
  getLastLoggedInAt() {
    return this._lastLoggedIn;
  }
  logIn() {
    this._lastLoggedIn = new Date();
    this._logInStatus = true;
  }
  logOut() {
    this._logInStatus = false;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  canEdit(comment) {
    return comment._author._name === this._name;
  }
  canDelete(comment) {
    return false;
  }
}

class Moderator extends User {
  constructor(name) {
    super(name);
  }
  canDelete(comment) {
    return true;
  }
}

class Admin extends Moderator {
  constructor(name) {
    super(name);
  }
  canEdit(comment) {
    return true;
  }
}

class Comment {
  constructor(author, message, repliedTo = null) {
    this._author = author;
    this._message = message;
    this._repliedTo = repliedTo;
    this._timeStamp = new Date();
  }
  getMessage() {
    return this._message;
  }
  setMessage(message) {
    this._message = message;
  }
  getCreatedAt() {
    return this._timeStamp;
  }
  getAuthor() {
    return this._author;
  }
  getRepliedTo() {
    return this._repliedTo;
  }
  toString() {
    const replied = this._repliedTo ? ` (replied to ${this._repliedTo._author._name})` : '';
    return `${this._message} by ${this._author._name}${replied}`;
  }
}
