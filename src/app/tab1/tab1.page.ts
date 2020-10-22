
import { Component } from '@angular/core';
import _ from 'underscore';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

	constructor() { }

	animals: string[] = _.shuffle(["lion", "bear", "chicken", "cow", "panda", "wolf", "lion", "bear", "chicken", "cow", "panda", "wolf"]);

	defaultImage: string = "assets/img/card.png";
	flippedCardsNames: string[] = [];
	flippedCardsIds: string[] = [];
	pairedCardsIds: string[] = [];

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

				if (this.flippedCardsNames[0] == this.flippedCardsNames[1]) {

					this.pairedCardsIds.push(this.flippedCardsIds[0], this.flippedCardsIds[1]);

					this.flippedCardsNames.pop()
					this.flippedCardsNames.pop()
					this.flippedCardsIds.pop()
					this.flippedCardsIds.pop()

				} else {

					setTimeout(() => {

						document.getElementById(this.flippedCardsIds[0]).setAttribute('src', this.defaultImage);
						document.getElementById(this.flippedCardsIds[1]).setAttribute('src', this.defaultImage);

						this.flippedCardsNames.pop()
						this.flippedCardsNames.pop()
						this.flippedCardsIds.pop()
						this.flippedCardsIds.pop()

					}, 2000);
				}
			}
		}

		console.log("animals: " + this.animals);
		console.log("flippedCardsNames: " + this.flippedCardsNames);
		console.log("flippedCardsIds: " + this.flippedCardsIds);
		console.log("pairedCardsIds: " + this.pairedCardsIds);

		if (this.pairedCardsIds.length == 12) {
			console.log("You Win!");
		}


	}

	restartGame() {

		if (this.flippedCardsIds.length == 0) {

			for (var i = 0; i <= 11; i++) {
				document.getElementById(<string><unknown>i).setAttribute('src', this.defaultImage);
			};

			this.pairedCardsIds = [];
			this.flippedCardsNames = [];
			this.flippedCardsIds = [];
			this.animals = _.shuffle(["lion", "bear", "chicken", "cow", "panda", "wolf", "lion", "bear", "chicken", "cow", "panda", "wolf"]);
		}
	}

}




/**

TODO Add "You Win!" message
TODO Add flip effect to cards
TODO Make the cards desapear once they are paired
TODO Add sound to each card depending on the animal
TODO Add timer for challenge
TODO Think about Medals System
TODO Develop the Medals System
TODO Work on Dark Mode
TODO Use a Promise instead of Timer (Maybe)


--------------------------------------------------------------------------------------

LOG OF LEARNING

-> Everything has to be inside of an ion-content tag
-> The root folder to refer to images is "src", from there you can start your paths
-> Best way to use get an image and concat: [src]='"assets/img/" + animals[3] + ".png"'
-> Best way to reduce the size of an image: style="width:25%"
-> HTML code to make the component clickable: (click) use parenthesis


**/


// export class Tab1Page {

//   constructor() {}

// }