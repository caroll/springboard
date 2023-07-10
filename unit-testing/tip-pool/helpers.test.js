describe("Helpers test (with setup and tear-down)", function() {
    beforeAll(function () {
      // initialization logic
      let total = 0;
    });
    it('should return a valid value in sumPaymentTotal()', function () {
        total = sumPaymentTotal();
        expect(total).not.toBeNull();
        expect(total).not.toBeNaN();
    });
    it( "should return a not null value in calculateTipPercent()" , function() {
        expect(calculateTipPercent(400,40)).not.toBeNull();
        expect(calculateTipPercent(650,120)).not.toBeNull();
        expect(calculateTipPercent(5000,20)).not.toBeNull();
    });
    it( "should return a valid percentage value in calculateTipPercent()" , function() {
        expect(calculateTipPercent(400,40)).toBeLessThanOrEqual(100);
        expect(calculateTipPercent(650,120)).toBeLessThanOrEqual(100);
        expect(calculateTipPercent(5000,20)).toBeLessThanOrEqual(100);
    });

    afterEach(function() {
      // teardown logic
      serverNameInput.value = '';
    });
  });
  