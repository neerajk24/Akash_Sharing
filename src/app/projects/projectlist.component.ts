import {Component, OnInit} from '@angular/core';
import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'hn-projectlist',
  moduleId: module.id,
//  templateUrl: 'projectlist.component.html',
 template: `
  <header class="main-header overlayer ">
    <div class="w-row"><div class="w-clearfix w-col w-col-8 w-col-small-8 w-col-tiny-8">
          <a href="/?ref=ctrse_header" title="Catarse" class="header-logo w-inline-block" [routerLink]="['/welcome']">
            <img alt="Logo big" src="https://www.catarse.me/assets/catarse_bootstrap/logo_big.png"></a>
        <div id="menu-components">
          <a href="/start?ref=ctrse_header" class="w-hidden-small w-hidden-tiny header-link w-nav-link">Submit Your Project</a>
          <a href="/explore?ref=ctrse_header" class="w-hidden-small w-hidden-tiny header-link w-nav-link"  [routerLink]="['/projects']">Explore</a>

      <span id="menu-search">
  	  <div id="discover-form-wrapper" class="w-form w-hidden-small w-hidden-tiny header-search">
        <form accept-charset="UTF-8" action="/pt/explore?ref=ctrse_header" id="search-form" method="get" class="discover-form">
         <!--<div style="display: none;">
            <input name="utf8" value="✓" type="hidden">
          </div>-->
        <input autocomplete="off" id="pg_search" name="pg_search" placeholder="Busque projetos" class="w-input text-field prefix search-input" type="text"  [(ngModel)]='listSearch'>
        </form>

      </div>
      <a href="#" id="pg_search_submit" class="w-inline-block w-hidden-small w-hidden-tiny btn-dark btn-attached postfix"><img alt="Lupa" data-pin-nopin="true" src="https://www.catarse.me/assets/catarse_bootstrap/lupa.png" class="header-lupa"></a>
    </span>
    </div>
  </div><div class="text-align-right w-col w-col-4 w-col-small-4 w-col-tiny-4"><a href="/pt/login?ref=ctrse_header" class="w-nav-link header-link w-nav-link btn-edit u-right">Login</a></div></div><div class="header-controls-mobile w-hidden-main w-hidden-medium"><a href="/pt/start?ref=ctrse_header" class="header-link w-nav-link">Comece seu projeto</a><a href="/pt/explore?ref=ctrse_header" class="header-link w-nav-link">Explore</a></div>

  </header>
    <router-outlet></router-outlet>

  `,
})
export class ProjectListComponent implements OnInit {
  listSearch: string;
  projects: IProject[] = [];

   constructor(private _projectService: ProjectService){}

   ngOnInit(): void {
        this.projects = this._projectService.getProjects();
    }
}
