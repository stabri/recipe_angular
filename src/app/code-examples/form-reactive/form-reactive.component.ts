import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  singnUpForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Ann'];

  constructor() { }

  ngOnInit() {
    this.singnUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.singnUpForm);
  }

  onClearForm() {
    this.singnUpForm.reset();
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.singnUpForm.get('hobbies')).push(control);
  }

// return any key: value pair wher key is type string and value boolean
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const prom = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if (control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },1500);
    });
    return prom;
  }
}
