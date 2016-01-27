describe("bind", function(){

	var o = {
	    x: 1,
	    foo: function (a, b) {
	        return this.x + a + b;
    	}
	};

	var f1 = o.foo.bind({x:2}, 1);
	var f2 = bind(o.foo, {x:2}, 1);
	var f3 = bind(bind(o.foo, {x:2}), {}, 1);

  it("Test of bind function: Equal f1(5) and f2(5) - passed", function() {

    assert.equal(f1(5), f2(5));

  });

    it("Test of bind function: Equal f1(5) and f3(5) - passed", function() {

    assert.equal(f1(5), f3(5));

  });

});

describe("rebind", function(){

	var o = {
	    x: 1,
	    foo: function (a, b) {
	        return this.x + a + b;
	    }
	};

	var f1 = rebind(o.foo, {x:2});
	var f2 = rebind(f1, {x:3});

  it("Test of rebind function: f1(1,1) equals 4 - passed", function() {

    assert.equal(f1(1,1), 4);

  });

    it("Test of rebind function: f2(1,1) equals 5 - passed", function() {

    assert.equal(f2(1,1), 5);

  });

});

describe("add", function(){

  it("Test of add function: add(1).add(2).add(3).add(4) + 5 equals 15 - passed", function() {

    assert.equal(add(1).add(2).add(3).add(4) + 5, 15);

  });

  it("Test of add function: add(1).add(2) + 1 equals 4 - passed", function() {

    assert.equal(add(1).add(2) + 1, 4);

  });

  it("Test of add function: add(1).add(2).add(1).add(2) + 1 equals 7 - passed", function() {

    assert.equal(add(1).add(2).add(1).add(2) + 1, 7);

  });

});