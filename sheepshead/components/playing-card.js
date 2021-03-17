import { SUITS, VALUES, suitToIcon, valueToCharacter } from "../modules/card.js";

export default function PlayingCard() {
	return {
		props: ["suit", "value"],
		computed: {
			cardText() {
				let suit = "";
				if (this.suit === SUITS.CLUBS) suit = "Clubs";
				else if (this.suit === SUITS.SPADES) suit = "Spades";
				else if (this.suit === SUITS.DIAMONDS) suit = "Diamonds";
				else suit = "Hearts";

				return `${this.value} of ${suit}`;
			},
			isRed() {
				return this.suit === SUITS.DIAMONDS || this.suit === SUITS.HEARTS;
			},
			topCornerClasses() {
				let classes = "card-number top-corner";
				if (this.isRed) classes += " red-card";
				return classes;
			},
			bottomCornerClasses() {
				let classes = "card-number bottom-corner ";
				if (this.isRed) classes += "red-card";
				return classes;
			},
			computedValue() {
				return valueToCharacter(this.value);
			},
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
