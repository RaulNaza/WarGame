var expect = chai.expect;

describe("MyFunctions", function() {
    describe("#multiply", function(){
        it('should return a times b', function() {
            var x = multiply(3,2);
            expect(x).to.equal(6);
        });
    });
});