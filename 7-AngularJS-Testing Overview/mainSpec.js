describe('filter', function () {
    beforeEash(module('myApp'));
    describe('reverse', function () {
        it('should reverse a string ', inject(function (reverseFilter) {
            expect(reverseFilter('ABCD')).toEqual('DCBA');
        }));
    });
});