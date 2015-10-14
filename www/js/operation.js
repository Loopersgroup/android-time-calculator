/**
 * Created by Hossein on 10/14/2015.
 */
app.factory('operation' ,function (modes,enabled,difinition){

  var output = {};

  output.preInputRes;
  output.preOp;

  output.plus = function ()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2)
        output.preInputRes = i;
    }

    for (var i=1;i<6;i++)
      enabled.able[i] = difinition.plusArray[output.preInputRes][i];
    for (var i=1;i<6;i++)
      console.log("Able " + i + "=" + enabled.able[i]);
  }
  return output;
});
