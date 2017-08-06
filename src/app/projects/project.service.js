"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return [
            {
                "projectId": 1,
                "projectName": "Garden Cart",
                "projectBy": "Neeraj Kumar",
                "projectDescrition": "This is just sample description",
                "imageUrl": "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/project/uploaded_image/60280/project_thumb_large_catarse_capa_2.jpg"
            },
            {
                "projectId": 2,
                "projectName": "Project 2",
                "projectBy": "Dheeraj Kumar",
                "projectDescrition": "This is just sample description for Project 2",
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "projectId": 3,
                "projectName": "Project 3",
                "projectBy": "Mela qto",
                "projectDescrition": "This is just sample description for Project 3",
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable()
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map