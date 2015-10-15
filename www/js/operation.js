/**
 * Created by Hossein on 10/14/2015.
 */
app.factory("operation" ,function (modes){

  var output = {};
  output.preInputRes='';
  output.preOp;
  output.plus = function ()
  {

  }
  output.equal =function ()
  {
    var input2;
    var input1;
    for(var i=1;i<6;i++)
      if(input_res[i]==2) input2=input_res[i];
    input1 = preInputRes;
    if(output.preOp=='+')
    {
      if(input1==1 && input2==1){
        modes.Mode_Piece.year+=modes.temp_Mode_Piece.year;
        modes.Mode_Piece.month+=modes.temp_Mode_Piece.month;
        modes.Mode_Piece.week+=modes.temp_Mode_Piece.week;
        modes.Mode_Piece.day+=modes.temp_Mode_Piece.day;
        modes.Mode_Piece.hour+=modes.temp_Mode_Piece.hour;
        modes.Mode_Piece.minute+=modes.temp_Mode_Piece.minute;
        modes.Mode_Piece.second+=modes.temp_Mode_Piece.second;
      }
      if((input1==1 && input2==2) || (input1==2 && input2==1))
      {
        if(input1==1) {
          modes.Mode_Time.hour += modes.temp_Mode_Piece.hour;
          modes.Mode_Time.minute += modes.temp_Mode_Piece.minute;
          modes.Mode_Time.second += modes.temp_Mode_Piece.second;
        }
        else if(input1==2){
          modes.temp_Mode_Time.hour += modes.Mode_Piece.hour;
          modes.temp_Mode_Time.minute += modes.Mode_Piece.minute;
          modes.temp_Mode_Time.second += modes.Mode_Piece.second;
        }
      }
      if((input1==1 && input2==3) || (input1==3 && input2==1)) {
        if(input1==1) {
          modes.Mode_Date_Time.year = modes.Mode_Date.year + modes.temp_Mode_Piece.year;
          modes.Mode_Date_Time.month = modes.Mode_Date.month + modes.temp_Mode_Piece.month;
          modes.Mode_Date_Time.week = modes.Mode_Date.week + modes.temp_Mode_Piece.week;
          modes.Mode_Date_Time.day = modes.Mode_Date.day + modes.temp_Mode_Piece.day;
          modes.Mode_Date_Time.hour = modes.Mode_Date.hour + modes.temp_Mode_Piece.hour;
          modes.Mode_Date_Time.minute = modes.Mode_Date.minute + modes.temp_Mode_Piece.minute;
          modes.Mode_Date_Time.second = modes.Mode_Date.second + modes.temp_Mode_Piece.second;
        }
        else if(input2==1){
          modes.Mode_Date_Time.year = modes.temp_Mode_Date.year + modes.Mode_Piece.year;
          modes.Mode_Date_Time.month = modes.temp_Mode_Date.month + modes.Mode_Piece.month;
          modes.Mode_Date_Time.week = modes.temp_Mode_Date.week + modes.Mode_Piece.week;
          modes.Mode_Date_Time.day = modes.temp_Mode_Date.day + modes.Mode_Piece.day;
          modes.Mode_Date_Time.hour = modes.temp_Mode_Date.hour + modes.Mode_Piece.hour;
          modes.Mode_Date_Time.minute = modes.temp_Mode_Date.minute + modes.Mode_Piece.minute;
          modes.Mode_Date_Time.second = modes.temp_Mode_Date.second + modes.Mode_Piece.second;
        }
      }
      if((input1==1 && input2==4) || (input1==4 && input2==1)) {
        if(input1==1) {
          modes.Mode_Date_Time.year = modes.Mode_Date_Time.year + modes.temp_Mode_Piece.year;
          modes.Mode_Date_Time.month = modes.Mode_Date_Time.month + modes.temp_Mode_Piece.month;
          modes.Mode_Date_Time.week = modes.Mode_Date_Time.week + modes.temp_Mode_Piece.week;
          modes.Mode_Date_Time.day = modes.Mode_Date_Time.day + modes.temp_Mode_Piece.day;
          modes.Mode_Date_Time.hour = modes.Mode_Date_Time.hour + modes.temp_Mode_Piece.hour;
          modes.Mode_Date_Time.minute = modes.Mode_Date_Time.minute + modes.temp_Mode_Piece.minute;
          modes.Mode_Date_Time.second = modes.Mode_Date_Time.second + modes.temp_Mode_Piece.second;
        }
        else if(input2==1){
          modes.Mode_Date_Time.year = modes.temp_Mode_DateTime.year + modes.temp_Mode_Piece.year;
          modes.Mode_Date_Time.month = modes.temp_Mode_DateTime.month + modes.temp_Mode_Piece.month;
          modes.Mode_Date_Time.week = modes.temp_Mode_DateTime.week + modes.temp_Mode_Piece.week;
          modes.Mode_Date_Time.day = modes.temp_Mode_DateTime.day + modes.temp_Mode_Piece.day;
          modes.Mode_Date_Time.hour = modes.temp_Mode_DateTime.hour + modes.temp_Mode_Piece.hour;
          modes.Mode_Date_Time.minute = modes.temp_Mode_DateTime.minute + modes.temp_Mode_Piece.minute;
          modes.Mode_Date_Time.second = modes.temp_Mode_DateTime.second + modes.temp_Mode_Piece.second;
        }
      }

      if((input1==2 && input2==3) || (input1==3 && input2==2)) {
        if(input1==2) {
          modes.Mode_DateTime.year = modes.Mode_Date.year;
          modes.Mode_DateTime.month = modes.Mode_Date.month;
          modes.Mode_DateTime.week = modes.Mode_Date.week;
          modes.Mode_DateTime.day = modes.Mode_Date.day;
          modes.Mode_DateTime.hour = modes.temp_Mode_Time.hour;
          modes.Mode_DateTime.minute = modes.temp_Mode_Time.minute;
          modes.Mode_DateTime.second = modes.temp_Mode_Time.second;
        }
        if(input1==3){
          modes.Mode_DateTime.year  =  modes.temp_Mode_Date.year;
          modes.Mode_DateTime.month =  modes.temp_Mode_Date.month;
          modes.Mode_DateTime.week =   modes.temp_Mode_Date.week;
          modes.Mode_DateTime.day  =   modes.temp_Mode_Date.day;
          modes.Mode_DateTime.hour =   modes.temp_Mode_Time.hour;
          modes.Mode_DateTime.minute = modes.temp_Mode_Time.minute;
          modes.Mode_DateTime.second = modes.temp_Mode_Time.second;
        }
      }

      if(input1==5 && input2==5) {
        modes.Mode_SimpleNum+=modes.temp_Mode_SimpleNum;
      }
    }


    if(output.preOp=='-'){
      if(input1==1 && input2==1){
        modes.Mode_Piece.year-=modes.temp_Mode_Piece.year;
        modes.Mode_Piece.month-=modes.temp_Mode_Piece.month;
        modes.Mode_Piece.week-=modes.temp_Mode_Piece.week;
        modes.Mode_Piece.day-=modes.temp_Mode_Piece.day;
        modes.Mode_Piece.hour-=modes.temp_Mode_Piece.hour;
        modes.Mode_Piece.minute-=modes.temp_Mode_Piece.minute;
        modes.Mode_Piece.second-=modes.temp_Mode_Piece.second;
      }
      if(input1==2 && input2==1){
        modes.Mode_Time.hour=modes.temp_Mode_Time.hour - modes.Mode_Piece.hour;
        modes.Mode_Time.minute=modes.temp_Mode_Time.minute - modes.Mode_Piece.minute;
        modes.Mode_Time.second=modes.temp_Mode_Time.second - modes.Mode_Piece.second;
      }
      if(input1==3 && input2==1){
        modes.Mode_Date_Time.year = modes.temp_Mode_Date.year - modes.Mode_Piece.year;
        modes.Mode_Date_Time.month = modes.temp_Mode_Date.month - modes.Mode_Piece.month;
        modes.Mode_Date_Time.week = modes.temp_Mode_Date.week - modes.Mode_Piece.week;
        modes.Mode_Date_Time.day = modes.temp_Mode_Date.day - modes.Mode_Piece.day;
        modes.Mode_Date_Time.hour = modes.temp_Mode_Date.hour - modes.Mode_Piece.hour;
        modes.Mode_Date_Time.minute = modes.temp_Mode_Date.minute - modes.Mode_Piece.minute;
        modes.Mode_Date_Time.second = modes.temp_Mode_Date.second - modes.Mode_Piece.second;
      }
      if(input1==4 && input2==1){
        modes.Mode_Date_Time.year = modes.temp_Mode_DateTime.year - modes.temp_Mode_Piece.year;
        modes.Mode_Date_Time.month = modes.temp_Mode_DateTime.month - modes.temp_Mode_Piece.month;
        modes.Mode_Date_Time.week = modes.temp_Mode_DateTime.week - modes.temp_Mode_Piece.week;
        modes.Mode_Date_Time.day = modes.temp_Mode_DateTime.day - modes.temp_Mode_Piece.day;
        modes.Mode_Date_Time.hour = modes.temp_Mode_DateTime.hour - modes.temp_Mode_Piece.hour;
        modes.Mode_Date_Time.minute = modes.temp_Mode_DateTime.minute - modes.temp_Mode_Piece.minute;
        modes.Mode_Date_Time.second = modes.temp_Mode_DateTime.second - modes.temp_Mode_Piece.second;
      }
      if(input1==5 && input2==5){
        modes.Mode_SimpleNum+=modes.temp_Mode_SimpleNum;
      }
    }
    if(output.preOp=='*')
    {
      if((input1==5 && input2==1)||(input1==1 && input2==5)){
        if(input1==5){
          modes.Mode_Piece.year=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.year;
          modes.Mode_Piece.month=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.month;
          modes.Mode_Piece.week=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.week;
          modes.Mode_Piece.day=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.day;
          modes.Mode_Piece.hour=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.hour;
          modes.Mode_Piece.minute=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.minute;
          modes.Mode_Piece.second=modes.temp_Mode_SimpleNum.num * modes.Mode_Piece.second;
        }
        if(input1==1){
          modes.Mode_Piece.year=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.year;
          modes.Mode_Piece.month=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.month;
          modes.Mode_Piece.week=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.week;
          modes.Mode_Piece.day=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.day;
          modes.Mode_Piece.hour=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.hour;
          modes.Mode_Piece.minute=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.minute;
          modes.Mode_Piece.second=modes.Mode_SimpleNum.num * modes.temp_Mode_Piece.second;
        }
      }
      if(input1==5 && input2==5){
        modes.Mode_SimpleNum.num=modes.Mode_SimpleNum.num*modes.temp_Mode_SimpleNum.num;
      }
    }
    if(output.preOp=='%'){
      if(input1==1 && input2==5) {
        modes.Mode_Piece.year =modes.temp_Mode_Piece.year / modes.Mode_SimpleNum.num;
        modes.Mode_Piece.month =modes.temp_Mode_Piece.month / modes.Mode_SimpleNum.num;
        modes.Mode_Piece.week =modes.temp_Mode_Piece.week / modes.Mode_SimpleNum.num;
        modes.Mode_Piece.day =modes.temp_Mode_Piece.day / modes.Mode_SimpleNum.num;
        modes.Mode_Piece.hour =modes.temp_Mode_Piece.hour / modes.Mode_SimpleNum.num;
        modes.Mode_Piece.minute =modes.temp_Mode_Piece.minute / modes.Mode_SimpleNum.num;
        modes.Mode_Piece.second =modes.temp_Mode_Piece.second / modes.Mode_SimpleNum.num;
      }
      if(input1==5 && input2==5){
        modes.Mode_SimpleNum.num=modes.temp_Mode_SimpleNum.num/modes.Mode_SimpleNum.num;
      }
    }
    if(output.preOp=='to'){
      if(input1==2 && input2==2){
        if(modes.temp_Mode_Time.hour>modes.Mode_Time.hour){
          modes.Mode_Piece.hour=modes.temp_Mode_Time.hour-modes.Mode_Time.hour;
          modes.Mode_Piece.minute=modes.temp_Mode_Time.minute-modes.Mode_Time.minute;
          modes.Mode_Piece.second=modes.temp_Mode_Time.second-modes.Mode_Time.second;
        }
        else{
          modes.Mode_Piece.hour=modes.Mode_Time.hour-modes.temp_Mode_Time.hour;
          modes.Mode_Piece.minute=modes.Mode_Time.minute-modes.temp_Mode_Time.minute;
          modes.Mode_Piece.second=modes.Mode_Time.second-modes.temp_Mode_Time.second;
        }
      }
      else if(input1==3 && input2==3){
        if(modes.temp_Mode_Date.hour>modes.Mode_Date.hour){
          modes.Mode_Piece.year=modes.temp_Mode_Date.year-modes.Mode_Date.day;
          modes.Mode_Piece.month=modes.temp_Mode_Date.month-modes.Mode_Date.month;
          modes.Mode_Piece.day=modes.temp_Mode_Date.day-modes.Mode_Date.day;
        }
        else{
          modes.Mode_Piece.year=modes.Mode_Date.year-modes.temp_Mode_Date.year;
          modes.Mode_Piece.month=modes.Mode_Date.minute-modes.temp_Mode_Date.month;
          modes.Mode_Piece.day=modes.Mode_Date.second-modes.temp_Mode_Date.day;
        }
      }
      else if(input1==4 && input2==4){
        if(modes.temp_Mode_Date.hour>modes.Mode_Date.hour){
          modes.Mode_Piece.year=modes.temp_Mode_DateTime.year-modes.Mode_DateTime.day;
          modes.Mode_Piece.month=modes.temp_Mode_DateTime.month-modes.Mode_DateTime.month;
          modes.Mode_Piece.week=modes.temp_Mode_DateTime.week-modes.Mode_DateTime.week;
          modes.Mode_Piece.day=modes.temp_Mode_DateTime.day-modes.Mode_DateTime.day;
          modes.Mode_Piece.hour=modes.temp_Mode_Time.hour-modes.Mode_Time.hour;
          modes.Mode_Piece.minute=modes.temp_Mode_Time.minute-modes.Mode_Time.minute;
          modes.Mode_Piece.second=modes.temp_Mode_Time.second-modes.Mode_Time.second;
        }
        else{
          modes.Mode_Piece.year=modes.Mode_Date.year-modes.temp_Mode_DateTime.year;
          modes.Mode_Piece.month=modes.Mode_Date.minute-modes.temp_Mode_DateTime.month;
          modes.Mode_Piece.day=modes.Mode_Date.second-modes.temp_Mode_DateTime.day;
          modes.Mode_Piece.week=modes.Mode_DateTime.week-modes.temp_Mode_DateTime.week;
          modes.Mode_Piece.hour=modes.Mode_DateTime.hour-modes.temp_Mode_DateTime.hour;
          modes.Mode_Piece.minute=modes.Mode_DateTime.minute-modes.temp_Mode_DateTime.minute;
          modes.Mode_Piece.second=modes.Mode_DateTime.second-modes.temp_Mode_DateTime.second;
        }
      }
    }

  };
  return output;
});
