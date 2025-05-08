import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        for (let i = 0; i < 2; i++) {

            const fish = new Fish()
            // fish.graphics.use(Resources.Fish.toSprite())
            // fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            // fish.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            // fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)

            // const fishTwo = new Actor()
            // fishTwo.graphics.use(Resources.fishTwo.toSprite())
            // fishTwo.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            // fishTwo.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
            // fishTwo.events.on("exitviewport", (e) => this.fishLeft(e))
            // this.add(fishTwo)

            // const fishThree = new Actor()
            // fishThree.graphics.use(Resources.fishThree.toSprite())
            // fishThree.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            // fishThree.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)


            // fish.scale = new Vector(0.5, 0.5)
            // if (fishThree.vel.x < 0) {
            //     fishThree.graphics.flipHorizontal = true
            // }

            // fishThree.events.on("exitviewport", (e) => this.fishLeft(e))
            // this.add(fishThree)
        }
        // fish.events.on("exitviewport", (e) => this.fishLeft(e))

    }

    fishLeft(e) {
        console.log(e)
        e.target.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        // e.target.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100)
    }

    // fishRight(e) {
    //     e.target.pos = new Vector(Math.random() * 1280, Math.random() * 720)
    // }

}

new Game()

