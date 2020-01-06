export class Login {

  userName: String;
  password: String;
  isValidUser: Boolean;

  constructor(userName: String, password: String, isValidUser: Boolean){
    this.userName = userName;
    this.password = password;
    this.isValidUser = isValidUser;

  }
}
