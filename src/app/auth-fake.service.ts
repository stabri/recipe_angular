export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn)
        }, 200);
      }
    );
  }

  loggin(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

}
