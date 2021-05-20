import PlayingCard from "../components/playing-card.js";
import SheepsheadGame from "./sheepsheadGame.js";

const App = {
	data() {
		return {
			hands: [],
			blind: [],
			cards: [],
			game: null,
		};
	},
	created() {
		// Create a new game & save the cards list
		this.game = new SheepsheadGame([]);
		this.cards = this.game.cards;

		// Deal out the players' hands and the blind
		const [hands, blind] = this.game.deal();
		this.hands = hands;
		this.blind = blind;
	},
	computed: {
		hasHands() {
			return Array.isArray(this.hands) && this.hands.length;
		},
		player1() {
			return this.hasHands ? this.hands[0] : [];
		},
		player2() {
			return this.hasHands ? this.hands[1] : [];
		},
		player3() {
			return this.hasHands ? this.hands[2] : [];
		},
		player4() {
			return this.hasHands ? this.hands[3] : [];
		},
		player5() {
			return this.hasHands ? this.hands[4] : [];
		},
	},
};

// ♣ ♠ ♥ ♦
const app = Vue.createApp(App);

app.component("playing-card", PlayingCard());

app.mount("#app");
