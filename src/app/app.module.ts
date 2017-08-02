import { NgModule }      from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { SliderComponent }         from './slider.component';
import { CardComponent }         from './indexcard.component';
import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  imports: [BrowserModule,
  MaterializeModule,
  MnFullpageModule.forRoot()
  ],
  declarations: [AppComponent,SliderComponent,CardComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*   declarations: [AppComponent, EmployeeComponent], */
