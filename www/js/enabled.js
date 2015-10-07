/**
 * Created by Hossein on 9/29/2015.
 */
app.factory('enabled',function(modes){
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
  };

  var date_reg = function($num,$s)
  {
    var c=$num + $s;
    if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/0$/.test(c))
    {
      return 1;
    }
    else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
    {
      return 2;
    }
    else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/$/.test(c))
    {
      return 1;
    }
    else if(/^(?:\d{1,4})\/0$/.test(c))
    {
      return 1;
    }
    else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
    {
      return 1;
    }
    else if(/^(?:\d{1,4})\/$/.test(c))
    {
      return 1;
    }
    else if(/^(?:\d{1,4})$/.test(c))
    {
      return 1;
    }
    else {
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
  output.timeEnabled=function($arr,$string)
  {

    var temp=$string;
    var t;
    for(var i=0;i<=9;i++)
    {
      t=time_reg($arr,temp,i);
      if(t!=0)
        output.changeStatus($arr,i);
    }
    var com=time_reg($arr,temp,"");
    if(com == 2)
    {
      //output.changeStatus($arr,'/');
      output.changeStatus($arr,'-');
      output.changeStatus($arr,"to");
      output.changeStatus($arr,'+');
    }
    if(time_reg($arr,temp,':'))
    {
      $arr.colon=false;
    }
  };

  //=========== Date Enabled 3=================

  output.dateEnabled= function($arr,$num)
  {
    for(var i=0;i<=9;i++)
    {
      var t=date_reg($num,i);
      if(t!=0)
        output.changeStatus($arr,i);
    }
    if(2==date_reg($num,""))
    {
      output.changeStatus($arr,'+')
      output.changeStatus($arr,'-')
      //output.changeStatus($arr,'/')
      output.changeStatus($arr,'to')
    }
    if(date_reg($num,'/'))
    {
      $arr.slash=false;
    }
    var c=$num;
    if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/([0])$/.test(c))
    {
      console.log("1")
      return 1;
    }
    else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
    {
      console.log("2");
      var end_date = $num.substr($num.length-1,$num.length);
      console.log("end date"+end_date)
      var index1=$num.search('/');
      var tmp;
      tmp=$num.substr(index1+1,$num.length);
      var index2=tmp.search('/');
      console.log("yeeeeeeeeeeear"+modes.Mode_Date.year)
      console.log("saaaaaaaaraaaaaaa"+leap(modes.Mode_Date.year));
      modes.Mode_Date.day=tmp.substr(index2+1,tmp.length);
      if((modes.Mode_Date.month==2 || modes.Mode_Date.month==02)&& leap(modes.Mode_Date.year)==0 && end_date==2 ){
        console.log("ooooooooooomad");
        $arr.num9 = true;
      }
      if(end_date==3) {
        if (modes.Mode_Date.month == 4 || modes.Mode_Date.month == 04 || modes.Mode_Date.month == 6 || modes.Mode_Date.month == 06 || modes.Mode_Date.month == 9 || modes.Mode_Date.month == 09 || modes.Mode_Date.month == 11) {
          $arr.num1 = true;
        }
      }
    }
    else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/$/.test(c))
    {
      console.log("3");
      if(modes.Mode_Date.month==2)
      {
        $arr.num3=true;
      }

      return 1;

    }
    else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
    {
      console.log("4");
      var index=$num.search('/');
      modes.Mode_Date.month=$num.substr(index+1,$num.length);
      return 1;
    }
    else if(/^(?:\d{1,4})\/0$/.test(c))
    {
      console.log("3");
      return 1;
    }
    else if(/^(?:\d{1,4})\/$/.test(c))
    {
      console.log("1")
      return 1;
    }
    else if(/^(?:\d{1,4})$/.test(c))
    {
     modes.Mode_Date.year=$num;
      console.log("22"+ modes.Mode_Date.year);
      return 1;
    }
    else
    {
      return 0;
    }
  };


    var leap=function($year) {
      if (($year % 4) == 0) {
        if (($year % 100) == 0 && ($year % 400) == 0) {
          return 1;
        }
        else if (($year % 100) == 0 && ($year % 400) != 0) {
          return 0;
        }
      }
      else {
        return 0;
      }
    };



  //===============Date Enable=================
