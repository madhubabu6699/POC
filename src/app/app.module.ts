import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Content3Component } from './content3/content3.component';
import { Content2Component } from './content2/content2.component';
import { Content1Component } from './content1/content1.component';
import { PersonalComponent } from './personal/personal.component';
import { RouterModule,Routes } from '@angular/router';

const mylinks:Routes=[
  {
    path:'personalInfo',
    component:PersonalComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Content3Component,
    Content2Component,
    Content1Component,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(mylinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
