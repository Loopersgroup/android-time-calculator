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
      enabled.reg_piece($scope.arr,$scope.number,'c');
      modes.delete_modes();
      $scope.check('');
    }
    if($s == '-')
    {
      operation.mines();
      $scope.number = '';
      enabled.reg_piece($scope.arr,$scope.number,'c');
      modes.delete_modes();
      //$scope.check('C')
      $scope.check('');
    }
    else if($s == '*')
    {
      //console.log("zarrrrrb ooomad");
      operation.multiply();
      $scope.number = '';
      enabled.reg_piece($scope.arr,$scope.number,'c');
      modes.delete_modes();
      $scope.check('');
      //$scope.check('C');
    }

    else if($s == '%')
    {
      operation.division();
      $scope.number = '';
      enabled.reg_piece($scope.arr,$scope.number,'c');
      modes.delete_modes();
      //$scope.check('C');
      $scope.check('');
    }

    else if($s == 'to')
    {
      console.log(" tooooooomad");
      operation.To();
      $scope.number = '';
      modes.delete_modes();
      //$scope.check('C');
      enabled.reg_piece($scope.arr,$scope.number,'c');
      $scope.check('');
    }

    else if($s == '=')
    {
      operation.equal();
      reform.calculate_piece();
      operation.time_reform();
      console.log("pre Op = " + operation.preOp);
      if(operation.preOp == '+') {
        if (difinition.plusArray[operation.preInputRes][operation.inputRes] == 1)
          $scope.number = modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M " + modes.Mode_Piece.day + " D " +
            modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
        else if (difinition.plusArray[operation.preInputRes][operation.inputRes] == 2) {
          $scope.number = modes.Mode_Time.hour + " : " + modes.Mode_Time.minute + " : " + modes.Mode_Time.second;
        }
        else if(difinition.plusArray[operation.preInputRes][operation.inputRes] == 5)
        {
          $scope.number = modes.Mode_SimpleNum.num + '';
        }
      }
      else if(operation.preOp == '-') {
        if ( difinition.minusArray[operation.preInputRes][operation.inputRes] == 1)
          $scope.number = modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M " + modes.Mode_Piece.day + " D " +
            modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
        else if ( difinition.minusArray[operation.preInputRes][operation.inputRes] == 2) {
          $scope.number = modes.Mode_Time.hour + " : " + modes.Mode_Time.minute + " : " + modes.Mode_Time.second;
        }
        else if( difinition.minusArray[operation.preInputRes][operation.inputRes] == 5)
        $scope.number = modes.Mode_SimpleNum.num + '';
      }
      else if(operation.preOp == '*') {
        if ( difinition.multiplyArray[operation.preInputRes][operation.inputRes] == 1)
          $scope.number = modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M " + modes.Mode_Piece.day + " D " +
            modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
        else if(difinition.multiplyArray[operation.preInputRes][operation.inputRes] == 5)
          $scope.number = modes.Mode_SimpleNum.num + '';
      }
      else if(operation.preOp == 'to') {
        if (operation.preInputRes == 2 && operation.inputRes == 2)
          $scope.number = modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
        else if (operation.preInputRes == 3 && operation.inputRes == 3)
          $scope.number =modes.Todate.to_date + "Days";
      }
      else if(operation.preOp == '%')
        if(difinition.divisionArray[operation.preInputRes][operation.inputRes] == 1)
        $scope.number = modes.Mode_Piece.year + " Y " + modes.Mode_Piece.month + " M " + modes.Mode_Piece.day + " D " +
          modes.Mode_Piece.hour + " H " + modes.Mode_Piece.minute + " Min " + modes.Mode_Piece.second + " S ";
      else if (difinition.divisionArray[operation.preInputRes][operation.inputRes] == 5)
        $scope.number = modes.Mode_SimpleNum.num + '';
      enabled.reg_piece($scope.arr,$scope.number,'c');
      enabled.reset_able();
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

    for(var i=0;i<=$scope.num.length;i++)
    {
      enabled.reg_piece($scope.arr,$scope.number[i]);
    }
    /*
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
    }*/
  }
