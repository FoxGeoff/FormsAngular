import { Component, OnInit } from '@angular/core';

export class User {
  id: number | undefined
  firstName!: string;
  lastName!: string;
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user = new User;
  firstName = "Jane";
  lastName = "Doe";

  constructor() { }

  ngOnInit(): void {
    this.user.id = 1;
    this.user.firstName = "Geoff";
    this.user.lastName = "Fox";
  }

  newUser() {
    //TODO
    console.log(`Create a new user.`)
  }
}
