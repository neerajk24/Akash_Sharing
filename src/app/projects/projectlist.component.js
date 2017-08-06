"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_service_1 = require("./project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(_projectService) {
        this._projectService = _projectService;
        this.projects = [];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.projects = this._projectService.getProjects();
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    core_1.Component({
        selector: 'hn-projectlist',
        moduleId: module.id,
        //  templateUrl: 'projectlist.component.html',
        template: "\n  <header class=\"main-header overlayer \">\n    <div class=\"w-row\"><div class=\"w-clearfix w-col w-col-8 w-col-small-8 w-col-tiny-8\">\n          <a href=\"/?ref=ctrse_header\" title=\"Catarse\" class=\"header-logo w-inline-block\" [routerLink]=\"['/welcome']\">\n            <img alt=\"Logo big\" src=\"https://www.catarse.me/assets/catarse_bootstrap/logo_big.png\"></a>\n        <div id=\"menu-components\">\n          <a href=\"/start?ref=ctrse_header\" class=\"w-hidden-small w-hidden-tiny header-link w-nav-link\">Submit Your Project</a>\n          <a href=\"/explore?ref=ctrse_header\" class=\"w-hidden-small w-hidden-tiny header-link w-nav-link\"  [routerLink]=\"['/projects']\">Explore</a>\n\n      <span id=\"menu-search\">\n  \t  <div id=\"discover-form-wrapper\" class=\"w-form w-hidden-small w-hidden-tiny header-search\">\n        <form accept-charset=\"UTF-8\" action=\"/pt/explore?ref=ctrse_header\" id=\"search-form\" method=\"get\" class=\"discover-form\">\n         <!--<div style=\"display: none;\">\n            <input name=\"utf8\" value=\"\u2713\" type=\"hidden\">\n          </div>-->\n        <input autocomplete=\"off\" id=\"pg_search\" name=\"pg_search\" placeholder=\"Busque projetos\" class=\"w-input text-field prefix search-input\" type=\"text\"  [(ngModel)]='listSearch'>\n        </form>\n\n      </div>\n      <a href=\"#\" id=\"pg_search_submit\" class=\"w-inline-block w-hidden-small w-hidden-tiny btn-dark btn-attached postfix\"><img alt=\"Lupa\" data-pin-nopin=\"true\" src=\"https://www.catarse.me/assets/catarse_bootstrap/lupa.png\" class=\"header-lupa\"></a>\n    </span>\n    </div>\n  </div><div class=\"text-align-right w-col w-col-4 w-col-small-4 w-col-tiny-4\"><a href=\"/pt/login?ref=ctrse_header\" class=\"w-nav-link header-link w-nav-link btn-edit u-right\">Login</a></div></div><div class=\"header-controls-mobile w-hidden-main w-hidden-medium\"><a href=\"/pt/start?ref=ctrse_header\" class=\"header-link w-nav-link\">Comece seu projeto</a><a href=\"/pt/explore?ref=ctrse_header\" class=\"header-link w-nav-link\">Explore</a></div>\n\n  </header>\n    <router-outlet></router-outlet>\n\n  ",
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=projectlist.component.js.map