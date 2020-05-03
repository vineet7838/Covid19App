import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/IUser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

  /** Array of login user data. */
  private loginData: IUser[];
  
  private isLoggedIn = new BehaviorSubject(false);
  sharedMessage = this.isLoggedIn.asObservable();
  changeIsLoggedInStatus(message: boolean) {
    this.isLoggedIn.next(message)
  }

  constructor() {
    this.getUsers();
    console.log("In Login service"+this.isLoggedIn)
  }

  /** Method to get all login user data. */
  getUsers(): IUser[] {
    this.loginData = [{
      "id": 1,
      "username": "admin",
      "password": "Admin@1234"
    }, {
      "id": 2,
      "username": "vineet",
      "password": "Vineet@1234"
    }];
    return this.loginData;
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }


}
