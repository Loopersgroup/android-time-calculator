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
      operation.To();
      $scope.number = '';
      modes.delete_modes();
      $scope.check('C');

    }

    else if($s == '=')
    {
      operation.equal();
      reform.calculate_piece();

      $scope.number =modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M "+ modes.Mode_Piece.day + " D " +
        modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
      $scope.number =modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M "+ modes.Mode_Piece.day + " D " +
        modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
      modes.delete_temps();
      modes.delete_modes();

    }

  };
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
  $scope.number='';
  $scope.temp='';

  var reform_temp;
  $scope.num=function($n)
  {
    $scope.number += $n;
  }
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
  };
//--------------------------------------------------------------------------------------------

  $scope.check = function($s)
  {
    if($s=='<=')
    {
      var temp_check=$scope.number.substr($scope.number.length - 1,$scope.number.length);
      if(/\d/.test(temp_check) || temp_check==":" || temp_check == "/" || temp_check==".")
      {
        if(temp_check=='.')
        {

        }
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("num");
        $scope.piece_reform();
        $s=reform_temp;
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
      enabled.reset_able();
      $scope.number = "";

      $s = '';
      enabled.reg_piece($scope.arr,$scope.number,'c');
    }
    disAll();
    $scope.num($s);
    modes.input_res[1] = enabled.reg_piece($scope.arr, $scope.number, $s);
    modes.input_res[2] = enabled.timeEnabled($scope.arr, $scope.number);
    modes.input_res[3] = enabled.dateEnabled($scope.arr, $scope.number);
    modes.input_res[5] = enabled.intEnabled($scope.arr,$scope.number);

    $scope.pre_number = $s;
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
