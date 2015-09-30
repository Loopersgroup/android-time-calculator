/**
 * Created by Hossein on 9/29/2015.
 */
app.factory('enabled',function(){
  var output = {};
  var time_reg= function($arr,$num,$s)
  {
    var c=$num+$s;
    console.log(c);
    //var path=/([0-1][0-9])|2[0-3]/;
    //var path=/(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)/;
    if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
    {
      console.log("true1");
      return 2;
    }
    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
    {
      console.log("true2")
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
    {
      console.log("true3")
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
    {
      console.log("true4")
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3])$/.test(c))
    {
      console.log("true5");
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
      console.log(false);
    }
  }
  output.result=new Array(28);
  output.flags={
    time:0,
    date:0
  };
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
  output.timeEnabled=function($arr,$string,$s2)
  {
    console.log("ff");
    console.log("colon=" + $arr.plus);

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

  return output;

});
