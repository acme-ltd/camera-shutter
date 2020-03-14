import ShutterSpeedChain from "./ShutterSpeedChain";


const DEFAULT_SHUTTER_SPEED_WITH_NAME : Array<[number, string]> = [
    [60, "60"],
    [30, "30"], [15, "15"], [10, "10"], [8, "8"], [4, "4"],
    [2, "2"], [1, "1"], [1/2, "1/2"], [1/4, "1/4"], [1/5, "1/5"], [1/6, "1/6"], [1/8, "1/8"], [1/10, "1/10"],
    [1/13, "1/13"], [1/15, "1/15"], [1/20, "1/20"], [1/25, "1/25"], [1/30, "1/30"], [1/40, "1/40"], [1/50, "1/50"],
    [1/60, "1/60"], [1/80, "1/80"], [1/100, "1/100"], [1/125, "1/125"], [1/160, "1/160"], [1/200, "1/200"],
    [1/250, "1/250"], [1/320, "1/320"], [1/400, "1/400"], [1/500, "1/500"], [1/640, "1/640"], [1/800, "1/800"],
    [1/1000, "1/1000"], [1/1250, "1/1250"], [1/1600, "1/1600"], [1/2000, "1/2000"], [1/2500, "1/2500"],
    [1/3200, "1/3200"], [1/4000, "1/4000"], [1/5000, "1/5000"], [1/6400, "1/6400"], [1/8000, "1/8000"]
];


/**
 *
 */
export default class StandardShutterSpeedList {

    /**
     *
     */
    private static instance : StandardShutterSpeedList | null = null;

    /**
     *
     */
    private readonly shutterSpeedList : ReadonlyMap<number, ShutterSpeedChain>;

    /**
     *
     */
    private readonly minShutterSpeed : ShutterSpeedChain;

    /**
     *
     */
    private readonly maxShutterSpeed : ShutterSpeedChain;

    /**
     *
     * @param shutterSpeedArray
     */
    private constructor(shutterSpeedArray : Array<[number, string]> ) {
        this.shutterSpeedList = convertShutterSpeedArrayToChainMap(shutterSpeedArray);

        let minShutterSpeed = this.shutterSpeedList.get(DEFAULT_SHUTTER_SPEED_WITH_NAME[0][0]);
        assertShutterSpeedNotNull(minShutterSpeed);
        this.minShutterSpeed = minShutterSpeed;

        let maxShutterSpeed = this.shutterSpeedList.get(DEFAULT_SHUTTER_SPEED_WITH_NAME[DEFAULT_SHUTTER_SPEED_WITH_NAME.length - 1][0]);
        assertShutterSpeedNotNull(maxShutterSpeed);
        this.maxShutterSpeed = maxShutterSpeed;
    }


    /**
     * This method returns an instance of the StandardShutterSpeedList class
     */
    public static getInstance() : StandardShutterSpeedList {
        if(!this.instance){
            this.instance = new StandardShutterSpeedList(DEFAULT_SHUTTER_SPEED_WITH_NAME);
        }

        return this.instance;
    }

    /**
     *
     */
    public getList() : ReadonlyMap<number, ShutterSpeedChain> {
        return this.shutterSpeedList;
    }

    /**
     *
     * @param shutterSpeed
     */
    public getBySpeed(shutterSpeed : number) : ShutterSpeedChain | undefined {
        return this.shutterSpeedList.get(shutterSpeed);
    }

    /**
     *  Return minimum shutter speed
     */
    public getMinimumShutterSpeed() : ShutterSpeedChain {
        return this.minShutterSpeed;
    }

    /**
     * Return maximum shutter speed
     */
    public getMaximumShutterSpeed() : ShutterSpeedChain {
        return this.maxShutterSpeed;
    }
}

/**
 * Covert an array with [shutterSpeed, shutterSpeedName] pairs to Map with instance of the StandardShutterSpeedValue class
 * @param shutterSpeedArray
 */
function convertShutterSpeedArrayToChainMap(shutterSpeedArray : Array<[number, string]>) : Map<number, ShutterSpeedChain> {
    let shutterSpeedMap : Map<number, ShutterSpeedChain> = new Map<number, ShutterSpeedChain>();

    let prevShutterSpeed : ShutterSpeedChain | null = null;

    for(let [shutterSpeedNumber, shutterSpeedName] of shutterSpeedArray){
        let shutterSpeedValue : ShutterSpeedChain = new ShutterSpeedChain(shutterSpeedNumber, shutterSpeedName);
        shutterSpeedMap.set(shutterSpeedNumber, shutterSpeedValue);

        shutterSpeedValue.setPrev(prevShutterSpeed);

        if(prevShutterSpeed !== null){
            prevShutterSpeed.setNext(shutterSpeedValue);
        }

        prevShutterSpeed = shutterSpeedValue;
    }

    return shutterSpeedMap;
}


function assertShutterSpeedNotNull(shutterSpeedValue : ShutterSpeedChain | null | undefined) : asserts shutterSpeedValue is ShutterSpeedChain {
    if (shutterSpeedValue === null || shutterSpeedValue === undefined) {
        //TODO Add exception here
        throw "Add exception here";
    }
}