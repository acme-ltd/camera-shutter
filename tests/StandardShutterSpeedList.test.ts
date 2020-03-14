import StandardShutterSpeedList from "../src/StandardShutterSpeedList";
import ShutterSpeed from "../src/ShutterSpeed";


describe("Test StandardShutterSpeedList", () => {

    const NUM_ELEMENTS_IN_LIST = 43;

    const MINIMUM_SHUTTER_SPEED = 60;
    const SECOND_MINIMUM_SHUTTER_SPEED = 30;

    const MAXIMUM_SHUTTER_SPEED = 1/8000;
    const SECOND_MAXIMUM_SHUTTER_SPEED = 1/6400;


    test("check singleton pattern", () => {
        let firstInstance = StandardShutterSpeedList.getInstance();
        let secondInstance = StandardShutterSpeedList.getInstance();

        expect(firstInstance).toBe(secondInstance);
    });


    test("check minimum shutter speed value", () => {
        let shutterList = StandardShutterSpeedList.getInstance();

        expect(shutterList.getMinimumShutterSpeed().getValue()).toBe(MINIMUM_SHUTTER_SPEED);
    });


    test("check maximum shutter speed value", () => {
        let shutterList = StandardShutterSpeedList.getInstance();

        expect(shutterList.getMaximumShutterSpeed().getValue()).toBe(MAXIMUM_SHUTTER_SPEED);
    });


    test("check minimum shutter speed is first in the list", () => {
        let shutterList = StandardShutterSpeedList.getInstance();

        expect(shutterList.getMinimumShutterSpeed().getPrev()).toBe(null);
    });


    test("check maximum shutter speed is last in the list", () => {
        let shutterList = StandardShutterSpeedList.getInstance();

        expect(shutterList.getMaximumShutterSpeed().getNext()).toBe(null);
    });




    test("check second minimum shutter speed value", () => {
        let shutterList = StandardShutterSpeedList.getInstance();
        let secondShutterSpeed = <ShutterSpeed>(shutterList.getMinimumShutterSpeed().getNext());

        expect(secondShutterSpeed.getValue()).toBe(SECOND_MINIMUM_SHUTTER_SPEED);
    });


    test("check second maximum shutter speed value", () => {
        let shutterList = StandardShutterSpeedList.getInstance();
        let secondShutterSpeed = <ShutterSpeed>(shutterList.getMaximumShutterSpeed().getPrev());

        expect(secondShutterSpeed.getValue()).toBe(SECOND_MAXIMUM_SHUTTER_SPEED);
    });


    test("get shutter speed by value", () => {
        let shutterList = StandardShutterSpeedList.getInstance();

        expect(shutterList.getBySpeed(MAXIMUM_SHUTTER_SPEED)).not.toBe(undefined);
        expect((<ShutterSpeed>shutterList.getBySpeed(MAXIMUM_SHUTTER_SPEED)).getValue()).toBe(MAXIMUM_SHUTTER_SPEED);

        expect(shutterList.getBySpeed(MINIMUM_SHUTTER_SPEED)).not.toBe(undefined);
        expect((<ShutterSpeed>shutterList.getBySpeed(MINIMUM_SHUTTER_SPEED)).getValue()).toBe(MINIMUM_SHUTTER_SPEED);

        expect(shutterList.getBySpeed(999999)).toBe(undefined);
    });


    test("check shutter speed list size", () => {
        let shutterList = StandardShutterSpeedList.getInstance();

        expect(shutterList.getList()).toBeInstanceOf(Map);
        expect(shutterList.getList().size).toBe(NUM_ELEMENTS_IN_LIST);
    });

});