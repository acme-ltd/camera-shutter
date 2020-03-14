import ShutterSpeed from "./ShutterSpeed";

/**
 *
 */
export default class Shutter {

    /**
     *
     */
    private shutterSpeed : ShutterSpeed;

    /**
     *
     * @param shutterSpeed
     */
    constructor(shutterSpeed: ShutterSpeed | number) {
        this.shutterSpeed = typeof shutterSpeed === "number" ? new ShutterSpeed(shutterSpeed) : shutterSpeed;
    }

    /**
     *
     */
    public getShutterSpeed() : ShutterSpeed {
        return this.shutterSpeed;
    }

    /**
     *
     * @param shutterSpeed
     */
    public setShutterSpeed(shutterSpeed : number | ShutterSpeed) : void {
        this.shutterSpeed = typeof shutterSpeed === "number" ? new ShutterSpeed(shutterSpeed) : shutterSpeed
    }

    /**
     *
     * @param ev
     */
    public setEvOffset(ev : number) : void {

    }


}