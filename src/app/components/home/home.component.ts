import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: UserModel;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
