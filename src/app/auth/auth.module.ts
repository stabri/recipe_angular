import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SinginComponent} from "./singin/singin.component";
import {SingoutComponent} from "./singout/singout.component";

@NgModule({
  declarations: [
    SinginComponent,
    SingoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthModule {

}
