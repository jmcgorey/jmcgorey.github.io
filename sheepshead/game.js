import PlayingCard from "./components/playing-card.js";
import SheepsheadGame from "./modules/sheepsheadGame.js";
const App = {
	data() {
		return {
			hands: [],
			blind: [],
			game: null,
		};
	},
	created() {
		try {
			this.game = new SheepsheadGame([]);
			this.cards = this.game.cards;
			const [hands, blind] = this.game.deal();
			this.hands = hands;
			this.blind = blind;

			console.log("Hands: ", this.hands);
		} catch (error) {
			console.error(error);
		}
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
