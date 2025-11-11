app.config([
  "dataServiceProvider",
  function (dataServiceProvider) {
    dataServiceProvider.config("http://localhost:8000/api");
  },
]);

app.provider("dataService", function () {
  var baseUrl = "";
  this.config = function (url) {
    baseUrl = url;
  };
  this.$get = [
    "$http",
    "$log",
    function ($http, $log) {
      var oDataService = {};
      // TODO: define service operations here
      oDataService.add = function (a, b) {
        return $http({
          url: baseUrl + "/add/" + a + "/" + b,
          method: "GET",
        });
      };
      oDataService.mul = function (a, b) {
        return $http({
          url: baseUrl + "/mul/" + a + "/" + b,
          method: "GET",
        });
      };
      oDataService.sub = function (a, b) {
        return $http({
          url: baseUrl + "/sub/" + a + "/" + b,
          method: "GET",
        });
      };

      return oDataService;
    },
  ];
});
