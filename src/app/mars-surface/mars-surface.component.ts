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
  coord1: number[];
  coord2: number[];
  cardinalPoint: string;

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

  parseCoordAndOrientation = (orientationInput) => {
    if ((<HTMLElement>document.getElementById('rocket')) !== null){
      (<HTMLElement>document.getElementById('rocket')).remove();
    }
    
    this.coord1 = orientationInput.split(' ')[0];
    this.coord2 = orientationInput.split(' ')[1];
    this.cardinalPoint = orientationInput.split(' ')[2]; 

    let image = '<img id="rocket" src="../../assets/images/rocket.svg" height="50px" width="30px" alt="a pretty rocket">';
    
    (<HTMLElement>document.getElementById(`${this.coord1}-${this.coord2}`)).innerHTML=`${this.coord1}-${this.coord2}`;
    (<HTMLElement>document.getElementById(`${this.coord1}-${this.coord2}`)).innerHTML+=image;

    let rocket = (<HTMLElement>document.getElementById('rocket'))



    switch(this.cardinalPoint){
      case 'N': break;

      case 'S': rocket.style.transform='rotate(180deg)'; break;
                
      case 'W': rocket.style.transform='rotate(270deg)'; break;          

      case 'E': rocket.style.transform='rotate(90deg)'; break; 
      
      default: break;
    }

  }


}
