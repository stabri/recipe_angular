import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {
  private isOpen: boolean = false;
  constructor(private render: Renderer2, private elRf: ElementRef){

  }

    @HostListener('click') toggleButton(eventData: Event){
      if(this.isOpen){
        this.render.addClass(this.elRf.nativeElement.querySelector('.dropdown-menu'), 'show');
        this.isOpen = false;
      } else {
        this.render.removeClass(this.elRf.nativeElement.querySelector('.dropdown-menu'), 'show');
        this.isOpen = true;
      }
  }
}
