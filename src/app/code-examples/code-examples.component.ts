import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth-fake.service';
import { Observable, Observer } from 'rxjs';
// import 'rxjs/Rx';

@Component({
  selector: 'app-code-examples',
  templateUrl: './code-examples.component.html',
  styleUrls: ['./code-examples.component.css']
})
export class CodeExamplesComponent implements OnInit {
  numList: number[] = [1, 2, 3, 4, 5];
  activeExample: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.activeExample = +params['option'];
      }
    );
// example of Observable: 
    // const myObservable = Observable.create((observer: Observer<string>) => {
    //     setTimeout(() => {
    //       observer.next('First data package')
    //     }, 2000);
    //     setTimeout(() => {
    //       observer.next('Second data package')
    //     }, 4000);
    //     setTimeout(() => {
    //       observer.error('error')
    //     }, 5000);
    // });
    //
    //
    // myObservable.subscribe(
    //   (data: string) => { console.log(data); },
    //   (error: string) => { console.log(error); },
    //   (complete: string) => { console.log(complete); }
    // );
  }

  onClick(option: number){
    this.router.navigate(['/examples', option]);
  }

  onLogIn(){
    this.authService.loggin();
  }

  onLogOut(){
    this.authService.logout();
  }
}
