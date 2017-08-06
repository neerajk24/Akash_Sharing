import {Component, EventEmitter, ViewChild} from "@angular/core";
import {MaterializeAction} from "angular2-materialize";
import { ProjectService } from './projects/project.service';

@Component({
   selector: 'my-app',
//template: `<index-slider></index-slider>`,
template: `<hn-projectlist></hn-projectlist>`,
/*   template: `<index-card></index-card>`,*/

providers: [ProjectService]
})
export class AppComponent {

}
