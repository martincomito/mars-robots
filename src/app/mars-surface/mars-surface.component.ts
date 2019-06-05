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
	currentOrientation: number;

	ngOnInit() {
	}

	createSurface = (size) => {
		let x = size.split(' ')[0];
		let y = size.split(' ')[1];
		this.row = [];
		this.column = [];
		for (let i = 0; i < y; i++) {
			this.column.push(i)
		}
		for (let i = 0; i < x; i++) {
			this.row.push(i)
		}
		this.row = this.row.reverse();
	}

	parseCoordAndOrientation = (orientationInput) => {
		//  Agregar eventlistener al botón para que ejecute con Enter
		//  Validar que las coordenadas iniciales no se vayan de los límites del tablero
		if ((<HTMLElement>document.getElementById('rocket')) !== null) {
			(<HTMLElement>document.getElementById('rocket')).remove();
		}

		this.coord1 = orientationInput.split(' ')[0];
		this.coord2 = orientationInput.split(' ')[1];
		this.cardinalPoint = orientationInput.split(' ')[2];
		this.cardinalPoint.toUpperCase;

		let image = '<img id="rocket" src="../../assets/images/rocket.svg" height="60px" width="40px" alt="a pretty rocket">';

		(<HTMLElement>document.getElementById(`${this.coord1}-${this.coord2}`)).innerHTML = `${this.coord1}-${this.coord2}`;

		(<HTMLElement>document.getElementById(`${this.coord1}-${this.coord2}`)).innerHTML += image;
		let rocket = (<HTMLElement>document.getElementById('rocket'))


		//  Crear validación para que se puedan ingresar solamente 'N', 'S', 'W' y 'E'
		switch (this.cardinalPoint) {
			case 'N': break;
			case 'S': rocket.style.transform = 'rotate(180deg)'; break;
			case 'W': rocket.style.transform = 'rotate(270deg)'; break;
			case 'E': rocket.style.transform = 'rotate(90deg)'; break;
			default: break;
		}
	}

	moveForward = () => {
		let currentPos = (<HTMLElement>document.getElementById('rocket').parentNode).id;
		let auxX = currentPos.substring(2);
		//	Detectar orientación para saber cuál sería el movimiento para adelante
		let posX = auxX.match(/\d+/g).map(Number)[0];   
		console.log("POS X: ", posX);

		let auxY = currentPos.substring(0, 2);
		let posY = auxY.match(/\d+/g).map(Number)[0];

		console.log("POS Y: ", posY);

		
		
		let rocket = (<HTMLElement>document.getElementById('rocket'));
		if (rocket !== null) {
			rocket.remove();
		}
		
		let image = '<img id="rocket" src="../../assets/images/rocket.svg" height="60px" width="40px" alt="a pretty rocket">';

		(<HTMLElement>document.getElementById(`${posY}-${posX}`)).innerHTML += image;
	}

	//  Validar input de instrucciones para que solamente se pueda ingresar L, R y F 
	//	quitar espacios de las instrucciones en caso de que existan
	parseInstructions = (instructions) => {
		let instructionsArray = instructions.split('');
		let rocket = (<HTMLElement>document.getElementById('rocket'));

		this.currentOrientation = 0;
		for (let i = 0; i < instructionsArray.length; i++) {
			switch (instructionsArray[i]) {
				case 'L': rocket.style.transform = `rotate(${this.currentOrientation - 90}deg)`;
					this.currentOrientation += -90;
					break;
				case 'R': rocket.style.transform = `rotate(${this.currentOrientation + 90}deg)`;
					this.currentOrientation += 90;
					break;
				case 'F': this.moveForward();
					break;
				default: break;
			}
		}
	}
}