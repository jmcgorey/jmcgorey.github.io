import { SUITS, suitToIcon, valueToCharacter } from "../modules/card.js";

export default function PlayingCard() {
	return {
		props: ["suit", "value"],
		computed: {
			/**
			 * Converts the card values into a string to represent the card
			 * @returns A string representing the card as text. Ex: '2 of Hearts'
			 */
			cardText() {
				let suit = "";
				if (this.suit === SUITS.CLUBS) suit = "Clubs";
				else if (this.suit === SUITS.SPADES) suit = "Spades";
				else if (this.suit === SUITS.DIAMONDS) suit = "Diamonds";
				else suit = "Hearts";

				return `${this.value} of ${suit}`;
			},
			/**
			 * States whether the card is a red card.
			 * @returns true if the Card is a diamond or a heart, false otherwise
			 */
			isRed() {
				return this.suit === SUITS.DIAMONDS || this.suit === SUITS.HEARTS;
			},
			/**
			 * @returns The list of classes for the top-corner element
			 */
			topCornerClasses() {
				let classes = "card-number top-corner";
				if (this.isRed) classes += " red-card";
				return classes;
			},
			/**
			 *
			 * @returns The list of classes for the bottom-corner element
			 */
			bottomCornerClasses() {
				let classes = "card-number bottom-corner ";
				if (this.isRed) classes += "red-card";
				return classes;
			},
			/**
			 * @returns The card's value, converted to its character representation
			 */
			computedValue() {
				return valueToCharacter(this.value);
			},
			/**
			 * @returns The card's suit, converted to its icon representation
			 */
			computedSuit() {
				return suitToIcon(this.suit);
			},
		},
		template: `<article class="card">
                    <header tabindex="0" class="card-header">
                        <span class="sr-only">{{ cardText }}</span>
                        <div :class="topCornerClasses" aria-hidden="true">
                            <p>{{computedValue}}</p>
                            <p>{{computedSuit}}</p>
                        </div>
                        <div :class="bottomCornerClasses" aria-hidden="true">
                            <p>{{computedValue}}</p>
                            <p>{{computedSuit}}</p>
                        </div>
                    </header>
                </article>`,
	};
}
