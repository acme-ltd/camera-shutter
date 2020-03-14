/**
 * Speed of the shutter
 */
export default class ShutterSpeed {

    /**
     *Speed of the shutter
     */
    private speed : number;

    /**
     * Display name of shutter speed, e.g. if speed=0.25, speedName="1/4"
     */
    private speedName : string;

    /**
     *
     * @param speed Shutter speed in seconds
     * @param speedName
     */
    public constructor(speed : number,
                       speedName ?: string) {

        this.speed = speed;
        this.speedName = speedName !== undefined ? speedName : speed.toString(10);
    }

    /**
     * Shutter speed in seconds
     */
    public getValue() : number {
        return this.speed;
    }

    /**
     * Display name of shutter speed
     */
    public getName() : string {
        return this.speedName;
    }

    /**
     *
     * @param speed
     */
    public setValue(speed : number) : void {
        this.speed = speed;
    }

    /**
     *
     * @param name
     */
    public setName(name : string) : void {
        this.speedName = name;
    }

    /**
     *
     */
    public toString() : string {
        return "ShutterSpeed [speed=" + this.speedName + ", speedName=" + this.speedName + "]";
    }
}