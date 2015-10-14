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
    if(input_res[i]==2) input2=input_res;
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
      if((input1==1 && input2==2) || (input1==2 && input2==1)) {


      }
      if((input1==1 && input2==3) || (input1==3 && input2==1)) {}
      if((input1==2 && input2==3) || (input1==3 && input2==2)) {}
      if(input1==5 && input2==5) {}

    }
  }
  return output;
});
