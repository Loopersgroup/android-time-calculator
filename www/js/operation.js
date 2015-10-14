/**
 * Created by Hossein on 10/14/2015.
 */
app.factory('operation' ,function (modes,enabled,difinition){

  var output = {};
  output.inputRes;
  output.preInputRes;
  output.preOp;

  output.plus = function ()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2)
        output.inputRes = i;
    }

    for (var i=1;i<6;i++)
      enabled.able[i] = difinition.plusArray[output.inputRes][i];



    output.preInputRes=output.inputRes;
    output.preOp='+';
  }
  return output;
});
