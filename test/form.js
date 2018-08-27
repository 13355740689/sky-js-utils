import form from '../src/form'

test('test validateMail func ', () => {
    expect(form.validateMail('873276172@qq.com')).toBeTruthy();
})

test('test validatePhone func ', () => {
    expect(form.validatePhone('18007115166')).toBeTruthy();
})

test('test validateUrl func ', () => {
    expect(form.validateUrl('http://www.baidu.com')).toBeTruthy();
})

test('test validateChar func ', () => {
    expect(form.validateChar('asdfASDF')).toBeTruthy();
})