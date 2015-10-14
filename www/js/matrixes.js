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
    factory.plusArray[1][1] = 1;
    factory.plusArray[1][2] = 2;
    factory.plusArray[1][3] = 4;
    factory.plusArray[1][4] = 4;
    factory.plusArray[1][5] = 0;
    factory.plusArray[2][1] = 2;
    factory.plusArray[2][2] = 0;
    factory.plusArray[2][3] = 4;
    factory.plusArray[2][4] = 0;
    factory.plusArray[2][5] = 0;
    factory.plusArray[3][1] = 4;
    factory.plusArray[3][2] = 0;
    factory.plusArray[3][3] = 0;
    factory.plusArray[3][4] = 0;
    factory.plusArray[3][5] = 0;
    factory.plusArray[4][1] = 4;
    factory.plusArray[4][2] = 0;
    factory.plusArray[4][3] = 0;
    factory.plusArray[4][4] = 0;
    factory.plusArray[4][5] = 0;
    factory.plusArray[5][1] = 0;
    factory.plusArray[5][2] = 0;
    factory.plusArray[5][3] = 0;
    factory.plusArray[5][4] = 0;
    factory.plusArray[5][5] = 5;

    ////////////////////////////////////////////////////////////////////////
    factory.minusArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.minusArray[i] = new Array(5);
    factory.minusArray[1][1] = 1;
    factory.minusArray[1][2] = 0;
    factory.minusArray[1][3] = 0;
    factory.minusArray[1][4] = 0;
    factory.minusArray[1][5] = 0;
    factory.minusArray[2][1] = 2;
    factory.minusArray[2][2] = 0;
    factory.minusArray[2][3] = 0;
    factory.minusArray[2][4] = 0;
    factory.minusArray[2][5] = 0;
    factory.minusArray[3][1] = 4;
    factory.minusArray[3][2] = 0;
    factory.minusArray[3][3] = 0;
    factory.minusArray[3][4] = 0;
    factory.minusArray[3][5] = 0;
    factory.minusArray[4][1] = 4;
    factory.minusArray[4][2] = 0;
    factory.minusArray[4][3] = 0;
    factory.minusArray[4][4] = 0;
    factory.minusArray[4][5] = 0;
    factory.minusArray[5][1] = 0;
    factory.minusArray[5][2] = 0;
    factory.minusArray[5][3] = 0;
    factory.minusArray[5][4] = 0;
    factory.minusArray[5][5] = 5;

    ///////////////////////////////////////////////////////////////////
    factory.ToArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.ToArray[i] = new Array(5);
    factory.ToArray[1][1] = 0;
    factory.ToArray[1][2] = 0;
    factory.ToArray[1][3] = 0;
    factory.ToArray[1][4] = 0;
    factory.ToArray[1][5] = 0;
    factory.ToArray[2][1] = 0;
    factory.ToArray[2][2] = 1;
    factory.ToArray[2][3] = 0;
    factory.ToArray[2][4] = 0;
    factory.ToArray[2][5] = 0;
    factory.ToArray[3][1] = 0;
    factory.ToArray[3][2] = 0;
    factory.ToArray[3][3] = 1;
    factory.ToArray[3][4] = 0;
    factory.ToArray[3][5] = 0;
    factory.ToArray[4][1] = 0;
    factory.ToArray[4][2] = 0;
    factory.ToArray[4][3] = 0;
    factory.ToArray[4][4] = 1;
    factory.ToArray[4][5] = 0;
    factory.ToArray[5][1] = 0;
    factory.ToArray[5][2] = 0;
    factory.ToArray[5][3] = 0;
    factory.ToArray[5][4] = 0;
    factory.ToArray[5][5] = 0;

    ////////////////////////////////////////////////////////
    factory.multiplyArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.multiplyArray[i] = new Array(5);
    factory.multiplyArray[1][1] = 0;
    factory.multiplyArray[1][2] = 0;
    factory.multiplyArray[1][3] = 0;
    factory.multiplyArray[1][4] = 0;
    factory.multiplyArray[1][5] = 1;
    factory.multiplyArray[2][1] = 0;
    factory.multiplyArray[2][2] = 0;
    factory.multiplyArray[2][3] = 0;
    factory.multiplyArray[2][4] = 0;
    factory.multiplyArray[2][5] = 0;
    factory.multiplyArray[3][1] = 0;
    factory.multiplyArray[3][2] = 0;
    factory.multiplyArray[3][3] = 0;
    factory.multiplyArray[3][4] = 0;
    factory.multiplyArray[3][5] = 0;
    factory.multiplyArray[4][1] = 0;
    factory.multiplyArray[4][2] = 0;
    factory.multiplyArray[4][3] = 0;
    factory.multiplyArray[4][4] = 0;
    factory.multiplyArray[4][5] = 0;
    factory.multiplyArray[5][1] = 1;
    factory.multiplyArray[5][2] = 0;
    factory.multiplyArray[5][3] = 0;
    factory.multiplyArray[5][4] = 0;
    factory.multiplyArray[5][5] = 5;

    ////////////////////////////////////////////////////////
    factory.divisionArray = new Array(5);
    for (i = 0; i < 5; i++)
      factory.divisionArray[i] = new Array(5);
    factory.divisionArray[1][1] = 0;
    factory.divisionArray[1][2] = 0;
    factory.divisionArray[1][3] = 0;
    factory.divisionArray[1][4] = 0;
    factory.divisionArray[1][5] = 0;
    factory.divisionArray[2][1] = 2;
    factory.divisionArray[2][2] = 0;
    factory.divisionArray[2][3] = 0;
    factory.divisionArray[2][4] = 0;
    factory.divisionArray[2][5] = 2;
    factory.divisionArray[3][1] = 0;
    factory.divisionArray[3][2] = 0;
    factory.divisionArray[3][3] = 0;
    factory.divisionArray[3][4] = 0;
    factory.divisionArray[3][5] = 3;
    factory.divisionArray[4][1] = 0;
    factory.divisionArray[4][2] = 0;
    factory.divisionArray[4][3] = 0;
    factory.divisionArray[4][4] = 0;
    factory.divisionArray[4][5] = 4;
    factory.divisionArray[5][1] = 0;
    factory.divisionArray[5][2] = 0;
    factory.divisionArray[5][3] = 0;
    factory.divisionArray[5][4] = 0;
    factory.divisionArray[5][5] = 5;
  }

  return factory;
});
