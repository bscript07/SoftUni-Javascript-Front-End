class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.info.isOn = false;
    }

    turnOn() {
        this.info.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.info.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        return JSON.stringify({
            producer: this.info.producer,
            age: this.info.age,
            brand: this.info.brand
        });
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }

    get isOn() {
        return this.info.isOn;
    }
}