/*  var $m1_flag=0;
  var $m2_flag=0;
  var $d1_flag=0;
  var $d2_flag=0;
  var $slash_flag=0;
  var $tempDate;
  var $tempDate1;
  var $tempDate2;
  var check_temp='';
/*  output.dateEnabled=function($arr,$string,$present) {
    console.log("present = "+ $present);
    check_temp=$string + $present;
    if($d1_flag == 1 && $d2_flag == 1)
    {

    }
    else {
      if ((check_temp.search("y") > 0 || check_temp.search("mon") > 0 || check_temp.search("d") > 0 || check_temp.search("h") > 0
        || check_temp.search("min") > 0 || check_temp.search("sec") > 0 || check_temp.search(":") > 0)) {
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
        if (/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test($sample)) {
          $d2_flag = 1;
          $arr.plus = false;
          $arr.sub = false;
          $arr.to = false;
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
          console.log("oooooooooooooomad");
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
            $arr.to = false;
            $arr.plus = false;
            $arr.sub = false;
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
            $arr.to = false;
            $arr.plus = false;
            $arr.sub = false;
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
            $arr.to = false;
            $arr.plus = false;
            $arr.sub = false;
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
    }
  };*/


  //==============Date Enable 2===============
    //enabled.changeStatus($arr,'+');
/*
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
      if($present == "<=")
      {
        if($d2_flag==1){
          $d2_flag==0;
        }
        else if($d1_flag==1){
          $d1_flag==0;
        }
        else if($slash_flag==2){
          $slash_flag==1;
        }
        else if($m2_flag==1){
          $m2_flag==0;
        }
        else if($m1_flag==1){
          $m1_flag==0;
        }
        else if($slash_flag==1) {
          $slash_flag == 0;
        }

      }
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

    };
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
  };
*/
  //========= Piece Enable=====================
  var flag=1;
  var year=0;
  var month=0;
  var week=0;
  var day=0;
  var hour=0;
  var minute=0;
  var second=0;
  var t='0';
  var flag_dot=1;
  output.reg_piece=function($arr,$temp,$present)
  {
    if($present == '<=')
    {
      t = t.replace(/.$/,"");
    }
    else if($present == 'c')
    {
      t='0';
    }
    else {
      var c = $temp + $present;
      console.log("c = " + c);
      console.log("T start = " + t);
      if (/(\d{1,8})$/.test($present) && flag) {
        //$scope.main_temp = $scope.temp + $scope.present;
        t += $present;
        console.log("t3=" + t);
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
        if (flag_dot == 1)
          $arr.dot = false;
        check_stamp($arr);
        console.log("year = " + year);
        return 1;
      }
      else if ($present == '.') {
        flag_dot = 0;
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
      else if ($present == 'y' || $present == 'mon' || $present == 'w' || $present == 'd' || $present == 'h' || $present == 'min' || $present == 'sec') {
        flag_dot = 1;
        t= t.substr(1, t.length);
        console.log("t1=" + t);
        //Save t Then Reset it!===>> Done
        if ($present == "y") {
          year = 1;
          modes.Mode_Piece.year=t;
        }
        if ($present == "mon") {
          month = 1;
          modes.Mode_Piece.month=t;
        }
        if ($present == "w") {
          week = 1;
          modes.Mode_Piece.week=t;
        }
        if ($present == "d") {
          day = 1;
          modes.Mode_Piece.day=t;
        }
        if ($present == "h") {
          hour = 1;
          modes.Mode_Piece.hour=t;
        }
        if ($present == "min") {
          minute = 1;
          modes.Mode_Piece.minute=t;
        }
        if ($present == "sec") {
          second = 1;
          modes.Mode_Piece.second=t;
        }
        t='0';
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
        console.log("year = " + year);
        return 2;
      }
      else {
        flag = 0;
        year = 1;
        month = 1;
        week = 1;
        day = 1;
        hour = 1;
        second = 1;
        minute = 1;
        return 0;
      }
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
  };

  //=============Int Enabled =================
  output.intEnabled = function($arr,$string)
  {
    if (($string.search("y")>0 || $string.search("mon")>0 || $string.search("w")>0 || $string.search("d")>0 ||
      $string.search("h")>0 || $string.search("min")>0 || $string.search("sec")>0 || $string.search(":")>0 || $string.search("\\+")>0
      || $string.search("-")>0 || $string.search("%")>0 || $string.search("\\*")>0 || $string.search("/")>0 || $string =="") )
    {

    }
    else{
      for(var i=0;i<=9;i++)
        output.changeStatus($arr,i);
      output.changeStatus($arr,'+');
      output.changeStatus($arr,'-');
      output.changeStatus($arr,'/');
      output.changeStatus($arr,'*');
      output.changeStatus($arr,'.');
      modes.Mode_SimpleNum.num=$string;
    }

  }
  //=============Return=======================
  return output;

});
