describe('BloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    
  });

  it('should have 3 functions by default', () => {
    bloomFilter = new BloomFilter();
    for (let i = 0; i < bloomFilter.fxns.length; i++) {
      expect(bloomFilter.fxns[i]).to.be.a('function');
    }
    expect(bloomFilter.fxns.length).to.equal(3);
  });

  it('can have k functions', () => {
    bloomFilter = new BloomFilter(50, 6);
    for (let i = 0; i < bloomFilter.fxns.length; i++) {
      expect(bloomFilter.fxns[i]).to.be.a('function');
    }
    expect(bloomFilter.fxns.length).to.equal(6);
  });

  it('should be able to add a new member', () => {
    bloomFilter = new BloomFilter();
    bloomFilter.add(3);
    expect(bloomFilter.contains(3)).to.equal(true);
  });

  it('should test if a member exists', () => {
    bloomFilter = new BloomFilter(50, 4);
    bloomFilter.add(3);
    bloomFilter.add('matt');
    expect(bloomFilter.test(3)).to.equal(true);
    expect(bloomFilter.test('matt')).to.equal(true);
    expect(bloomFilter.test('nate')).to.equal(false);
    expect(bloomFilter.test('example')).to.equal(false);
    console.log(bloomFilter.show());
  });

  it('more testing', () => {
    bloomFilter = new BloomFilter(50, 4);
    bloomFilter.add('nate');
    expect(bloomFilter.test('matt')).to.equal(false);
    console.log(bloomFilter.show());
  });

  
  

});
