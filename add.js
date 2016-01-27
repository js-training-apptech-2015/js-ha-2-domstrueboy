function add(n) {

    var result = {};

    result.add = arguments.callee;

    result.valueOf = function() {
      return result.accumulator;
    };

    var thisThis = this;

    if(thisThis.accumulator){
      result.accumulator = thisThis.accumulator + n;
    } else {
      result.accumulator =  n;
    }

    return result;
}
