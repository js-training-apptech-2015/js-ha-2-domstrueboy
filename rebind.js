function rebind(fn, ctx) {
    var fn1 = bind(fn.prop || fn, ctx);
    fn1.prop = fn.prop || fn;
    return fn1;
}
