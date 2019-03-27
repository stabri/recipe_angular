import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CodeExamplesComponent} from "./code-examples.component";
import {FormComponent} from "./form/form.component";
import {FormReactiveComponent} from "./form-reactive/form-reactive.component";
import {PipesComponent} from "./pipes/pipes.component";
import {HttpComponent} from "./http/http.component";
import {AuthGuard} from "../app-route-guard.service";

const exampleRoutes: Routes = [
  {
    path: 'examples', component: CodeExamplesComponent, children: [
      {path: 'form', component: FormComponent},
      {path: 'form-reactive', component: FormReactiveComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'http', component: HttpComponent},
    ]
  },
  {path: 'examples/:option', canActivate: [AuthGuard], component: CodeExamplesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(exampleRoutes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {

}
