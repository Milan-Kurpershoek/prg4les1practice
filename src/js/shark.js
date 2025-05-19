import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js'

export class Shark extends Actor {
    onInitialize() {
        this.graphics.use(Resources.Shark.toSprite());

        this.pos = new Vector(100, 350);
        this.vel = new Vector(20, 0);

        this.events.on("exitviewport", (e) => this.SharkPositionReset(e));
        this.SharkPositionReset();

        this.scale = new Vector(0.5, 0.5)

        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    SharkPositionReset(e) {
        this.pos = new Vector(100, 350);
        this.vel = new Vector(50, 0);
    }

    hitSomething(event) {
        if (event.other.owner instanceof Fish) {
            event.other.owner.kill()
        }
    }
}