function calculate(arr) {
    let pricePerOneBitcoin = 11949.16;
    let pricePerOneGrGold = 67.51;
    let earnedBitcoins = 0;
    let totalAmount = 0;
    let day = 0;
    let firstDay = 0;
    let sumBitcoinQuantity = 0;
    let countBitcoinQuantity = 0;

    for (let i = 0; i < arr.length; i++) {
        day++;
        let currentAmount = arr[i];
        day % 3 == 0 ? currentAmount = currentAmount * 0.7 : null; // - 30% gold

        let oneDayEarning = currentAmount * pricePerOneGrGold;
        totalAmount += oneDayEarning;

        if (totalAmount >= pricePerOneBitcoin) {
            countBitcoinQuantity++;
            earnedBitcoins = Math.floor(totalAmount / pricePerOneBitcoin);
            totalAmount = totalAmount - (pricePerOneBitcoin * earnedBitcoins);
            sumBitcoinQuantity += earnedBitcoins;
        }
        countBitcoinQuantity == 1 ? firstDay = day : null;
    }
    console.log(`Bought bitcoins: ${sumBitcoinQuantity}`);
    firstDay != 0 ? console.log(`Day of the first purchased bitcoin: ${firstDay}`) : null;
    console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}