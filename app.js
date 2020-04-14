angular
  .module("weatherApp", [])

  .controller("weatherController", [
    "$scope",
    "$http",
    function ($scope, $http) {
      $scope.test = "hahah";
      $scope.chanelInfo = {
        heading: "Open weather API",
        subheading: "Dhouha Mansour",
        subheading2: {
          name: "check bla bla",
          link: "http://www.youtube.com",
        },
      };

      $http({
        method: "GET",
        url: "http://ip-api.com/json",
      }).then(function (response) {
        $scope.lat = response.data.lat;
        $scope.lon = response.data.lon;

        var apiKey = "ffd1646653203a8b75c04210bf597e95";
        /*
        var openWeatherUrl =
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          $scope.lat +
          "&lon=" +
          $scope.lon +
          "&appid=" +
          apiKey;
*/
        $http({
          method: "GET",
          url:
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            $scope.lat +
            "&lon=" +
            $scope.lon +
            "&appid=" +
            apiKey,
        }).then(function (response) {
          $scope.description = response.data.weather[0].description;
          $scope.speed = (2.237 * response.data.wind.speed).toFixed(1) + " mph";
          $scope.name = response.data.name;
          $scope.temp = response.data.main.temp;
          $scope.fTemp = ($scope.temp * (9 / 5) - 459.67).toFixed(1) + " (°F)";
          $scope.cTemp = ($scope.temp - 273).toFixed(1) + " (°C)";
          $scope.icon =
            "https://openweathermap.org/img/w/" +
            response.data.weather[0].icon +
            ".png";

          switch ($scope.description) {
            case "few clouds": {
              $scope.weatherBackground = {
                background:
                  "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')",
                "background-size": "cover",
              };
              break;
            }
            case "thunderstorm": {
              $scope.weatherBackground = {
                background:
                  "url('https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60')",
                "background-size": "cover",
              };
              break;
            }
            case "rain": {
              $scope.weatherBackground = {
                background:
                  "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60')",
                "background-size": "cover",
              };
              break;
            }
            case "snow": {
              $scope.weatherBackground = {
                background:
                  "url('https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60')",
                "background-size": "cover",
              };
              break;
            }
            /* there are more cases */
            default:
              $scope.weatherBackground = {
                background:
                  "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')",
                "background-size": "cover",
              };
              break;
          }
        });
      });
    },
  ]);
