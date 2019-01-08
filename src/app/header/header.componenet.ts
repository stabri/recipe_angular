import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.componenet.html'
})

export class HeaderComponent {
  @Output() selectedFeature = new EventEmitter<String>();

  constructor(){
  }

  onSelect(value: string){
    this.selectedFeature.emit(value);
  }
}
