/**
 * Created by Hossein on 9/29/2015.
 */
app.factory('enabled',function(){
    var output = {};
    output.flags={
      time:0,
      date:0
    };

    output.timeEnabled=function($string,$s2)
    {
      console.log("ff");
      if($s2==':')
      {
        //$scope.disTime=true;
      }
    };

    return output;

});
