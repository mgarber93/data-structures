class BloomFilter extends Set {
  constructor(filterSize = 50, hashingFunction = 3) {
    this.filter = [].fill(false, 0, filterSize);
    this.fxns = [].fill()     
    super();
  }

  test(member) {
    var string = `some string${member}`;
  }

  static 
}

// Removal is impossible without introducing false negatives, 
// but extensions to the bloom filter are possible that allow
// removal e.g. counting filters.