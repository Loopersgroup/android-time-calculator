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
  output.Todate =
  {
    to_date : ''
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


  output.to_fixed = function()
  {
    if(output.Mode_Piece.year % 1 !=0)
      output.Mode_Piece.year =parseFloat(output.Mode_Piece.year).toFixed(2)
    if( output.Mode_Piece.month % 1 != 0)
      output.Mode_Piece.month =parseFloat(output.Mode_Piece.month).toFixed(2)
    if( output.Mode_Piece.week % 1 != 0)
      output.Mode_Piece.week =parseFloat(output.Mode_Piece.week).toFixed(2)
    if( output.Mode_Piece.day % 1 != 0)
      output.Mode_Piece.day =parseFloat(output.Mode_Piece.day).toFixed(2)
    if( output.Mode_Piece.hour % 1 != 0)
      output.Mode_Piece.hour =parseFloat(output.Mode_Piece.hour).toFixed(2)
    if( output.Mode_Piece.minute % 1 != 0)
      output.Mode_Piece.minute =parseFloat(output.Mode_Piece.minute).toFixed(2)
    if( output.Mode_Piece.second % 1 != 0)
      output.Mode_Piece.second =parseFloat(output.Mode_Piece.second).toFixed(2)

    output.Mode_SimpleNum.num = parseFloat(output.Mode_SimpleNum.num).toFixed(2);
  }
    //output.time_enable()
    return output;

});
