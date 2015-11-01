/**
 * Created by Hossein on 9/29/2015.
 */
app.factory('regex',function(enabled)
{
  var factory = {};
  factory.time_reg=function($arr,$num,$s)
  {
      var c=$num+$s;
      //var path=/([0-1][0-9])|2[0-3]/;
      //var path=/(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)/;
      if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        return 2;
      }
      else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        return 1;
      }
      else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        return 1;
      }
      else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        return 1;
      }
      else if(/^(?:[01]?\d|2[0-3])$/.test(c))
      {
        enabled.timeEnabled ($arr,$num,$s);
        return 1;
      }

      else {
        return 0;
      }

  };
  factory.date_reg = function($num,$s)
  {
      var c=$num+$s;
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
  };
  return factory;
});
