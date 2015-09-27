// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
var app=angular.module('starter',[]);
app.controller('basic', function ($scope) {
    console.log($scope.number);
    //time_reg($scope.number);
  date_reg($scope.number)
/*$scope.time_reg = function($num)
{
  var c=$num;
  console.log($num);
  //var path=/([0-1][0-9])|2[0-3]/;
  //var path=/(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)/;
  if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c)==true)
  {
    console.log("true1");
    return 2;
  }
  else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
  {
    console.log("true2")
    return 1;
  }
  else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
  {
    console.log("true3")
    return 1;
  }
  else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
  {
    console.log("true4")
    return 1;
  }
  else if(/^(?:[01]?\d|2[0-3])$/.test(c))
  {
    console.log("true5")
  }
  //else if(/\d{1}/.test(c))
  //{
  //  console.log("true6")
  //}
  //console.log(/(([0-1]?[0-9])|2[0-3])/.test("23"));
  //console.log(path.test(c));
  else
    console.log(false);
}
*/
})


date_reg=function($num)
{
  var c=$num;
  c="2015/15/";
  if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
  {
    console.log("true1");
  }
  else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/$/.test(c))
  {
    console.log("true2");
  }
  else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
  {
    console.log("true3");
  }
  else if(/\d{4,5}\/$/.test(c))
  {
    console.log("true4");
  }
  else if(/\d{4}$/.test(c))
  {
    console.log("true5");
  }

}
