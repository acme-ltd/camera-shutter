import ShutterSpeedChain from "../src/ShutterSpeedChain";

describe("Test ShutterSpeedChain", () => {

    test("create ShutterSpeedChain", () => {

        let speed = new ShutterSpeedChain(1/8, "1/8");

        expect(speed).toBeInstanceOf(ShutterSpeedChain);
        expect(speed.getValue()).toBe(1/8);
        expect(speed.getName()).toBe("1/8");
    });

    test("ShutterSpeedChain prev value", () => {

        let speed1 = new ShutterSpeedChain(1/8, "1/8");
        let speed2 = new ShutterSpeedChain(250, "Bulb 250s");

        speed1.setPrev(speed2);

        expect(speed1.getPrev()).toBe(speed2);

        speed1.setPrev(null);
        expect(speed1.getPrev()).toBe(null);
    });


    test("ShutterSpeedChain next value", () => {

        let speed1 = new ShutterSpeedChain(1/8, "1/8");
        let speed2 = new ShutterSpeedChain(250, "Bulb 250s");

        speed1.setNext(speed2);

        expect(speed1.getNext()).toBe(speed2);

        speed1.setNext(null);
        expect(speed1.getNext()).toBe(null);
    });
});