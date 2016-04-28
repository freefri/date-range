describe('Testing Date', function() {
    var d;
    beforeEach(function () {
        app.preConfig();
        d = new Date('2016-02-24T09:39:17.435Z');
    });

    it('setBeginDay() ', function() {
        var begin = d.setBeginDay();
        expect(begin.getTime()).toEqual(1456268400000);
        expect(begin.toISOString()).toEqual('2016-02-23T23:00:00.000Z');
        expect(begin.toString()).toEqual('Wed Feb 24 2016 00:00:00 GMT+0100 (CET)');
    });

    it('setEndDay() ', function() {
        var end = d.setEndDay();
        expect(end.getTime()).toEqual(1456354799000);
        expect(end.toISOString()).toEqual('2016-02-24T22:59:59.000Z');
        expect(end.toString()).toEqual('Wed Feb 24 2016 23:59:59 GMT+0100 (CET)');
    });
});
