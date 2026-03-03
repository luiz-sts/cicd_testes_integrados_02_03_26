const math=require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('subtracao de 13 - 1 igual a 12', () => {
    expect(math.subtract(13, 1)).toBe(12);
});

test('multiplicacao de 7 x 7 igual a 49', () => {
    expect(math.multiply(7, 7)).toBe(49);
});

test('divisao de 10 / 2 igual a 5', () => {
    expect(math.divide(10, 2)).toBe(5);
});