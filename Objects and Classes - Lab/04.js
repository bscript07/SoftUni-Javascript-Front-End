function solve(arg1, arg2, arg3) {

    const object = {
        name: arg1,
        lastName: arg2,
        hairColor: arg3
    }
    const convertToJson = JSON.stringify(object);
    console.log(convertToJson);
}