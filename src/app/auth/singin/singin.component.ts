import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
      const email = form.value.email;
      const password = form.value.password;
  }

}
