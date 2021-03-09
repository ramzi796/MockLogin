import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userData = new BehaviorSubject<UserModel>(null);

  loaduser(userModel: UserModel) {
    this.userData.next(userModel);
  }

  getUser(): Observable<UserModel> {
    return this.userData.asObservable();
  } 
 }
