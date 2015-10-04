/**
 * Created by Hossein on 9/29/2015.
 */
app.factory('enabled',function(){
  var output = {};


  var time_reg= function($arr,$num,$s)
  {
    var c=$num+$s;
    //var path=/([0-1][0-9])|2[0-3]/;
    //var path=/(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)/;
    if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
    {
      return 2;
    }
    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
    {
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
    {
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
    {
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3])$/.test(c))
    {
      return 1;
    }
    //else if(/\d{1}/.test(c))
    //{
    //  console.log("true6")
    //  return 1;
    //}
    else
    {
      return 0;
    }
  }

  //=======Change Status=====================
  output.changeStatus=function($arr,$s)
  {
    //========= Numbers ===========
    if($s==1)
    {
      $arr.num1=false;
    }
    else if($s==2)
    {
      $arr.num2=false;
    }
    else if($s==3)
    {
      $arr.num3=false;
    }
    else if($s==4)
    {
      $arr.num4=false;
    }
    else if($s==5)
    {
      $arr.num5=false;
    }
    else if($s==6)
    {
      $arr.num6=false;
    }
    else if($s==7)
    {
      $arr.num7=false;
    }
    else if($s==8)
    {
      $arr.num8=false;
    }
    else if($s==9)
    {
      $arr.num9=false;
    }
    else if($s==0)
    {
      $arr.num0=false;
    }
    //============= operator ===============
    else if($s=='+')
    {
      $arr.plus=false;
    }
    else if($s=='-')
    {
      $arr.sub=false;
    }
    else if($s=="to")
    {
      $arr.to=false;
    }
    else if($s=='*')
    {
      $arr.multi=false;
    }
    else if($s=='/')
    {
      $arr.div=false;
    }
    //=================
  };
  //========Time Enable======================
  output.timeEnabled=function($arr,$string,$s2)
  {

    var temp=$string+$s2;
    var t;
    for(var i=0;i<=9;i++)
    {
      t=time_reg($arr,temp,i);
      if(t!=0)
       output.changeStatus($arr,i);
    }
    var com=time_reg(temp);
    if(com == 2)
    {
      output.changeStatus($arr,'/');
      output.changeStatus($arr,'-');
      output.changeStatus($arr,"to");
      output.changeStatus($arr,'+');
    }
    if(time_reg($arr,temp,':'))
    {
      $arr.colon=false;
    }
  };

  //===============Date Enable=================
  var $m1_flag=0;
  var $m2_flag=0;
  var $d1_flag=0;
  var $d2_flag=0;
  var $slash_flag=0;
  var $tempDate;
  var $tempDate1;
  var $tempDate2;
  var check_temp='';
  output.dateEnabled=function($arr,$string,$present) {
    console.log("present = "+ $present);
    check_temp=$string + $present;
    if ((check_temp.search("y")>0 || check_temp.search("mon")>0 || check_temp.search("d")>0 || check_temp.search("h")>0
      || check_temp.search("min")>0 || check_temp.search("sec")>0 || check_temp.search(":")>0)) {
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
      if ((/\d\/\d?\d\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$}/).test($sample)) {
        $d2_flag = 1;
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
      }

      if ($present == 1 && $m1_flag == 1 && $slash_flag == 1) {
        $arr.num0 = false;
        $arr.num1 = false;
        $arr.num2 = false;
        $arr.slash = false;
      }

      if ($present >= 2 && $m1_flag == 1 && $slash_flag == 1) {
        console.log("flag /" + $m1_flag);
        $arr.slash = false;
      }

      if ($present == /\d/ && $m2_flag == 1 && $slash_flag == 1) {
        $arr.slash = false;
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

          $tempDate = $string + '9';
          var d = new Date($tempDate);
          if (d) {
            $arr.num9 = false;
          }
        }


        if ($present == 3) {
          $tempDate1 = $string + '0';
          var d = new Date($tempDate);
          if (d) {
            $arr.num0 = false;
          }

          $tempDate2 = $string + '1';
          var d = new Date($tempDate);
          if (d) {
            $arr.num1 = false;
          }
        }
        if ($d2_flag == 1) {

        }
        $d1_flag++;
      }
    }
  };

  //========= Piece Enable=====================
  var year=0;
  var month=0;
  var week=0;
  var day=0;
  var hour=0;
  var minute=0;
  var second=0;
  var t='';
  output.reg_piece=function($arr,$temp,$present)
  {
    var c=$temp + $present;
    console.log("c = " + c);
    if (/^(?:\d{1,8})$/.test($present)) {
      //$scope.main_temp = $scope.temp + $scope.present;
      t+=$present;
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
      $arr.dot = false;
      check_stamp($arr);
      console.log("year = "+year);
      return 1;
    }
    else if($present == 'y' | $present == 'mon' | $present =='w' |  $present == 'd' |  $present == 'h' | $present == 'min' | $present == 'sec')
    {
      //Save t Then Reset it!
      t='';
      if($present=="y") {
        year=1;
      }if($present=="mon") {
      month=1;
    }if($present=="w") {
      week=1;
    }if($present=="d") {
      day=1;
    }if($present=="h") {
      hour=1;
    }if($present=="min") {
      minute=1;
    }if($present=="sec") {
      second = 1;
    }
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
      $arr.plus = false;
      $arr.sub = false;
      $arr.div = false;
      $arr.multi = false;
      console.log("year = "+year);
      return 2;
    }
    else{
      year=1;
      month=1;
      week=1;
      day=1;
      hour=1;
      second = 1;
      minute=1;
      return 0;
    }
  };
var check_stamp= function ($arr){
    if(year==0)
    {
      $arr.year = false;
    }if(month==0)
    {
      $arr.mon = false;
    }if(week==0)
    {
      $arr.week = false;
    }if(day==0)
    {
      $arr.day= false;
    }if(hour==0)
    {
      $arr.hour = false;
    }if(minute==0)
    {
      $arr.min = false;
    }if(second==0)
    {
      $arr.sec = false;
    }
  }
  //=============Return============
  return output;

});
