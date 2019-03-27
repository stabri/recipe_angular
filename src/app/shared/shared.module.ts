import {NgModule} from "@angular/core";
import {DropDownDirective} from "../shared-directives/structural-directives/dropdown.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DropDownDirective,
  ],
  exports: [
    CommonModule,
    DropDownDirective,
  ]
})
export class SharedModule {

}
