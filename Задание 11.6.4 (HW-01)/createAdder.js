//Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b

function createAdder(a) {
    return function addA(b) {
        return a + b;
    };
}

module.exports = createAdder;
