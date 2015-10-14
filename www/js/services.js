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

      year:'',
      month:'',
      week:'',
      day:'',
      hour:'',
      minute:'',
      second:''
    };

    output.Mode_SimpleNum= {

      num:''

    };

    output.Mode_Piece={

      year:'',
      month:'',
      week:'',
      day:'',
      hour:'',
      minute:'',
      second:''

    };
    output.Mode_Time={

      hour:'',
      minute:'',
      second:''

    };
//////////////////////////////////////////
  output.temp_Mode_Date={

    year:'',
    month:'',
    week:'',
    day:''

  };

  output.temp_Mode_DateTime= {

    year:'',
    month:'',
    week:'',
    day:'',
    hour:'',
    minute:'',
    second:''
  };

  output.temp_Mode_SimpleNum= {

    num:''

  };

  output.temp_Mode_Piece={

    year:'',
    month:'',
    week:'',
    day:'',
    hour:'',
    minute:'',
    second:''

  };
  output.temp_Mode_Time={

    hour:'',
    minute:'',
    second:''

  };
    return output;

});
