app.factory('enabled',function(){
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
  var $tempDate;
  var $tempDate1;
  var $tempDate2;
  //output.timeEnabled =function($string,$present)
  //{
  //  console.log("ff");
  //  if($present==':')
  //  {
  //    //$scope.disTime=true;
  //  }
  //};


  output.dateEnabled=function($arr,$string,$present) {
    if ($d2_flag == 1) {

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
        console.log("d1 flag");
        $d1_flag = 1;
      }
      if ((/\d\/\d?\d\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$}/).test($sample)) {
        console.log("d1 flag");
        $d2_flag = 1;
      }

      if (/\d/.test($present) && $slash_flag == 0) {
        //console.log("hellow");
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
        //console.log("123")
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
        $arr.slash = false;
      }

      if (/\d/.test($present) && $slash_flag == 2 && $d1_flag == 1)
      {
        $arr.to = false;
        $arr.plus = false;
        $arr.sub = false;
        console.log($present)
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
  }
    return output;

  });
