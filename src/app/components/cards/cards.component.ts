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
          "tools":["android-studio","java","firebase"],
          "link":[{
            icon:"github-black",
            link:"https://github.com/danycalderon16/appPrestamosFirebase"
          }]
      },
      {
          "id":"1002",
          "name":"Lista de tareas",
          "description":"Aplicación híbrida para registrar tareas y marcarlas como completadas y descompletadas",
          "images":["task-0"],
          "tools":["angular","ionic","firebase"],
          "link":[{
            icon:"web",
            link:"https://dacv-lista-tareas.netlify.app/"
          },
          {
            icon:"github-black",
            link:"https://github.com/danycalderon16/eje03-tabs"
          }]
      },
      {
          "id":"1003",
          "name":"Carrito de compras",
          "description":"Aplicación híbrida de un carrito de compras, donde se agregan productos y se simula una compra.",
          "images":["ecommerce-0"],
          "tools":["angular","ionic","firebase"],
          "link":[{
            icon:"web",
            link:"https://dacv-ecommerce.netlify.app/"
          },
          {
            icon:"github-black",
            link:"https://github.com/danycalderon16/eje5-ecommerce"
          }]
      },
      {
          "id":"1003",
          "name":"Backend de página escuela segura",
          "description":"Backend de proyecto escolar, desarrollado con Node.JS y amlacenamiento en una base de datos en PostgreSQL.",
          "images":["backend"],
          "tools":["javascript","nodejs","postgresql"],
          "link":[
          {
            icon:"github-black",
            link:"https://github.com/danycalderon16/backendDenuncias"
          }]
      }
  ]
   }

  ngOnInit(): void {
  }

}
