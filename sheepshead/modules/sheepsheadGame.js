import { Card, VALUES, SUITS } from "./card.js";
const BASE_SHUFFLES = 30;

export default class SheepsheadGame {
	cards = [];
	players = [];

	constructor(players) {
		this.players = players;
		this.cards = this.createDeck();
		this.shuffle();
	}

	/**
	 * Creates a sheepshead deck (incl. sevens)
	 */
	createDeck() {
		const cards = [];
		for (let i = 7; i <= VALUES.ACE; i++) {
			cards.push(new Card(SUITS.HEARTS, i));
			cards.push(new Card(SUITS.DIAMONDS, i));
			cards.push(new Card(SUITS.CLUBS, i));
			cards.push(new Card(SUITS.SPADES, i));
		}

		return cards;
	}

	/**
	 * Shuffles the deck of cards in place
	 */
	shuffle() {
		// Determine how many times to swap cards
		const numCards = this.cards.length;
		const shuffles = Math.floor(Math.random() * 100) + BASE_SHUFFLES;

		// Swap the cards up to shuffles number of times
		for (let i = 0; i < shuffles; i++) {
			// Grad two random cards out of the deck
			const card1 = Math.floor(Math.random() * numCards);
			const card2 = Math.floor(Math.random() * numCards);

			// Swap them
			const temp = this.cards[card1];
			this.cards[card1] = this.cards[card2];
			this.cards[card2] = temp;
		}
	}

	/**
	 * Deals out the current state of the cards property to five players, leaving two
	 * cards in the blind.
	 *
	 * @returns A list, containing the array of player hands in the first index and the
	 * 			contents of the blind in the second index.
	 */
	deal() {
		const playerHands = [[], [], [], [], []];
		let numCards = this.cards.length;
		let i = 0;

		// Deal two cards to each player at a time
		while (i < numCards - 2) {
			for (let j = 0; j < playerHands.length; j++) {
				playerHands[j].push(this.cards[i]);
				playerHands[j].push(this.cards[i + 1]);
				i += 2;
			}
		}

		// Put the last two cards in the blind and return the results
		const blind = [this.cards[numCards - 2], this.cards[(numCards = 1)]];
		return [playerHands, blind];
	}
}
