app.factory('regex',function(enabled)
{
  var factory = {};

  factory.date_reg = function($num,$s)
  {
    var c=$num+$s;
    if(/\d\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/(?:(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9)|1[012])$/.test(c))
    {
      return 2;
    }
    else if(/\d\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))\/$/.test(c))
    {
      return 1;
    }
    else if(/\d\/(?:[12]\d|(3[01])|(01|02|03|04|05|06|07|08|09)|(1|2|3|4|5|6|7|8|9))$/.test(c))
    {
      return 1;
    }
    else if(/\d\/$/.test(c))
    {
      return 1;
    }
    else if(/(\d)$/.test(c))
    {
      return 1;
    }
    else {
      return 0;
    }
  };
  return factory;
});
