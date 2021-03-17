/**
 * The possible suits that the card can be.
 */
export const SUITS = {
	HEARTS: "HEARTS",
	DIAMONDS: "DIAMONDS",
	CLUBS: "CLUBS",
	SPADES: "SPADES",
};

// The list of valid suits
const VALID_SUITS = [SUITS.HEARTS, SUITS.DIAMONDS, SUITS.CLUBS, SUITS.SPADES];

/**
 * The possible values that the card can be.
 */
export const VALUES = {
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
	TEN: 10,
	JACK: 11,
	QUEEN: 12,
	KING: 13,
	ACE: 14,
};

// The list of valid values
const VALID_VALUES = [
	VALUES.TWO,
	VALUES.THREE,
	VALUES.FOUR,
	VALUES.FIVE,
	VALUES.SIX,
	VALUES.SEVEN,
	VALUES.EIGHT,
	VALUES.NINE,
	VALUES.TEN,
	VALUES.JACK,
	VALUES.QUEEN,
	VALUES.KING,
	VALUES.ACE,
];

/**
 * Represents a playing card
 */
export class Card {
	suit;
	value;

	constructor(suit, value) {
		// Validate the suit and value
		if (!VALID_SUITS.includes(suit)) throw new Error("Invalid suit: ", suit);
		if (!VALID_VALUES.includes(value)) throw new Error("Invalid value: ", value);

		// Save the values to the card
		this.suit = suit;
		this.value = value;
	}
}

/**
 * Maps the input suit to its icon representation (e.g., CLUBS => '♣')
 *
 * @param {String} suit The suit to map
 * @returns The icon corresponding to the input suit
 */
export function suitToIcon(suit) {
	switch (suit) {
		case SUITS.CLUBS:
			return "♣";
		case SUITS.SPADES:
			return "♠";
		case SUITS.HEARTS:
			return "♥";
		case SUITS.DIAMONDS:
			return "♦";
		default:
			return "?";
	}
}

/**
 * Maps the input value to its character representation (e.g., 13 => 'K')
 *
 * @param {Number} value The value to map
 * @returns The character combination representing the input value
 */
export function valueToCharacter(value) {
	switch (value) {
		case VALUES.TWO:
			return "2";
		case VALUES.THREE:
			return "3";
		case VALUES.FOUR:
			return "4";
		case VALUES.FIVE:
			return "5";
		case VALUES.SIX:
			return "6";
		case VALUES.SEVEN:
			return "7";
		case VALUES.EIGHT:
			return "8";
		case VALUES.NINE:
			return "9";
		case VALUES.TEN:
			return "10";
		case VALUES.JACK:
			return "J";
		case VALUES.QUEEN:
			return "Q";
		case VALUES.KING:
			return "K";
		case VALUES.ACE:
			return "A";
		default:
			return "?";
	}
}
