app.factory('regex',function(enabled)
{
  var factory = {};
  factory.time_reg=function($num,$s)
  {
    console.log("hello");
    var c=$num+$s;
    console.log($num);
    //var path=/([0-1][0-9])|2[0-3]/;
    //var path=/(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)/;
    if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:(0|1|2|3|4|5)?\d$/.test(c))
    {
      enabled.timeEnabled ($num,$s);
      console.log("true1");
      return 2;
    }
    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d:$/.test(c))
    {
      enabled.timeEnabled ($num,$s);
      console.log("true2")
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3]):(0|1|2|3|4|5)?\d$/.test(c))
    {
      enabled.timeEnabled ($num,$s);
      console.log("true3")
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3]):$/.test(c))
    {
      enabled.timeEnabled ($num,$s);
      console.log("true4")
      return 1;
    }
    else if(/^(?:[01]?\d|2[0-3])$/.test(c))
    {
      enabled.timeEnabled ($num,$s);
      console.log("true5");
      return 1;
    }
    else if(/\d{1}/.test(c))
    {
      enabled.timeEnabled ($num,$s);
      console.log("true6")
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
    if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
    {
      console.log("true1");
      return 2;
    }
    else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/$/.test(c))
    {
      console.log("true2");
      return 1;
    }
    else if(/\d{4}\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
    {
      console.log("true3");
      return 1;
    }
    else if(/\d{4,5}\/$/.test(c))
    {
      console.log("true4");
    }
    else if(/\d{4}$/.test(c))
    {
      console.log("true5");
    }
  };
  return factory;
});