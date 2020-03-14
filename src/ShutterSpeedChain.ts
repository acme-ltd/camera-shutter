import ShutterSpeed from "./ShutterSpeed";

/**
 *
 */
export default class ShutterSpeedChain
    extends ShutterSpeed {

    /**
     *
     */
    private nextShutterSpeed : ShutterSpeedChain | null = null;

    /**
     *
     */
    private prevShutterSpeed : ShutterSpeedChain | null = null;

    /**
     *
     */
    public getNext() : ShutterSpeedChain | null {
        return this.nextShutterSpeed;
    }

    /**
     *
     */
    public getPrev() : ShutterSpeedChain | null {
        return this.prevShutterSpeed;
    }

    /**
     *
     * @param shutterSpeed
     */
    public setNext(shutterSpeed : ShutterSpeedChain | null) : void {
        this.nextShutterSpeed = shutterSpeed;
    }

    /**
     *
     * @param shutterSpeed
     */
    public setPrev(shutterSpeed : ShutterSpeedChain | null) : void {
        this.prevShutterSpeed = shutterSpeed;
    }

    /**
     *
     */
    public hasNext() : boolean {
        return this.nextShutterSpeed !== null;
    }

    /**
     *
     */
    public hasPrev() : boolean {
        return this.prevShutterSpeed !== null;
    }
}