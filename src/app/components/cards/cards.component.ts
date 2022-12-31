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
          "name":"App de prestamos",
          "description":"Aplicación de Android para realizar un seguimiento de los préstamos, tener un registro de préstamos y pagos realizados por los clientes, guardar datos importantes y generar estadísticas, con almacenamiento en la nube usando Firestore.",
          "images":["loans-0"],
          "tools":["android-studio","java","firebase"]
      },
      {
          "id":"1002",
          "name":"Lista de tareas",
          "description":"Aplicación híbrida para registrar tareas y marcarlas como completadas y descompletadas",
          "images":["task-0"],
          "tools":["angular","ionic","firebase"]
      },
      {
          "id":"1003",
          "name":"Carrito de compras",
          "description":"Aplicación híbrida de un carrito de compras, donde se agregan productos y se simula una compra.",
          "images":["ecommerce-0"],
          "tools":["angular","ionic","firebase"]
      },
      {
          "id":"1003",
          "name":"Backend de página escuela segura",
          "description":"Backend de proyecto escolar, desarrollado con Node.JS y amlacenamiento en una base de datos en PostgreSQL.",
          "images":["task-0"],
          "tools":["javascript","nodejs","postgresql"]
      }
  ]
   }

  ngOnInit(): void {
  }

}
