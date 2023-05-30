import Matter from "matter-js"
import Doo from "../cmpnts/Doo";
import Floor from "../cmpnts/Floor";
import Obstacle from "../cmpnts/Obstacle";

import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world

    world.gravity.y = 0.4;

    const pipeSizePosA = getPipeSizePosPair()

    return {
        physics: {engine, world},
        Doo: Doo(world, 'blue', {x: 50, y: 300}, {height: 40, width: 40}),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pos, pipeSizePosA.pipeTop.size ),

        Floor: Floor(world, 'green', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth})
    }
}