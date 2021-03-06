test([{
  name: "base 1",
  test: function () {
    setTimeout(async(function () {
      assert("OK");
    }));
  }
}]);
wru.test([{
  name: "base 2",
  test: function () {
    wru.assert("OK");
  }
}]);
wru.test([{
  setup: function (tmp) {
    tmp.timeout = wru.timeout;
    wru.timeout = 20000;
  },
  name: "base 3",
  test: function () {
    setTimeout(wru.async(function(){
      wru.assert(true);
    }), 15000);
  },
  teardown: function (tmp) {
    wru.timeout = tmp.timeout;
  }
}]);