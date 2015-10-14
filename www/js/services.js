/**
 * Created by Mina on 9/23/2015.
 */

app.factory('modes',function()
{
    var output={};



    output.Mode_Date={

      year:0,
      month:0,
      day:0

    };

    output.Mode_DateTime= {

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
      week:0,
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

  output.input_res =new Array(6);


    output.temp_Mode_Date={

      year:0,
      month:0,
      day:0

    };

    output.temp_Mode_Date_Time= {

      year:0,
      month:0,
      day:0,
      hour:0,
      minute:0,
      second:0
    };

    output.temp_Mode_SimpleNum= {

      num:0

    };

    output.temp_Mode_Piece={

      year:0,
      month:0,
      week:0,
      day:0,
      hour:0,
      minute:0,
      second:0

    };
    output.temp_Mode_Time={

      day:0,
      hour:0,
      minute:0,
      second:0

    };

    return output;

});
