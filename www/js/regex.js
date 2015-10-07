/**
 * Created by Hossein on 9/29/2015.
 */
app.factory('regex',function(enabled)
{
  var factory = {};
  factory.time_reg=function($arr,$num,$s)
  {
      var c=$num+$s;
      console.log($num);
      if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        console.log("true1");
        return 2;
      }
      else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        console.log("true2")
        return 1;
      }
      else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        console.log("true3")
        return 1;
      }
      else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        console.log("true4")
        return 1;
      }
      else if(/^(?:[01]?\d|2[0-3])$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        console.log("true5");
        return 1;
      }
      else {
        return 0;
        console.log(false);
      }

  };
  factory.date_reg = function($num,$s)
  {
      var c=$num+$s;
      if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/0$/.test(c))
      {
        console.log("Zero First!");
        return 1;
      }
      else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
      {
        console.log("date_FULL");
        return 2;
      }
      else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])\/$/.test(c))
      {
        console.log("date4");
        return 1;
      }
      else if(/^(?:\d{1,4})\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
      {
        console.log("date3");
        return 1;
      }
      else if(/^(?:\d{1,4})\/$/.test(c))
      {
        console.log("date2");
        return 1;
      }
      else if(/^(?:\d{1,4})$/.test(c))
      {
        console.log("date1");
        return 1;
      }
      else {
        console.log("date0");
        return 0;
      }
  };
  return factory;
});
