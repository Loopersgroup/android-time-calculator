/**
 * Created by Mina on 9/23/2015.
 */

app.factory('modes',function()
{
    var output={};



    output.Mode_Date={

      year:'',
      month:'',
      day:''

    };

    output.Mode_Date_Time= {

      year:0,
      month:0,
      day:0,
      hour:0,
      minute:0,
      second:0
    };

    output.Mode_SimpleNum= {

      num:0

    };

    output.Mode_Piece={

      year:0,
      month:0,
      day:0,
      hour:0,
      minute:0,
      second:0

    };
    output.Mode_Time={

      day:0,
      hour:0,
      minute:0,
      second:0

    };

    //output.time_enable()
    return output;

});
