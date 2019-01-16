import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('f')signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  
  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.signupForm);
  }
}