//--------------------------------------------------------------------------------------------

  $scope.check = function($s) {
    if ($s == '<=') {
      var back_temp;
      if($scope.number != '')
         back_temp = $scope.number.substr($scope.number.length - 1,$scope.number.length);
      else
        back_temp = '';
      if(back_temp == 'o')
      {

      }
      else if(back_temp!='')
      {
        enabled.reg_piece($scope.arr,$scope.number,'c');
        for(var i =0;i<$scope.number.length ; i++)
          console.log("=>" + $scope.number[i]);
        enabled.back_piece(back_temp);
        var ref_num = $scope.number;
        //$scope.check('C');
        $scope.number = '';
        for(var i = 0;i<ref_num.length - 1;i++) {
         //  enabled.reg_piece($scope.arr,ref_num,$scope.number[i]);
          $scope.check(ref_num[i]);
        }
        //$scope.number = $scope.number.replace(/.$/,"");
        //$s=$scope.number.substr($scope.number.length-2,$scope.number.length - 1);
        //$s = '';
      }


     /* var temp_check;
      if($scope.number !=0)
        temp_check = $scope.number.substr($scope.number.length - 1, $scope.number.length);
      else
        temp_check = '';
      console.log("temp-check = " + temp_check);
      if (/\d/.test(temp_check) || temp_check == ":" || temp_check == "/" || temp_check == ".") {
        if (temp_check == '.') {

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
        $s = reform_temp;
        //$s = temp_s;
        //$scope.check(temp_s);
      }

      else if (temp_check == 'c') {
        $scope.number = $scope.number.replace(/.$/, "");
        $scope.number = $scope.number.replace(/.$/, "");
        $scope.number = $scope.number.replace(/.$/, "");
        var t = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $s = t;
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("sec");
        console.log("more than 1 character");
      }
      else if (temp_check == 'n') {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_h = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        if (temp_h == "i") {
          $scope.number = $scope.number.replace(/.$/, "");
          $scope.number = $scope.number.replace(/.$/, "");
          var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
          $scope.number = $scope.number.replace(/.$/, "");
          enabled.back_piece("min");
          $s = temp_s;
        }
        else if (temp_h == 'o') {
          $scope.number = $scope.number.replace(/.$/, "");
          $scope.number = $scope.number.replace(/.$/, "");
          var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
          $scope.number = $scope.number.replace(/.$/, "");
          enabled.back_piece("mon");
          $s = temp_s;
        }
      }
      else if (temp_check == 'h') {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("hour");
        $s = temp_s;
      }
      else if (temp_check == 'd') {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("day");
        $s = temp_s;
      }
      else if (temp_check == 'w') {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("week");
        $s = temp_s;
      }
      else if (temp_check == 'y') {
        $scope.number = $scope.number.replace(/.$/, "");
        var temp_s = $scope.number.substr($scope.number.length - 1, $scope.number.length);
        $scope.number = $scope.number.replace(/.$/, "");
        enabled.back_piece("year");
        $s = temp_s;
      }
      else {
        $s = "";
      }*/
    }
    else if ($s == 'C') {
      console.log("salam");
      enabled.reset_able();
      modes.delete_modes();
      modes.delete_temps();
      $scope.number = "";
      $s = '';
      enabled.reg_piece($scope.arr, $scope.number, 'c');
    }
    else {
      disAll();
      console.log("Test back =" + $scope.number)
      $scope.num($s);
      console.log("pre =" + $scope.number + "$s = " + $s);
      for (var i = 1; i < 6; i++) {
        console.log("Able " + i + " = " + enabled.able[i])
      }
      if (enabled.able[1] != 0)
        modes.input_res[1] = enabled.reg_piece($scope.arr, $scope.number, $s);
      else
        modes.input_res[1] = 0;
      if (enabled.able[2] != 0) {
        modes.input_res[2] = enabled.timeEnabled($scope.arr, $scope.number);
        console.log("Input Res Time = " + modes.input_res[2])
      }
      else
        modes.input_res[2] = 0;

      if (enabled.able[3] != 0)
        modes.input_res[3] = enabled.dateEnabled($scope.arr, $scope.number);
      else
        modes.input_res[3] = 0;
      if (enabled.able[5] != 0)
        modes.input_res[5] = enabled.intEnabled($scope.arr, $scope.number);
      else
        modes.input_res[5] = 0;

      for (var i = 1; i < 6; i++) {
        console.log("Input Res : " + i + " = " + modes.input_res[i])
      }
      $scope.pre_number = $s
    }
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
