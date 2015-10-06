app.factory('enabled',function(modes){
  //enabled.changeStatus($arr,'+');
  var output={};
  output.flags={
    time:0,
    date:0
  }

  var $m1_flag=0;
  var $m2_flag=0;
  var $d1_flag=0;
  var $d2_flag=0;
  var $slash_flag=0;
  var check_temp;
  output.dateEnabled=function($arr,$string,$present) {
    check_temp=$string+$present;
    if($d2_flag==1)
    {
      $arr.to = false;
      $arr.plus = false;
      $arr.sub = false;

    }
    if ((check_temp.search("y")>0 || check_temp.search("mon")>0 || check_temp.search("w")>0 || check_temp.search("d")>0 ||
      check_temp.search("h")>0 || check_temp.search("min")>0 || check_temp.search("sec")>0 || check_temp.search(":")>0 ))
    {

    }
    else {
      var $sample = $string + $present;
      if ($present == '/') {
        $slash_flag += 1;
      }
      if ((/\d\/\d$/).test($sample)) {
        $m1_flag = 1;
      }
      if ((/\d\/\d\d$/).test($sample)) {
        $m2_flag = 1;
      }
      if ((/\d\/\d?\d\/\d$/).test($sample)) {
        $d1_flag = 1;
      }
      if ((/\d\/\d?\d\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|(10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30))$/).test($sample)) {
        $d2_flag = 1;
        modes.Mode_Date.day+=$present;
      }


      if (/\d/.test($present) && $slash_flag == 0) {
        $arr.num0 = false;
        $arr.num1 = false;
        $arr.num2 = false;
        $arr.num3 = false;
        $arr.num4 = false;
        $arr.num5 = false;
        $arr.num6 = false;
        $arr.num7 = false;
        $arr.num8 = false;
        $arr.num9 = false;
        $arr.slash = false;
        modes.Mode_Date.year+=$present;
      }
      if ($present == '/' && $m1_flag == 0 && $slash_flag == 1) {
        $arr.num0 = false;
        $arr.num1 = false;
        $arr.num2 = false;
        $arr.num3 = false;
        $arr.num4 = false;
        $arr.num5 = false;
        $arr.num6 = false;
        $arr.num7 = false;
        $arr.num8 = false;
        $arr.num9 = false;
      }

      if ($present == 0 && $m1_flag == 1 && $slash_flag == 1) {
        $arr.num1 = false;
        $arr.num2 = false;
        $arr.num3 = false;
        $arr.num4 = false;
        $arr.num5 = false;
        $arr.num6 = false;
        $arr.num7 = false;
        $arr.num8 = false;
        $arr.num9 = false;
        modes.Mode_Date.month+=$present;
      }

      if ($present == 1 && $m1_flag == 1 && $slash_flag == 1 && $m2_flag!=1) {
        $arr.num0 = false;
        $arr.num1 = false;
        $arr.num2 = false;
        $arr.slash = false;
        modes.Mode_Date.month+=$present;
      }
      if ($present == 1 && $m1_flag == 1 && $slash_flag == 1 && $m2_flag==1) {
        $arr.slash = false;
        modes.Mode_Date.month+=$present;
      }

      if ($present >= 2 && $m1_flag == 1 && $slash_flag == 1) {
        $arr.slash = false;
        modes.Mode_Date.month+=$present;
      }

      if ($present == /\d/ && $m2_flag == 1 && $slash_flag == 1) {
        $arr.slash = false;
        modes.Mode_Date.month+=$present;
      }

      if ($present == '/' && $slash_flag == 2 && $d1_flag == 0) {
        $arr.num0 = false;
        $arr.num1 = false;
        $arr.num2 = false;
        $arr.num3 = false;
        $arr.num4 = false;
        $arr.num5 = false;
        $arr.num6 = false;
        $arr.num7 = false;
        $arr.num8 = false;
        $arr.num9 = false;

      }

      if (/\d/.test($present) && $slash_flag == 2 && $d1_flag == 1) {
        $arr.to = false;
        $arr.plus = false;
        $arr.sub = false;
        if ($present == 0) {
          $arr.num1 = false;
          $arr.num2 = false;
          $arr.num3 = false;
          $arr.num4 = false;
          $arr.num5 = false;
          $arr.num6 = false;
          $arr.num7 = false;
          $arr.num8 = false;
          $arr.num9 = false;
          modes.Mode_Date.day+=$present;
        }
        if ($present == 1) {
          $arr.num0 = false;
          $arr.num1 = false;
          $arr.num2 = false;
          $arr.num3 = false;
          $arr.num4 = false;
          $arr.num5 = false;
          $arr.num6 = false;
          $arr.num7 = false;
          $arr.num8 = false;
          $arr.num9 = false;
          modes.Mode_Date.day+=$present;
        }
        if ($present == 2) {
          $arr.num0 = false;
          $arr.num1 = false;
          $arr.num2 = false;
          $arr.num3 = false;
          $arr.num4 = false;
          $arr.num5 = false;
          $arr.num6 = false;
          $arr.num7 = false;
          $arr.num8 = false;
          modes.Mode_Date.day+=$present;
            if(leap(modes.Mode_Date.year)==1){
              $arr.num9 = false;
            }
        }
        if ($present == 3) {
          modes.Mode_Date.day+=$present;
          if(modes.Mode_Date.month == 2){
            $arr.plus = false;
            $arr.sub = false;
            $arr.to = false;
          }
          if(modes.Mode_Date.month==1 || modes.Mode_Date.month==3 || modes.Mode_Date.month==5 || modes.Mode_Date.month==7 || modes.Mode_Date.month==8 || modes.Mode_Date.month==10 || modes.Mode_Date.month==12
          ||modes.Mode_Date.month==01 || modes.Mode_Date.month==03 || modes.Mode_Date.month==05 || modes.Mode_Date.month==07 || modes.Mode_Date.month==08 ){
            $arr.num0 = false;
            $arr.num1 = false;
          }
          else if(modes.Mode_Date.month==4 || modes.Mode_Date.month==6 || modes.Mode_Date.month==9 || modes.Mode_Date.month==11 ||
            modes.Mode_Date.month==04 || modes.Mode_Date.month==06 || modes.Mode_Date.month==09){
          }
        }
        $d1_flag++;
      }

    }
  }
  output.reset = function(){
    $m1_flag = 0;
    $m2_flag = 0;
    $d1_flag = 0;
    $d2_flag = 0;
    $slash_flag = 0;
    check_temp = '';
  }
    return output;
  });
var leap=function($year)
{
  if(($year%4)==0)
  {
    if(($year%100)==0 && ($year%400)==0){
      return 1;
    }
    else if(($year%100)==0 && ($year%400)!=0){
      return 0;
    }
  }
  else{
    return 0;
  }
}


