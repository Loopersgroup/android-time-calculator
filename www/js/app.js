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
});
app.controller('basic', function($scope,regex,enabled,difinition,modes,operation,reform){
  enabled.reset_able();
                                          //========== Calculation ======================
  $scope.operation = function ($s)
  {
    if($s == '+')
    {
      operation.plus();
      $scope.number = '';
      modes.delete_modes();
      $scope.check('C');
    }
    if($s == '-')
    {
      operation.mines();
      $scope.number = '';
      modes.delete_modes();
      $scope.check('C')
    }
    else if($s == '*')
    {
      //console.log("zarrrrrb ooomad");
      $scope.num('*');
      operation.multiply();

    }

    else if($s == '%')
    {

      $scope.num('%');
      operation.division();

    }

    else if($s == 'to')
    {
      console.log(" tooooooomad");
      operation.To();
      $scope.number = '';
      modes.delete_modes();
      $scope.check('C');

    }

    else if($s == '=')
    {
      operation.equal();
      reform.calculate_piece();
      console.log("pre Op = "+operation.preOp);
      //if(operation.preOp == '+')
        $scope.number =modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M "+ modes.Mode_Piece.day + " D " +
          modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
      //else if(operation.preOp == 'to')
        $scope.number =modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M "+ modes.Mode_Piece.day + " D " +
          modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
      modes.delete_temps();
      modes.delete_modes();

    }

  }





                                          //========= Input ===========================
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

  $scope.pre_number='';
  //   $scope.matrix();
  $scope.number='';
  //time_reg($scope.number);
  //date_reg($scope.number);
  $scope.temp='';

  var reform_temp;
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

  //======================== piece =============
 $scope.piece_reform = function ()
  {
    var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
    if(temp_s == 'c') {
      $scope.number = $scope.number.replace(/.$/, "");
      $scope.number = $scope.number.replace(/.$/, "");
      $scope.number = $scope.number.replace(/.$/, "");
      reform_temp = 'sec';
      enabled.back_piece("sec");
    }
    else if(temp_s == 'n')
    {
      $scope.number = $scope.number.replace(/.$/, "");
      var s= $scope.number.substr($scope.number.length - 1, $scope.number.length);
      if(s == 'i')
      {
        reform_temp = 'min';
        enabled.back_piece("min");
      }
      else if(s == 'o') {
        reform_temp = 'mon';
        enabled.back_piece("mon");
      }
      $scope.number = $scope.number.replace(/.$/, "");
      $scope.number = $scope.number.replace(/.$/, "");
    }
    else if(temp_s == 'd')
    {
      $scope.number = $scope.number.replace(/.$/, "");
      reform_temp = 'd';
      enabled.back_piece("day");
    }
    else if(temp_s == 'w')
    {
      $scope.number = $scope.number.replace(/.$/,"");
      enabled.back_piece("week");
      reform_temp = 'w'
    }
    else if(temp_s == 'y')
    {
      $scope.number = $scope.number.replace(/.$/,"");
      enabled.back_piece("year");
      reform_temp = 'y';
    }
    else
    {
      $scope.number = $scope.number.replace(/.$/,"");
      reform_temp = temp_s;
    }
  }
//--------------------------------------------------------------------------------------------

  $scope.check = function($s)
  {
    console.log("loaaaaadd"+parseFloat((modes.Mode_Piece.day)%1))
    if($s=='<=')
    {
      var temp_check=$scope.number.substr($scope.number.length - 1,$scope.number.length);
      console.log("temp-check = " + temp_check);
      if(/\d/.test(temp_check) || temp_check==":" || temp_check == "/" || temp_check==".")
      {
        if(temp_check=='.')
        {

        }
        $scope.number = $scope.number.replace(/.$/, "");
        console.log("test =" + $scope.number);
        //enabled.dateEnabled($scope.check,$scope.arr,$scope.number,$s);
        //var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        //console.log("temp_s =" + temp_s);
        //$scope.number = $scope.number.replace(/.$/, "");
        //enabled.reg_piece($scope.arr,$scope.number,'<=');
        enabled.back_piece("num");
        $scope.piece_reform();
        $s=reform_temp;
        //$s = temp_s;
        //$scope.check(temp_s);
      }

      else if(temp_check=='c')
      {
        $scope.number = $scope.number.replace(/.$/, "");
        $scope.number = $scope.number.replace(/.$/, "");
        $scope.number = $scope.number.replace(/.$/, "");
        var t= $scope.number.substr($scope.number.length-1,$scope.number.length);
        $s = t;
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("sec");
        console.log("more than 1 character");
      }
      else if(temp_check == 'n')
      {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_h = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        if(temp_h == "i")
        {
          $scope.number = $scope.number.replace(/.$/, "");
          $scope.number = $scope.number.replace(/.$/, "");
          var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
          $scope.number = $scope.number.replace(/.$/, "");
          enabled.back_piece("min");
          $s = temp_s;
        }
        else if (temp_h == 'o')
        {
          $scope.number = $scope.number.replace(/.$/, "");
          $scope.number = $scope.number.replace(/.$/, "");
          var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
          $scope.number = $scope.number.replace(/.$/, "");
          enabled.back_piece("mon");
          $s = temp_s;
        }
      }
      else if(temp_check == 'h')
      {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("hour");
        $s = temp_s;
      }
      else if(temp_check == 'd')
      {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("day");
        $s = temp_s;
      }
      else if(temp_check =='w')
      {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("week");
        $s = temp_s;
      }
      else if(temp_check == 'y')
      {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("year");
        $s = temp_s;
      }
      else
      {
        $s="";
      }
    }
    if($s=='C')
    {
      console.log("salam");
      enabled.reset_able();
      $scope.number = "";

      $s = '';
      enabled.reg_piece($scope.arr,$scope.number,'c');
    }
    disAll();
    console.log("Test back =" + $scope.number)
      $scope.num($s);
      console.log("pre =" + $scope.number + "$s = " + $s);;
   // if(enabled.able[1])
      modes.input_res[1] = enabled.reg_piece($scope.arr, $scope.number, $s);
      console.log("modes = " + modes.input_res[1]);
    //if(enabled.able[2])
      modes.input_res[2] = enabled.timeEnabled($scope.arr, $scope.number);

    //if(enabled.able[3])
      modes.input_res[3] = enabled.dateEnabled($scope.arr, $scope.number);

//    if(enabled.able[5])
      modes.input_res[5] = enabled.intEnabled($scope.arr,$scope.number);

      $scope.pre_number = $s;
    console.log(" Time REs =" + modes.input_res[2]);
    console.log("S =" + $scope.number)
    console.log("Dotttttttt =" + ($scope.number)%1);
  };

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
