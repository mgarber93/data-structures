describe('double linked List', function() {
  var dLinkList;

  beforeEach(function() {
    dLinkList = DLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dLinkList).to.have.property('head');
    expect(dLinkList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(dLinkList.addToTail).to.be.a('function');
    expect(dLinkList.removeHead).to.be.a('function');
    expect(dLinkList.contains).to.be.a('function');
    expect(dLinkList.addToHead).to.be.a('function');
    expect(dLinkList.removeTail).to.be.a('function');
  });

  it('should designate a new head when new nodes are added', function() {
    dLinkList.addToHead(4);
    expect(dLinkList.head.value).to.equal(4);
    dLinkList.addToHead(5);
    expect(dLinkList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dLinkList.addToHead(4);
    expect(dLinkList.removeHead()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    dLinkList.addToTail(4);
    dLinkList.addToTail(5);
    expect(dLinkList.tail.value).to.equal(5);
    dLinkList.removeTail();
    expect(dLinkList.tail.value).to.equal(4);
  });

  it('should designate a new tail when new nodes are added', function() {
    dLinkList.addToTail(4);
    expect(dLinkList.tail.value).to.equal(4);
    dLinkList.addToTail(5);
    expect(dLinkList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    dLinkList.addToTail(4);
    dLinkList.addToTail(5);
    expect(dLinkList.head.value).to.equal(4);
    dLinkList.removeHead();
    expect(dLinkList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dLinkList.addToTail(4);
    expect(dLinkList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dLinkList.addToTail(4);
    dLinkList.addToTail(5);
    expect(dLinkList.contains(4)).to.equal(true);
    expect(dLinkList.contains(5)).to.equal(true);
    expect(dLinkList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dLinkList.addToTail(4);
    dLinkList.addToTail(5);
    dLinkList.removeHead();
    expect(dLinkList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dLinkList
  it('should return null if you call .removeHead on an empty list', function() {
    expect(dLinkList.removeHead()).to.equal(null);
  });

  it('should return false if you call .contains on an empty list', function() {
    expect(dLinkList.contains()).to.equal(false);
  });
  
});
