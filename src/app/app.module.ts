import { NgModule }      from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { SliderComponent }         from './slider.component';
import { CardComponent }         from './indexcard.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { ProjectListComponent } from './projects/projectlist.component';
import { FormsModule } from '@angular/forms';
import { ProjectSearchPipe } from './projects/project-search.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule,
  MaterializeModule,FormsModule,
  RouterModule.forRoot([
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects/:id', component: CardComponent },
    { path: 'welcome', component: SliderComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ]),
  MnFullpageModule.forRoot()
  ],
  declarations: [AppComponent,SliderComponent,CardComponent,ProjectListComponent,ProjectSearchPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*   declarations: [AppComponent, EmployeeComponent], */
