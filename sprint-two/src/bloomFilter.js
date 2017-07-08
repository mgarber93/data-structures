class BloomFilter extends Set {
  constructor(filterSize = 50, funcs = 3) {
    super();
    this.filter = [];
    for (let i = 0; i < filterSize; i++) {
      this.filter[i] = false;
    }
    this.fxns = [];
    this.fxns[0] = this.naive1;
    this.fxns[1] = this.naive2;
    for (let i = 2; i < funcs; i++) {
      this.fxns.push(
        this.kirschMitzenmacher(this.fxns[0], this.fxns[1], i, this.filter.length));
    }
  }

  // constant time version of contains
  test(member) {
    return this.fxns.map(func => func(member, this.filter.length))
      .reduce((total, i) => total && this.filter[i], true);
  }

  add(member) {
    this.fxns.map( func => func(member, this.filter.length))
      .forEach(index => {
        this.filter[index] = true;
      });
    super.add(member);
  }

  naive1(input, len) {
    var inStr = String(input);
    var hash = 0;
    for (var i = 0; i < inStr.length; i++) {
      hash = (hash << 5) + hash + inStr.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % len;
  }

  naive2(input, len) {
    let inStr = String(input);
    let intLength = inStr.length / 4;
    let sum = 0;
    for (let j = 0; j < intLength; j++) {
      let chars = inStr.substring(j * 4, (j * 4) + 4).split('');
      let mult = 1;
      for (let k = 0; k < chars.length; k++) {
        sum += chars[k] * mult;
        mult *= 256;
      }
    }

    let chars = inStr.substring(intLength * 4).split('');
    let mult = 1;
    for (let k = 0; k < chars.length; k++) {
      sum += chars[k] * mult;
      mult *= 256;
    }

    return Math.abs(sum) % len;
  }

  show() {
    return this.filter
      .reduce((acc, e, i) => acc += e ? i + ', ' : '', '')
      .slice(0, -2);
  }
  
  mermur3() {

  }
 
  sha256() {
    
  }

  kirschMitzenmacher(f, g, i, len) {
    return (input) => {
      //debugger;
      return ( f(input, len) + i * g(input, len) ) % len;
    };
  } 

  // static 
}



// Removal is impossible without introducing false negatives, 
// but extensions to the bloom filter are possible that allow
// removal e.g. counting filters.


// 1 Use Murmur3 for the best trade-off between speed and uniformity. 
//    Do not use Murmur2 as it is not uniform for inputs that change in small increments.
// 2 Use a cryptographic hash function like SHA-256 for the best uniformity.
// 3 Apply the Kirsch-Mitzenmacher-Optimization to only compute 2 instead of k hash functions hash_i = (hash1 + i x hash2) % (this.filter.length).

