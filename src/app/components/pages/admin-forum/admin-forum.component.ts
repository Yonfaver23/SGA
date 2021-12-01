import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/modelo2/user'; 

@Component({
  selector: 'app-admin-forum',
  templateUrl: './admin-forum.component.html',
  styleUrls: ['./admin-forum.component.css'],
})
export class AdminForumComponent implements OnInit {
  usuario: Users = {
    userName: '',
    userPassword: '',
  };

  constructor() {}

  ngOnInit(): void {}

  inicio() {
    if (this.usuario.userName == '' || this.usuario.userPassword) {
      console.log('tienes que ingresa una contraseña');
    } else {
      console.log(this.usuario);
    }
  }
}
