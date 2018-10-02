import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) { }
  
  name: string;

  User = {
    nome:"RUBENS",
    email:"rubens@planetsweb.com.br"
  }

  ngOnInit() {

  }

  test(){
    this.User.nome = this.name

    this.userService.createUser(this.User).subscribe(res => {
      console.log(res);
    });
  }

}
