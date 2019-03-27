import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {FormComponent} from "./form/form.component";
import {FormReactiveComponent} from "./form-reactive/form-reactive.component";
import {PipesComponent} from "./pipes/pipes.component";
import {CodeExamplesComponent} from "./code-examples.component";
import {BasicHighlightDirective} from "../shared-directives/basic-highlight.directive";
import {UnlessDirective} from "../shared-directives/structural-directives/unless.directive";
import {BetterHightlightsDirective} from "../shared-directives/better-hightlights.directive";
import {HightlightHostBindingDirective} from "../shared-directives/hightlight-host-binding.directive";
import {ShortenPipe} from "./pipes/shorten.pipe";
import {FilterPipe} from "./pipes/filter.pipe";
import {HttpComponent} from "./http/http.component";
import {ExampleRoutingModule} from "./example-routing.module";

@NgModule({
  declarations: [
    FormComponent,
    FormReactiveComponent,
    PipesComponent,
    CodeExamplesComponent,
    BasicHighlightDirective,
    UnlessDirective,
    BetterHightlightsDirective,
    HightlightHostBindingDirective,
    ShortenPipe,
    FilterPipe,
    HttpComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ExampleRoutingModule,
  ]
})
export class ExampleModule {

}
