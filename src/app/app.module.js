"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_materialize_1 = require("angular2-materialize");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var slider_component_1 = require("./slider.component");
var indexcard_component_1 = require("./indexcard.component");
var ngx_fullpage_1 = require("ngx-fullpage");
var projectlist_component_1 = require("./projects/projectlist.component");
var forms_1 = require("@angular/forms");
var project_search_pipe_1 = require("./projects/project-search.pipe");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            angular2_materialize_1.MaterializeModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'projects', component: projectlist_component_1.ProjectListComponent },
                { path: 'projects/:id', component: indexcard_component_1.CardComponent },
                { path: 'welcome', component: slider_component_1.SliderComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            ngx_fullpage_1.MnFullpageModule.forRoot()
        ],
        declarations: [app_component_1.AppComponent, slider_component_1.SliderComponent, indexcard_component_1.CardComponent, projectlist_component_1.ProjectListComponent, project_search_pipe_1.ProjectSearchPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
/*   declarations: [AppComponent, EmployeeComponent], */
//# sourceMappingURL=app.module.js.map