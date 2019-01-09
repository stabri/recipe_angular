import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHightlights]'
})
export class BetterHightlightsDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

    ngOnInit(){
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    }

}
