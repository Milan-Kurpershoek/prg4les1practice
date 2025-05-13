import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js'

export class Background extends Actor {
    onInitialize() {
        this.graphics.use(Resources.Background.toSprite());
        this.pos = new Vector(1280, 720);
    }


}