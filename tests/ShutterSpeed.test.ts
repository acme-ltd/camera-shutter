import ShutterSpeed from "../src/ShutterSpeed";

describe("Test ShutterSpeed", () => {

    test("ShutterSpeed value 1", () => {
        let speed = new ShutterSpeed(1);

        expect(speed.getValue()).toBe(1);
        expect(speed.getName()).toBe("1");
    });

    test("ShutterSpeed value 1/4", () => {
        let speed = new ShutterSpeed(0.25);

        expect(speed.getValue()).toBe(0.25);
        expect(speed.getName()).toBe("0.25");
    });

    test("ShutterSpeed value 1/8", () => {
        let speed = new ShutterSpeed(1/8, "1/8");

        expect(speed.getValue()).toBe(1/8);
        expect(speed.getName()).toBe("1/8");
    });


    test("ShutterSpeed value change", () => {
        let speed = new ShutterSpeed(1/250, "1/250");

        expect(speed.getValue()).toBe(1/250);
        expect(speed.getName()).toBe("1/250");

        speed.setValue(60);
        speed.setName("Bulb exposure");

        expect(speed.getValue()).toBe(60);
        expect(speed.getName()).toBe("Bulb exposure");
    });
});