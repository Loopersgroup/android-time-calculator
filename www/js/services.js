/**
 * Created by Mina on 9/23/2015.
 */

app.factory('modes',function()
{
  var factory={};
    factory.Mode_Date={

      year:'',
      month:'',
      day:''

    };

    factory.Mode_Date_Time= {

      year:'',
      month:'',
      day:'',
      hour:'',
      minute:'',
      second:''
    };

    factory.Mode_SimpleNum= {

      num:''

    };

    factory.Mode_Piece={

      year:'',
      month:'',
      week:'',
      day:'',
      hour:'',
      minute:'',
      second:''

    };
    factory.Mode_Time={

      day:'',
      hour:'',
      minute:'',
      second:''

    };
    return factory;

  });
