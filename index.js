function receivesAFunction(test) {
    test();
  }

function returnsANamedFunction() {
    return function named() {
        console.log('This is Liza.');
    }
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}