// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var app=angular.module('starter', ['ionic']);

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
  app.controller('basic',function($scope,modes,enabled,regex) {
  $scope.number='';
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
    }
    var $str='1234';

    $scope.num=function($n)
    {
      $scope.number += $n;
    }



//     regex.time_reg();
//    //
//    //$scope.time_reg = function($num,$present)
//    //{
//    //  var c=$num+$present;
//    //  console.log($num);
//    //
//    //  if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
//    //  {
//    //   // enabled.output.timeEnabled($num,$s);
//    //    console.log("true1");
//    //    return 2;
//    //  }
//    //  else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
//    //  {
//    //    console.log("true2")
//    //    return 1;
//    //  }
//    //  else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
//    //  {
//    //    console.log("true3")
//    //    return 1;
//    //  }
//    //  else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
//    //  {
//    //    console.log("true4")
//    //    return 1;
//    //  }
//    //  else if(/^(?:[01]?\d|2[0-3])$/.test(c))
//    //  {
//    //    console.log("true5");
//    //    return 1;
//    //  }
//    //  else if(/\d[01]/.test(c))
//    //  {
//    //    console.log("true6")
//    //    return 1;
//    //  }
//    //  else {
//    //    return 0;
//    //    console.log(false);
//    //  }
//    //}
//
////-------------------------------------------------------------------------------------------
////    $scope.date_reg = function($num,$present)
////    {
////      var c=$num+$present;
////      if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
////      {
////        console.log("true1");
////        return 2;
////      }
////      else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/$/.test(c))
////      {
////        console.log("true2");
////        return 1;
////      }
////      else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
////      {
////        console.log("true3");
////        return 1;
////      }
////      else if(/\d{4,5}\/$/.test(c))
////      {
////        console.log("true4");
////      }
////      else if(/\d{4}$/.test(c))
////      {
////        console.log("true5");
////      }
////    };
//
//    regex.date_reg();
////-------------------------------------------------------------------------------------------
//    $scope.date_time_reg = function($num,$present)
//    {
//      var c=$num + $present;
//      if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
//      {
//        console.log("true1");
//        return 2;
//      }
//      else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/$/.test(c))
//      {
//        console.log("true2");
//        return 1;
//      }
//      else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
//      {
//        console.log("true3");
//        return 1;
//      }
//      else if(/\d{4,5}\/$/.test(c))
//      {
//        console.log("true4");
//        return 1;
//      }
//      else if(/\d{4}$/.test(c))
//      {
//        console.log("true5");
//        return 1;
//      }
//
//      if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
//      {
//
//        console.log("true1");
//        return 1;
//      }
//      else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
//      {
//        console.log("true2")
//        return 1;
//      }
//      else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
//      {
//        console.log("true3")
//        return 1;
//      }
//      else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
//      {
//        console.log("true4")
//        return 1;
//      }
//      else if(/^(?:[01]?\d|2[0-3])$/.test(c))
//      {
//        console.log("true5")
//        return 1;
//      }
//      else if(/\d{1}/.test(c))
//      {
//        console.log("true6")
//        return 1;
//      }
//      else{
//        console.log(false);
//      }
//    };
//
////--------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------

      $scope.check=function($s)
      {
        disAll();
        var d = regex.date_reg($scope.number,$s);
        var p = $scope.reg_piece($scope.number,$s);
        if(d)
      {
        console.log("d=1,"+$s);
        enabled.dateEnabled($scope.arr,$scope.number,$s)
      }
        $scope.num($s);


      };


    $scope.reg_piece=function($temp,$present)
    {
      var c=$temp + $present;
      if (/\d/.test($present)) {
        //$scope.main_temp = $scope.temp + $scope.present;
        console.log($present)
        $scope.arr.year=false;
        $scope.arr.mon=false;
        $scope.arr.week=false;
        $scope.arr.day=false;
        $scope.arr.hour=false;
        $scope.arr.min=false;
        $scope.arr.sec=false;
        $scope.arr.num0 = false;
        $scope.arr.num1 = false;
        $scope.arr.num2 = false;
        $scope.arr.num3 = false;
        $scope.arr.num4 = false;
        $scope.arr.num5 = false;
        $scope.arr.num6 = false;
        $scope.arr.num7 = false;
        $scope.arr.num8 = false;
        $scope.arr.num9 = false;
        return 1;
      }
      else if($present == 'y' | $present == 'mon' | $present =='w' |  $present == 'd' |  $present == 'h' | $present == 'min' | $present == 'sec')
      {
        $scope.arr.year=false;
        $scope.arr.mon=false;
        $scope.arr.week=false;
        $scope.arr.day=false;
        $scope.arr.hour=false;
        $scope.arr.min=false;
        $scope.arr.sec=false;
        $scope.arr.num0 = false;
        $scope.arr.num1 = false;
        $scope.arr.num2 = false;
        $scope.arr.num3 = false;
        $scope.arr.num4 = false;
        $scope.arr.num5 = false;
        $scope.arr.num6 = false;
        $scope.arr.num7 = false;
        $scope.arr.num8 = false;
        $scope.arr.num9 = false;
      }
        else {
          console.log("false");
        }

      }

  });

