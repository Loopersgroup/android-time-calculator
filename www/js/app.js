// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var app=angular.module('starter', ['ionic','services']);

app.run(function($ionicPlatform) {
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
})
app.controller('basic', function($scope,regex,enabled,difinition){
  $scope.arr={
    num1:false,
    num2:false,
    num3:false,
    num4:false,
    num5:false,
    num6:false,
    num7:false,
    num8:false,
    num9:false,
    num0:false,
    slash:true,
    colon:true,
    plus:true,
    sub:true,
    dot:true,
    div:true,
    multi:true,
    to:true,
    year:true,
    mon:true,
    week:true,
    day:true,
    hour:true,
    min:true,
    sec:true
  };
  //   $scope.matrix();
  $scope.number='';
  console.log($scope.number);
  //time_reg($scope.number);
  //date_reg($scope.number);
  $scope.temp='';
  $scope.num=function($n)
  {
    $scope.number += $n;
  }
//-------------------------------------------------------------------------------------------
//  $scope.date_time_reg = function($num,$s)
//  {
//    var c=$num + $s;
//    if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
//    {
//      console.log("true1");
//      return 2;
//    }
//    else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/$/.test(c))
//    {
//      console.log("true2");
//      return 1;
//    }
//    else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
//    {
//      console.log("true3");
//      return 1;
//    }
//    else if(/\d{4,5}\/$/.test(c))
//    {
//      console.log("true4");
//      return 1;
//    }
//    else if(/\d{4}$/.test(c))
//    {
//      console.log("true5");
//      return 1;
//    }
//
//    if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
//    {
//      console.log("true1");
//      return 1;
//    }
//    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
//    {
//      console.log("true2")
//      return 1;
//    }
//    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
//    {
//      console.log("true3")
//      return 1;
//    }
//    else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
//    {
//      console.log("true4")
//      return 1;
//    }
//    else if(/^(?:[01]?\d|2[0-3])$/.test(c))
//    {
//      console.log("true5")
//      return 1;
//    }
//    else if(/\d{1}/.test(c))
//    {
//      console.log("true6")
//      return 1;
//    }
//    else{
//      console.log(false);
//    }
//  };

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
    disAll();
    var t = regex.time_reg($scope.arr,$scope.number,$s);
   // var d = regex.date_reg($scope.arr,$scope.number,$s);


    $scope.num($s);
    if(t==2)
    {

    }
    if(t)
    {

    }
      if(t/*|d*/)
      {
        $scope.temp+=$s;
      }
      else
      {
        console.log("false");
      }
  }

  //========= Disable All============================
  var disAll=function()
  {
    $scope.arr.num1=true;
    $scope.arr.num2=true;
    $scope.arr.num3=true;
    $scope.arr.num4=true;
    $scope.arr.num5=true;
    $scope.arr.num6=true;
    $scope.arr.num7=true;
    $scope.arr.num8=true;
    $scope.arr.num9=true;
    $scope.arr.num0=true;
    $scope.arr.plus=true;
    $scope.arr.sub=true;
    $scope.arr.div=true;
    $scope.arr.multi=true;
    $scope.arr.to=true;
    $scope.arr.year=true;
    $scope.arr.week=true;
    $scope.arr.mon=true;
    $scope.arr.day=true;
    $scope.arr.hour=true;
    $scope.arr.min=true;
    $scope.arr.sec=true;
    $scope.arr.slash=true;
    $scope.arr.dot=true;
    $scope.arr.colon=true;
  }
});
