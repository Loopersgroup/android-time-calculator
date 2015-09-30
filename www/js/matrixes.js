/**
 * Created by Hossein on 9/30/2015.
 */
app.factory('difinition',function()
{
  var i;
  var factory={};
  {
    factory.plusArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.plusArray[i] = new Array(5);
    factory.plusArray[0][0] = 1;
    factory.plusArray[0][1] = 2;
    factory.plusArray[0][2] = 4;
    factory.plusArray[0][3] = 4;
    factory.plusArray[0][4] = 0;
    factory.plusArray[1][0] = 2;
    factory.plusArray[1][1] = 0;
    factory.plusArray[1][2] = 4;
    factory.plusArray[1][3] = 0;
    factory.plusArray[1][4] = 0;
    factory.plusArray[2][0] = 4;
    factory.plusArray[2][1] = 0;
    factory.plusArray[2][2] = 0;
    factory.plusArray[2][3] = 0;
    factory.plusArray[2][4] = 0;
    factory.plusArray[3][0] = 4;
    factory.plusArray[3][1] = 0;
    factory.plusArray[3][2] = 0;
    factory.plusArray[3][3] = 0;
    factory.plusArray[3][4] = 0;
    factory.plusArray[4][0] = 0;
    factory.plusArray[4][1] = 0;
    factory.plusArray[4][2] = 0;
    factory.plusArray[4][3] = 0;
    factory.plusArray[4][4] = 5;

    ////////////////////////////////////////////////////////////////////////
    factory.minusArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.minusArray[i] = new Array(5);
    factory.minusArray[0][0] = 1;
    factory.minusArray[0][1] = 0;
    factory.minusArray[0][2] = 0;
    factory.minusArray[0][3] = 0;
    factory.minusArray[0][4] = 0;
    factory.minusArray[1][0] = 2;
    factory.minusArray[1][1] = 0;
    factory.minusArray[1][2] = 0;
    factory.minusArray[1][3] = 0;
    factory.minusArray[1][4] = 0;
    factory.minusArray[2][0] = 4;
    factory.minusArray[2][1] = 0;
    factory.minusArray[2][2] = 0;
    factory.minusArray[2][3] = 0;
    factory.minusArray[2][4] = 0;
    factory.minusArray[3][0] = 4;
    factory.minusArray[3][1] = 0;
    factory.minusArray[3][2] = 0;
    factory.minusArray[3][3] = 0;
    factory.minusArray[3][4] = 0;
    factory.minusArray[4][0] = 0;
    factory.minusArray[4][1] = 0;
    factory.minusArray[4][2] = 0;
    factory.minusArray[4][3] = 0;
    factory.minusArray[4][4] = 5;

    ///////////////////////////////////////////////////////////////////
    factory.ToArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.ToArray[i] = new Array(5);
    factory.ToArray[0][0] = 0;
    factory.ToArray[0][1] = 0;
    factory.ToArray[0][2] = 0;
    factory.ToArray[0][3] = 0;
    factory.ToArray[0][4] = 0;
    factory.ToArray[1][0] = 0;
    factory.ToArray[1][1] = 1;
    factory.ToArray[1][2] = 0;
    factory.ToArray[1][3] = 0;
    factory.ToArray[1][4] = 0;
    factory.ToArray[2][0] = 0;
    factory.ToArray[2][1] = 0;
    factory.ToArray[2][2] = 1;
    factory.ToArray[2][3] = 0;
    factory.ToArray[2][4] = 0;
    factory.ToArray[3][0] = 0;
    factory.ToArray[3][1] = 0;
    factory.ToArray[3][2] = 0;
    factory.ToArray[3][3] = 1;
    factory.ToArray[3][4] = 0;
    factory.ToArray[4][0] = 0;
    factory.ToArray[4][1] = 0;
    factory.ToArray[4][2] = 0;
    factory.ToArray[4][3] = 0;
    factory.ToArray[4][4] = 0;

    ////////////////////////////////////////////////////////
    factory.multiplyArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.multiplyArray[i] = new Array(5);
    factory.multiplyArray[0][0] = 0;
    factory.multiplyArray[0][1] = 0;
    factory.multiplyArray[0][2] = 0;
    factory.multiplyArray[0][3] = 0;
    factory.multiplyArray[0][4] = 1;
    factory.multiplyArray[1][0] = 0;
    factory.multiplyArray[1][1] = 0;
    factory.multiplyArray[1][2] = 0;
    factory.multiplyArray[1][3] = 0;
    factory.multiplyArray[1][4] = 0;
    factory.multiplyArray[2][0] = 0;
    factory.multiplyArray[2][1] = 0;
    factory.multiplyArray[2][2] = 0;
    factory.multiplyArray[2][3] = 0;
    factory.multiplyArray[2][4] = 0;
    factory.multiplyArray[3][0] = 0;
    factory.multiplyArray[3][1] = 0;
    factory.multiplyArray[3][2] = 0;
    factory.multiplyArray[3][3] = 0;
    factory.multiplyArray[3][4] = 0;
    factory.multiplyArray[4][0] = 1;
    factory.multiplyArray[4][1] = 0;
    factory.multiplyArray[4][2] = 0;
    factory.multiplyArray[4][3] = 0;
    factory.multiplyArray[4][4] = 5;

    ////////////////////////////////////////////////////////
    factory.divisionArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.divisionArray[i] = new Array(5);
    factory.divisionArray[0][0] = 0;
    factory.divisionArray[0][1] = 0;
    factory.divisionArray[0][2] = 0;
    factory.divisionArray[0][3] = 0;
    factory.divisionArray[0][4] = 0;
    factory.divisionArray[1][0] = 2;
    factory.divisionArray[1][1] = 0;
    factory.divisionArray[1][2] = 0;
    factory.divisionArray[1][3] = 0;
    factory.divisionArray[1][4] = 2;
    factory.divisionArray[2][0] = 0;
    factory.divisionArray[2][1] = 0;
    factory.divisionArray[2][2] = 0;
    factory.divisionArray[2][3] = 0;
    factory.divisionArray[2][4] = 3;
    factory.divisionArray[3][0] = 0;
    factory.divisionArray[3][1] = 0;
    factory.divisionArray[3][2] = 0;
    factory.divisionArray[3][3] = 0;
    factory.divisionArray[3][4] = 4;
    factory.divisionArray[4][0] = 0;
    factory.divisionArray[4][1] = 0;
    factory.divisionArray[4][2] = 0;
    factory.divisionArray[4][3] = 0;
    factory.divisionArray[4][4] = 5;
  }
  factory.status_key={
    num1:false,
    num2:false,
    num3:false,
    num4:false,
    num5:false,
    num6:false,
    num7:false,
    num8:false,
    num9:false,
    num0:false,
    slash:true,
    colon:true,
    plus:true,
    sub:true,
    dot:true,
    div:true,
    multi:true,
    to:true,
    year:true,
    mon:true,
    week:true,
    day:true,
    hour:true,
    min:true,
    sec:true
  };
  return factory;
});
