import reg from '../src/reg'

test('test validateMail func ', () => {
    expect(reg.validateMail('873276172@qq.com')).toBeTruthy();
})

test('test validatePhone func ', () => {
    expect(reg.validatePhone('18007115166')).toBeTruthy();
})

test('test validateUrl func ', () => {
    expect(reg.validateUrl('http://www.baidu.com')).toBeTruthy();
})

test('test validateChar func ', () => {
    expect(reg.validateChar('asdfASDF')).toBeTruthy();
})