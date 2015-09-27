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
  date_reg($scope.number);
  $scope.temp='';

$scope.time_reg = function($num,$s)
{
  var c=$num+$s;
  console.log($num);
  //var path=/([0-1][0-9])|2[0-3]/;
  //var path=/(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)/;
  if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
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
  else if(/\d{1}/.test(c))
  {
    console.log("true6")
  }
  else
    console.log(false);
}


$scope.date_reg=function($num,$s)
{
  var c=$num+$s;
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
};
//--------------------------------------------------------------------------------------------
$scope.matrix=function()
{
  ////////////////////////created by Sarah
  var i;
  var plusArray = new Array(5);
  for (i = 0; i < 5; i++)
    plusArray[i] = new Array(5);
  plusArray[0][0] = 1;
  plusArray[0][1] = 2;
  plusArray[0][2] = 4;
  plusArray[0][3] = 4;
  plusArray[0][4] = 0;
  plusArray[1][0] = 2;
  plusArray[1][1] = 0;
  plusArray[1][2] = 4;
  plusArray[1][3] = 0;
  plusArray[1][4] = 0;
  plusArray[2][0] = 4;
  plusArray[2][1] = 0;
  plusArray[2][2] = 0;
  plusArray[2][3] = 0;
  plusArray[2][4] = 0;
  plusArray[3][0] = 4;
  plusArray[3][1] = 0;
  plusArray[3][2] = 0;
  plusArray[3][3] = 0;
  plusArray[3][4] = 0;
  plusArray[4][0] = 0;
  plusArray[4][1] = 0;
  plusArray[4][2] = 0;
  plusArray[4][3] = 0;
  plusArray[4][4] = 5;
//****************************************
  var minusArray = new Array(5);
  for (i = 0; i < 5; i++)
    minusArray[i] = new Array(5);
  minusArray[0][0] = 1;
  minusArray[0][1] = 0;
  minusArray[0][2] = 0;
  minusArray[0][3] = 0;
  minusArray[0][4] = 0;
  minusArray[1][0] = 2;
  minusArray[1][1] = 0;
  minusArray[1][2] = 0;
  minusArray[1][3] = 0;
  minusArray[1][4] = 0;
  minusArray[2][0] = 4;
  minusArray[2][1] = 0;
  minusArray[2][2] = 0;
  minusArray[2][3] = 0;
  minusArray[2][4] = 0;
  minusArray[3][0] = 4;
  minusArray[3][1] = 0;
  minusArray[3][2] = 0;
  minusArray[3][3] = 0;
  minusArray[3][4] = 0;
  minusArray[4][0] = 0;
  minusArray[4][1] = 0;
  minusArray[4][2] = 0;
  minusArray[4][3] = 0;
  minusArray[4][4] = 5;
//****************************************
  var toArray = new Array(5);
  for (i = 0; i < 5; i++)
    toArray[i] = new Array(5);
  toArray[0][0] = 0;
  toArray[0][1] = 0;
  toArray[0][2] = 0;
  toArray[0][3] = 0;
  toArray[0][4] = 0;
  toArray[1][0] = 0;
  toArray[1][1] = 1;
  toArray[1][2] = 0;
  toArray[1][3] = 0;
  toArray[1][4] = 0;
  toArray[2][0] = 0;
  toArray[2][1] = 0;
  toArray[2][2] = 1;
  toArray[2][3] = 0;
  toArray[2][4] = 0;
  toArray[3][0] = 0;
  toArray[3][1] = 0;
  toArray[3][2] = 0;
  toArray[3][3] = 1;
  toArray[3][4] = 0;
  toArray[4][0] = 0;
  toArray[4][1] = 0;
  toArray[4][2] = 0;
  toArray[4][3] = 0;
  toArray[4][4] = 0;
//***********************************
  var multiplyArray = new Array(5);
  for (i = 0; i < 5; i++)
    multiplyArray[i] = new Array(5);
  multiplyArray[0][0] = 0;
  multiplyArray[0][1] = 0;
  multiplyArray[0][2] = 0;
  multiplyArray[0][3] = 0;
  multiplyArray[0][4] = 1;
  multiplyArray[1][0] = 0;
  multiplyArray[1][1] = 0;
  multiplyArray[1][2] = 0;
  multiplyArray[1][3] = 0;
  multiplyArray[1][4] = 0;
  multiplyArray[2][0] = 0;
  multiplyArray[2][1] = 0;
  multiplyArray[2][2] = 0;
  multiplyArray[2][3] = 0;
  multiplyArray[2][4] = 0;
  multiplyArray[3][0] = 0;
  multiplyArray[3][1] = 0;
  multiplyArray[3][2] = 0;
  multiplyArray[3][3] = 0;
  multiplyArray[3][4] = 0;
  multiplyArray[4][0] = 1;
  multiplyArray[4][1] = 0;
  multiplyArray[4][2] = 0;
  multiplyArray[4][3] = 0;
  multiplyArray[4][4] = 5;
//***************************************
  var divisionArray = new Array(5);
  for (i = 0; i < 5; i++)
    divisionArray[i] = new Array(5);
  divisionArray[0][0] = 0;
  divisionArray[0][1] = 0;
  divisionArray[0][2] = 0;
  divisionArray[0][3] = 0;
  divisionArray[0][4] = 1;
  divisionArray[1][0] = 2;
  divisionArray[1][1] = 0;
  divisionArray[1][2] = 0;
  divisionArray[1][3] = 0;
  divisionArray[1][4] = 2;
  divisionArray[2][0] = 0;
  divisionArray[2][1] = 0;
  divisionArray[2][2] = 0;
  divisionArray[2][3] = 0;
  divisionArray[2][4] = 3;
  divisionArray[3][0] = 0;
  divisionArray[3][1] = 0;
  divisionArray[3][2] = 0;
  divisionArray[3][3] = 0;
  divisionArray[3][4] = 4;
  divisionArray[4][0] = 0;
  divisionArray[4][1] = 0;
  divisionArray[4][2] = 0;
  divisionArray[4][3] = 0;
  divisionArray[4][4] = 5;
//**********************************
}
//--------------------------------------------------------------------------------------------

$scope.check=function($s)
{
  var t = time_reg($scope.temp,$s);
  var d = date_reg($scope.temp,$s);

  if(t|d)
  {
    $scope.temp+=$s;
  }
}
});
