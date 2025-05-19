import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js'
import { Fish } from "./fish.js";

export class Jellyfish extends Fish {
    onInitialize() {
        this.graphics.use(Resources.Jellyfish.toSprite());
        this.scale = new Vector(0.1, 0.1)
        this.events.on("exitviewport", (e) => this.FishToRandomPosition(e));
        this.FishToRandomPosition();


    }


}