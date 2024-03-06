// TODO #import-router: use ES named imports to import the router
import { Router } from "./app/scripts/router";
// TODO #import-components: use ES named imports to import WelcomeComponent, GameComponent a ScoreComponent
import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { GameComponent } from "./app/components/game/game.component";
import { ScoreComponent } from "./app/components/score/score.component";
// TODO #import-css: use ES side-effect imports to import styles/style.css
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

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
