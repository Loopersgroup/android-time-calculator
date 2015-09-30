/**
 * Created by Mina on 9/23/2015.
 */

app.factory('modes',function()
{
  var factory={};
    factory.Mode_Date={

      year:0,
      month:0,
      day:0

    };

    factory.Mode_Date_Time= {

      year:0,
      month:0,
      day:0,
      hour:0,
      minute:0,
      second:0
    };

    factory.Mode_SimpleNum= {

      num:0

    };

    factory.Mode_Piece={

      year:0,
      month:0,
      week:0,
      day:0,
      hour:0,
      minute:0,
      second:0

    };
    factory.Mode_Time={

      day:0,
      hour:0,
      minute:0,
      second:0

    };
    return factory;

  });
