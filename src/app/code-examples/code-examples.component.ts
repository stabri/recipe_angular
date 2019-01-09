import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-examples',
  templateUrl: './code-examples.component.html',
  styleUrls: ['./code-examples.component.css']
})
export class CodeExamplesComponent implements OnInit {
  numList: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
