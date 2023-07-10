describe("Payments test (with setup and tear-down)", function() {
    beforeAll(function () {
      // initialization logic

    });
  
    it('should return a valid value in submitPaymentInfo()', function () {
        total = sumPaymentTotal();
        expect(total).not.toBeNull();
        expect(total).not.toBeNaN();
    });

    it( "should payment total be computed in updateSummary()" , function() {
        expect(sumPaymentTotal).not.toBeNull;
    });

    it( "should payment table be updated using appendPaymentTable()" , function() {
        expect(appendPaymentTable).toHaveBeenCalled;
    });
  
    afterEach(function() {
      // teardown logic

    });
  
    afterAll( function() {

    } );
  
  
  });