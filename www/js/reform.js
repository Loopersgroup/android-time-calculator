/**
 * Created by Hossein on 10/14/2015.
 */
app.factory('reform',function(modes)
{
  var output = {};

  output.calculate_piece = function()
  {
    console.log("loggggg111111112" + (parseFloat(modes.Mode_Piece.day%1)))
    modes.Mode_Piece.day = parseFloat(modes.Mode_Piece.day) + modes.Mode_Piece.week * 7;
    modes.Mode_Piece.week = 0;
    var m=0;
    if(modes.Mode_Piece.second < 0)
    {
      m=modes.Mode_Piece.second;
      modes.Mode_Piece.second=60+modes.Mode_Piece.second%60;
      modes.Mode_Piece.minute += ( m-(m)%60) / 60;
      if(m % 60 !=0)
      {
        modes.Mode_Piece.minute -=1;
      }
    }
    if(modes.Mode_Piece.minute < 0)
    {
      m=modes.Mode_Piece.minute;
      modes.Mode_Piece.minute=60+((modes.Mode_Piece.minute)%60);
      modes.Mode_Piece.hour += ( m-(m)%60) / 60;
      if(m % 60 !=0)
      {
        modes.Mode_Piece.hour -=1;
      }
    }
    if(modes.Mode_Piece.hour < 0)
    {
      m=modes.Mode_Piece.hour;
      modes.Mode_Piece.hour=24+modes.Mode_Piece.hour%24;
      modes.Mode_Piece.day += ( m-(m)%24) / 24;
      if(m % 24 !=0)
      {
        modes.Mode_Piece.day -= 1;
      }
    }
    if(modes.Mode_Piece.day < 0)
    {
      m=modes.Mode_Piece.day;
      modes.Mode_Piece.day = 30 + modes.Mode_Piece.day%30;
      modes.Mode_Piece.month += ( m-(m)%30) / 30;
      if(m % 30 != 0 )
      {
        modes.Mode_Piece.month -= 1;
      }
    }
    if(modes.Mode_Piece.month < 0)
    {
      m=modes.Mode_Piece.month;
      modes.Mode_Piece.month = 12 + modes.Mode_Piece.month%12;
      modes.Mode_Piece.year = (modes.Mode_Piece.year) + ( m-(m) % 12) / 12;
      if(m % 12 !=0)
      {
        modes.Mode_Piece.year -= 1;
      }
    }

    if (modes.Mode_Piece.year >= 0){
      modes.Mode_Piece.month = parseFloat(modes.Mode_Piece.month) + parseFloat((modes.Mode_Piece.year%1)*12);
      modes.Mode_Piece.year = parseFloat(modes.Mode_Piece.year) - parseFloat(modes.Mode_Piece.year%1);
    }
    if (modes.Mode_Piece.month >= 0){
      modes.Mode_Piece.day = parseFloat(modes.Mode_Piece.day) + parseFloat(((modes.Mode_Piece.month)%1)*30);
      modes.Mode_Piece.month = parseFloat(modes.Mode_Piece.month ) - parseFloat((modes.Mode_Piece.month)%1);
    }

    if (modes.Mode_Piece.day >= 0){
      modes.Mode_Piece.hour = parseFloat(modes.Mode_Piece.hour) + parseFloat(((modes.Mode_Piece.day)%1)*24);
      modes.Mode_Piece.day = parseFloat(modes.Mode_Piece.day) - parseFloat((modes.Mode_Piece.day)%1);
    }
    if (modes.Mode_Piece.hour >= 0){
      modes.Mode_Piece.minute = parseFloat(modes.Mode_Piece.minute) + parseFloat(((modes.Mode_Piece.hour)%1)*60);
      modes.Mode_Piece.hour = parseFloat(modes.Mode_Piece.hour) - parseFloat((modes.Mode_Piece.hour)%1);
    }
    if (modes.Mode_Piece.minute >= 0){
      modes.Mode_Piece.second = parseFloat(modes.Mode_Piece.second) + parseFloat((modes.Mode_Piece.minute)%1)*60;
      modes.Mode_Piece.minute = parseFloat( modes.Mode_Piece.minute) - parseFloat((modes.Mode_Piece.minute)%1);
    }
    if (modes.Mode_Piece.second >= 0){
       modes.Mode_Piece.second = parseFloat(modes.Mode_Piece.second) - parseFloat(((modes.Mode_Piece.second)%1));
    }

    if (modes.Mode_Piece.second >= 0) {
      m = parseFloat(modes.Mode_Piece.second);
      modes.Mode_Piece.second = m % 60;
      modes.Mode_Piece.minute = parseFloat(modes.Mode_Piece.minute) + parseFloat( ( m - modes.Mode_Piece.second) / 60);
    }

    if (modes.Mode_Piece.minute >= 0) {
      m = parseFloat(modes.Mode_Piece.minute);
      modes.Mode_Piece.minute = m % 60;
      modes.Mode_Piece.hour = parseFloat(modes.Mode_Piece.hour) + parseFloat(( m - modes.Mode_Piece.minute) / 60);
    }

    if(modes.Mode_Piece.hour >= 0) {
      m = parseFloat(modes.Mode_Piece.hour);
      modes.Mode_Piece.hour = m % 24;
      modes.Mode_Piece.day = parseFloat(modes.Mode_Piece.day) + parseFloat(( m - modes.Mode_Piece.hour) / 24);
    }
    if(modes.Mode_Piece.day >= 0) {
      m = parseFloat(modes.Mode_Piece.day);
      modes.Mode_Piece.day = m % 30;
      modes.Mode_Piece.month = parseFloat(modes.Mode_Piece.month) + parseFloat(( m - modes.Mode_Piece.day) / 30);
    }
    if(modes.Mode_Piece.month >= 0) {
      m = parseFloat( modes.Mode_Piece.month);
      modes.Mode_Piece.month = m % 12;
      modes.Mode_Piece.year = parseFloat(modes.Mode_Piece.year) + parseFloat(( m - modes.Mode_Piece.month) / 12);
    }

  }
  return output;
});
