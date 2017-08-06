import { Injectable } from '@angular/core';

import { IProject } from './project';

@Injectable()
export class ProjectService {

    getProjects(): IProject[] {
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
    }
}
