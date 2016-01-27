function bind() {

      var args = Array.prototype.slice.call(arguments);

      var thisThis = this;

      var fn;

      if(typeof thisThis === 'function'){
        fn = thisThis;
      } else {
        fn = args.shift();
      }

    	var ctx = args.shift();

    	if(typeof fn === 'function' && typeof ctx === 'object' && ctx !== null){
    		return function(){
		        return fn.apply(ctx, args.concat(Array.prototype.slice.call(arguments)));
		    }
    	} else {
    		console.log("Invalid arguments!")
    		return 0;
    	}
}

Function.prototype.bind = bind;
