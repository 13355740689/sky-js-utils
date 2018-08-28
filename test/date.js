import date from '../src/date'

test('test timesToYmd func ', () => {
    expect(date.timesToYmd(1535360033000 , '/')).toBe('2018/08/27');
})

test('test timesToYmdHms func ', () => {
    expect(date.timesToYmdHms(1535360033000)).toBe('2018-08-27 16:53:53');
})

test('test dateStrToTimes func ', () => {
    expect(date.dateStrToTimes('2018/08/27 16:53:53' , 'YYYY/MM/DD hh:mm:ss')).toBe(1535360033000);
}) 