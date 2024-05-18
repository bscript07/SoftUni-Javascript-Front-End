function solve(inStockProducts, deliveryProducts) {

    const products = {};
    const inStockProductsLength = inStockProducts.length;
    const deliveryProductsLength = deliveryProducts.length;

    for (let i = 0; i < inStockProductsLength; i += 2) {
        const currentProduct = inStockProducts[i];
        products[currentProduct] = parseInt(inStockProducts[i + 1]);
    }

    for (let i = 0; i < deliveryProductsLength; i += 2) {
        const currentProduct = deliveryProducts[i];

        !products.hasOwnProperty(currentProduct) ? products[currentProduct] = 0 : null;
        products[currentProduct] += parseInt(deliveryProducts[i + 1]);
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}