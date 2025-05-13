import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js'

export class Bubbles extends Actor {
    onInitialize() {
        this.graphics.use(Resources.Bubbles.toSprite());

        this.pos = new Vector(Math.random() * 1280, 720);
        this.vel = new Vector(0, -40);

        this.events.on("exitviewport", (e) => this.BubblesPositionReset(e));
        this.BubblesPositionReset();

        this.scale = new Vector(0.5, 0.5)
    }

    BubblesPositionReset(e) {
        this.pos = new Vector(Math.random() * 1280, 720);
        this.vel = new Vector(0, -40);
    }
}