import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public projects:Project[];

  constructor() {
    this.projects = [
      {
          "id":"1001",
          "name":"Lista de tareas",
          "description":"Aplicación híbrida para registrar tareas y marcarlas como completadas y descompletadas",
          "images":["task-0"],
          "tools":["angular","ionic"]
      },
      {
          "id":"1001",
          "name":"Lista de tareas",
          "description":"Aplicación híbrida para registrar tareas y marcarlas como completadas y descompletadas",
          "images":["task-0"],
          "tools":["angular","ionic"]
      }
  ]
   }

  ngOnInit(): void {
  }

}
