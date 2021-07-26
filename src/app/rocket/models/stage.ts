import { EngineReading } from "./engine-reading";
import { Rocket } from "./rocket";

export class Stage {
    Name : string | undefined;
    number : number | undefined;
    EngineReadings : EngineReading[] = [];
    rocket : Rocket | undefined;

}
