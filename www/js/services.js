/**
 * Created by Mina on 9/23/2015.
 */

app.factory('modes',function()
{
    var output={};
    output.input_res = Array(6);

    output.Mode_Date={

      year:'',
      month:'',
      week:'',
      day:''

    };

    output.Mode_DateTime= {

      year:0,
      month:0,
      week:0,
      day:0,
      hour:0,
      minute:0,
      second:0
    };

    output.Mode_SimpleNum= {

      num:0

    };

    output.Mode_Piece =
    {
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
  output.temp_Mode_Date={

      year:'',
      month:'',
      week:'',
      day:''

    };

    output.temp_Mode_DateTime= {

      year:0,
      month:0,
      week:0,
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

  output.delete_temps = function()
  {
    output.temp_Mode_DateTime.year = 0;
    output.temp_Mode_DateTime.month = 0;
    output.temp_Mode_DateTime.week = 0;
    output.temp_Mode_DateTime.day = 0;
    output.temp_Mode_DateTime.hour = 0;
    output.temp_Mode_DateTime.minute = 0;
    output.temp_Mode_DateTime.second = 0;

    output.temp_Mode_Date.year = 0;
    output.temp_Mode_Date.month = 0;
    output.temp_Mode_Date.week = 0;
    output.temp_Mode_Date.day = 0;


    output.temp_Mode_Piece.year = 0;
    output.temp_Mode_Piece.month = 0;
    output.temp_Mode_Piece.week = 0;
    output.temp_Mode_Piece.day = 0;
    output.temp_Mode_Piece.hour = 0;
    output.temp_Mode_Piece.minute = 0;
    output.temp_Mode_Piece.second = 0;

    output.temp_Mode_Time.hour= 0;
    output.temp_Mode_Time.minute= 0;
    output.temp_Mode_Time.second= 0;
  }


  output.delete_modes = function()
  {
    output.Mode_DateTime.year = 0;
    output.Mode_DateTime.month = 0;
    output.Mode_DateTime.week = 0;
    output.Mode_DateTime.day = 0;
    output.Mode_DateTime.hour = 0;
    output.Mode_DateTime.minute = 0;
    output.Mode_DateTime.second = 0;

    output.Mode_Date.year = 0;
    output.Mode_Date.month = 0;
    output.Mode_Date.week = 0;
    output.Mode_Date.day = 0;


    output.Mode_Piece.year = 0;
    output.Mode_Piece.month = 0;
    output.Mode_Piece.week = 0;
    output.Mode_Piece.day = 0;
    output.Mode_Piece.hour = 0;
    output.Mode_Piece.minute = 0;
    output.Mode_Piece.second = 0;

    output.Mode_Time.hour= 0;
    output.Mode_Time.minute= 0;
    output.Mode_Time.second= 0;
  }
    //output.time_enable()
    return output;

});
