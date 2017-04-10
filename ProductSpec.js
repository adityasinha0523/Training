

describe('Product',function(){
    it('should have returning undefined for product id',function(){
        var prod=new Product();

        expect(prod.productId).toBeDefined();
    });
});