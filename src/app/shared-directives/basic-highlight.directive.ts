import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
      // not recomended directly access element:
      this.elementRef.nativeElement.style.backgroundColor = 'green';      
    }
}
