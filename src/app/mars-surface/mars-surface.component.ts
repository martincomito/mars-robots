import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-surface',
  templateUrl: './mars-surface.component.html',
  styleUrls: ['./mars-surface.component.css']
})
export class MarsSurfaceComponent implements OnInit {

  constructor() { }
  
  column: number[];
  row: number[];

  ngOnInit() {
  }
  
  createSurface = (size) => {
    let x = size.split(' ')[0];
    let y = size.split(' ')[1];
    this.row = [];
    this.column = []; 
    for (let i = 1; i <= y; i++) {
      this.column.push(i)
    } 
    for (let i = 1; i <= x; i++) {
      this.row.push(i)
   } 
   this.row = this.row.reverse();
  }

}
