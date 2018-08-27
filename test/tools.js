import tools from '../src/tools'


test('test isObject func ', () => {
    expect(tools.isObject({})).toBeTruthy();
})

test('test extend func ', () => {
    expect(tools.extend({a : 1})).toHaveProperty('a' , 1);
})