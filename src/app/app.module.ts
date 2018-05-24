import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { DefaultComponent } from "./default";
import { ResumeModule } from "./resume/resume.module";


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    ResumeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
