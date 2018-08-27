import date from '../src/date'

test('test timesToYMD func ', () => {
    expect(date.timesToYMD(1535360033642)).toBe('2018-08-27');
}) 