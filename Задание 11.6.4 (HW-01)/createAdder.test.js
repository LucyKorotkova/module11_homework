const createAdder = require('./createAdder');

test('Сложение двух положительных чисел', () => {
    expect(createAdder(5)(3)).toBe(8);
});

test('Сложение отрицательного и положительного числа', () => {
    expect(createAdder(-2)(4)).toBe(2);
});

test('Сложение нулей', () => {
    expect(createAdder(0)(0)).toBe(0);
});

test('Передача строки вместо числа', () => {
    expect(createAdder("5")(3)).toBe("53"); // Строка, а не NaN
});

test('Передача null как второго аргумента', () => {
    expect(createAdder(5)(null)).toBe(5); // null приводится к 0
});

test('Передача NaN в качестве первого аргумента', () => {
    expect(createAdder(NaN)(2)).toBe(NaN);
});

test('Передача строки как второго аргумента', () => {
        expect(createAdder(5)("3")).toBe("53");
});

test('Передача NaN как второго аргумента', () => {
        expect(createAdder(5)(NaN)).toBe(NaN)
});
