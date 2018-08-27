import calc from '../src/calc'

test('test add func ', () => {
    expect(calc.add(1.758 , 3.68)).toBe(5.438);
})

test('test sub func ', () => {
    expect(calc.sub(5 , 3)).toBe(2);
})

test('test mul func ', () => {
    expect(calc.mul(2 , 3)).toBe(6);
})

test('test div func ', () => {
    expect(calc.div(3 , 2)).toBe(1.5);
})