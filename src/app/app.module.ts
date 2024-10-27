// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component'; // adjust path if needed

@NgModule({
  declarations: [
    AppComponent,
    ProjectSummaryComponent  // add your component here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
