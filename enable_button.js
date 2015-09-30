var service= angular.module('enable_button',['services']);
services.factory('piece',function($present) {

  var res=new Array(12);
  var j=0;
  $flag_year:0;
  $flag_month:0;
  $flag_week:0;
  $flag_hour:0;
  $flag_minute:0;
  $flag_second:0;
  $dis_year:1;
  $dis_month:1;
  $dis_week:1;
  $dis_day:1;
  $dis_hour:1;
  $dis_minute:1;
  $dis_second:1;
  $disPlus:1;
  $disMinus:1;
  $disMultiply:1;
  $disDivision:1;
  $disTo:1;

  if($present=='y'){
    $flag_year++;
    dis_year:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;
  }
  if($present=='m')
  {
    $flag_month++;
    dis_month:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;
  }
  if($present=='w')
  {
    $flag_week++;
    dis_week:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;
  }
  if($present=='d')
  {
    $flag_day++;
    dis_day:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;
  }
  if($present=='h')
  {
    $flag_hour++;
    dis_hour:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;
  }
  if($present=='m')
  {
    $flag_minute++;
    dis_minute:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;
  }
  if($present=='s')
  {
    $flag_second++;
    dis_second:1;
    disPlus:0;
    disMinus:0;
    disMultiply:0;
    disDivision:0;

  }


});
