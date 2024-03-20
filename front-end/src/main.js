import { Router } from "./app/scripts/router";
import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { GameComponent } from "./app/components/game/game.component";
import { ScoreComponent } from "./app/components/score/score.component";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.scss";

import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { FooterComponent } from "./app/footer/footer.component";

const outlet = document.querySelector("#content-outlet");
customElements.define("my-navbar", NavbarComponent);
customElements.define("my-footer", FooterComponent);
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
  })
  .register("welcome", {
    component: WelcomeComponent,
  })
  .register("game", {
    component: GameComponent,
  })
  .register("score", {
    component: ScoreComponent,
  });
