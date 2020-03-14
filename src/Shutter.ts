export default class Shutter {

    private readonly shutterSpeed : number;

    constructor(shutterSpeed: number) {
        this.shutterSpeed = shutterSpeed;
    }


    public getShutterSpeed() : number {
        return this.shutterSpeed;
    }

}