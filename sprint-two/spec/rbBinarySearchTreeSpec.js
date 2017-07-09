describe('Red-Black BinarySearchTree', function() {
  var rbBinarySearchTree;

  beforeEach(function() {
    rbBinarySearchTree = new RbBinarySearchTree();
  });

  it('should have methods named "contains", and "depthFirstLog. Nodes should have "insert"', function() {
    let rbNode = new RBNode(14);
    expect(rbBinarySearchTree.addChild).to.be.a('function');
    expect(rbBinarySearchTree.updateNode).to.be.a('function');
    expect(rbBinarySearchTree.pathLength).to.be.a('function');
    expect(rbNode.insert).to.be.a('function');
  });

  it('the root node color should be black', function() {
    rbBinarySearchTree.addChild(7);
    expect(rbBinarySearchTree.root.isRed).to.equal(false);
  });

  it('nodes below the root node color should be red', function() {
    rbBinarySearchTree.addChild(3);
    rbBinarySearchTree.addChild(2);
    rbBinarySearchTree.addChild(7);
    expect(rbBinarySearchTree.root.right.isRed).to.equal(true);
  });

  it('should insert values at the correct location in the tree', function() {
    rbBinarySearchTree.addChild(5);
    rbBinarySearchTree.addChild(4);
    rbBinarySearchTree.addChild(6);
    rbBinarySearchTree.addChild(3);
    expect(rbBinarySearchTree.root.value).to.equal(5);
    expect(rbBinarySearchTree.root.left.value).to.equal(4);
    expect(rbBinarySearchTree.root.left.left.value).to.equal(3);
    expect(rbBinarySearchTree.root.right.value).to.equal(6);
    expect(rbBinarySearchTree.root.right.getColor()).to.equal('black');
    expect(rbBinarySearchTree.root.left.getColor()).to.equal('black');

  });

  it('should have a working "contains" method', function() {
    rbBinarySearchTree.addChild(2);
    rbBinarySearchTree.addChild(3);
    rbBinarySearchTree.addChild(7);
    expect(rbBinarySearchTree.contains(7)).to.equal(true);
    expect(rbBinarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    rbBinarySearchTree.addChild(5);
    rbBinarySearchTree.addChild(2);
    rbBinarySearchTree.addChild(3);
    rbBinarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });
});
