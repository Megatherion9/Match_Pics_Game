
import { Component } from '@angular/core';
import _ from 'underscore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  constructor() {}

	animals: string[] = _.shuffle(["lion", "bear", "chicken", "cow", "panda", "wolf", "lion", "bear", "chicken", "cow", "panda", "wolf"]);
	
	defaultImage: string = "assets/img/card.png";
	flippedCardsNames: string[] = [];
	flippedCardsIds: string[] = [];
	pairedCardsIds: string[] =  [];

	// Function to change images on on click 
	flipCard(cardId) {

/*		console.log(this.animals);*/

		// Verify if card is setted
		if (!this.flippedCardsIds.includes(cardId) && !this.pairedCardsIds.includes(cardId) && this.flippedCardsNames.length < 2) {
	
			document.getElementById(cardId).setAttribute('src', "assets/img/" + this.animals[cardId] + ".png");

			this.flippedCardsNames.push(this.animals[cardId]);
			this.flippedCardsIds.push(cardId);		

			// Verify if the first two cards match
			if (this.flippedCardsNames.length == 2) {

				if	(this.flippedCardsNames[0] == this.flippedCardsNames[1]) {

					this.pairedCardsIds.push(this.flippedCardsIds[0], this.flippedCardsIds[1]);

					this.flippedCardsNames.pop()
					this.flippedCardsNames.pop()
					this.flippedCardsIds.pop()
					this.flippedCardsIds.pop()

				}	else {

					setTimeout(() => {

						document.getElementById(this.flippedCardsIds[0]).setAttribute('src', this.defaultImage);
						document.getElementById(this.flippedCardsIds[1]).setAttribute('src', this.defaultImage);

						this.flippedCardsNames.pop()
						this.flippedCardsNames.pop()
						this.flippedCardsIds.pop()
						this.flippedCardsIds.pop()

					}, 2500);
				}
			}
		}
	};

}



// TODO Agregar boton reiniciar esquina superior derecha
// TODO Agregar a Readme to install nmp install -g underscore
// TODO Backup in github
// TODO Add "You Win!" message
// TODO Add "Start!" message
// TODO Make the cards desapear once they are paired


/**
LOG OF LEARNING

-> Everything has to be inside of an ion-content tag
-> The root folder to refer to images is "src", from there you can start your paths
-> Best way to use get an image and concat: [src]='"assets/img/" + animals[3] + ".png"'
-> Best way to reduce the size of an image: style="width:25%"
-> HTML code to make the component clickable: (click) use parenthesis


**/

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page {

//   constructor() {}

// }