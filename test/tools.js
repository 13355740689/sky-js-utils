import tools from '../src/tools'

test('test isNull func ', () => {
    expect(tools.isNull('')).toBeTruthy();
})

test('test isObject func ', () => {
    expect(tools.isObject({})).toBeTruthy();
})

test('test extend func ', () => {
    expect(tools.extend({a : 1})).toHaveProperty('a' , 1);
})

test('test trim func ', () => {
    expect(tools.trim(' a  b  ')).toBe('a  b');
})