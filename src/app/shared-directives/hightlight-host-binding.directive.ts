import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlightHostBinding]'
})
export class HightlightHostBindingDirective implements OnInit{

  constructor() { }

  @Input() defaultColor: string = 'transparent';
  @Input() hightLightColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.hightLightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }


}
