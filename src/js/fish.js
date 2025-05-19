import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js'

export class Fish extends Actor {
    onInitialize() {
        this.graphics.use(Resources.Fish.toSprite());

        this.events.on("exitviewport", (e) => this.FishToRandomPosition(e));
        this.FishToRandomPosition();

        this.scale = new Vector(0.3, 0.3)

    }

    FishToRandomPosition(e) {
        this.pos = new Vector(Math.random() * 1280, Math.random() * 720);
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50);
    }
}
