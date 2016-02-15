var expect = require('chai').expect;
var ladder = require('../ladder');

describe('ladder', function() {
  it('should return length=533 for height=500 and angle=70', function(){
    expect(ladder(500, 70)).to.equal(533);
  });

  it('should return length=5759 for height=1000 and angle=10', function(){
    expect(ladder(1000, 10)).to.equal(5759);
  });
})
