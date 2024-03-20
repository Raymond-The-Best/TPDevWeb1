import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";
import { CardComponent } from "./card/card.component";
import template from "./game.component.html";
import "./game.component.css";

let environment = {
  api: {
    host: "http://localhost:8081",
  },
};
export class GameComponent extends Component {
  constructor(name) {
    const params = parseUrl();
    super(template);
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }
  async init() {
    this._config = await this.fetchConfig();

    this._boardElement = document.querySelector(".cards");
    this._cards = this._config.ids.map((id) => new CardComponent(id));
    this._cards.forEach((card) => {
      this._boardElement.appendChild(card.getElement());
      card.getElement().addEventListener("click", () => this._flipCard(card));
    });
    this.start();
  }
  start() {
    this._startTime = Date.now();
    let seconds = 0;
    document.querySelector("nav .navbar-title").textContent = `Player: ${
      this._name
    }. Elapsed time: ${seconds++}`;

    this._timer = setInterval(
      () => {
        document.querySelector("nav .navbar-title").textContent = `Player: ${
          this._name
        }. Elapsed time: ${seconds++}`;
      },
      1000
    );
  }

  async fetchConfig() {
    const response = await fetch(
      `${environment.api.host}/board?size=${this._size}`
    );
    return response.json();
  }

  goToScore() {
    let timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);

    setTimeout(
      () => {
        let scorePage = "./#score";
        window.location = `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
      },
      750
    );
  }
  _flipCard(card) {
    if (this._busy) {
      return;
    }

    if (card.flipped) {
      return;
    }
    card.flip();
    if (!this._flippedCard) {
      this._flippedCard = card;
    } else {
      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;
        this._flippedCard = null;

        if (this._matchedPairs === this._size) {
          this.goToScore();
        }
      } else {
        this._busy = true;
        setTimeout(
          () => {
            this._flippedCard.flip();
            card.flip();
            this._busy = false;
            this._flippedCard = null;
          },
          500
        );
      }
    }
  }
}

