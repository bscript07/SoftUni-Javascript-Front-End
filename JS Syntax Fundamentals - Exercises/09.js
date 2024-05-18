function calculate(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let moneyNeeded = weightInKg * pricePerKg;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}