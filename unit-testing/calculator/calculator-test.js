describe("loan calculator", function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 2000, rate: 2, years: 2})).toEqual('85.08');
    expect(calculateMonthlyPayment({amount: 4000, rate: 2, years: 2})).toEqual('170.16');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 2000, rate: 2, years: 2})).toBeCloseTo( 85.08 , 2 );
  });
});




