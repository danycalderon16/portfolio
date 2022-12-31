import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public projects:any = []

  constructor() {
    this.projects.push('1');
    this.projects.push('1');
    this.projects.push('1');
    this.projects.push('1');
    this.projects.push('1');
   }

  ngOnInit(): void {
  }

}
