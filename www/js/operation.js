/**
 * Created by Hossein on 10/14/2015.
 */
app.factory("operation" ,function (difinition,modes,enabled){


  var output = {};
  //output.inputRes;
  output.preInputRes='';
  output.preOp='';
  output.plus = function ()
  {

  }
  var numi;


  output.multiply=function()
  {
    //console.log("salam")
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2) {

        numi=i;
        console.log(numi)
      }
    }

    for(var i =1 ; i<6 ; i++)
    {
      enabled.able[i] = difinition.divisionArray[numi][i];
    }
    output.preOp='*';
    output.preInputRes =numi;

  };



  output.division=function()
  {
    //console.log("salam33333")
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2) {

        numi=i;
        console.log(numi)
      }
    }

    for(var i =1 ; i<6 ; i++)
    {
      enabled.able[i] = difinition.divisionArray[numi][i];
    }
    output.preOp='%';
    output.preInputRes =numi;

  };

  output.To=function()
  {
    console.log("salamtooooooooooo")
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2) {

        numi=i;
        console.log(numi)
      }
    }

    for(var i =1 ; i<6 ; i++)
    {
      enabled.able[i] = difinition.ToArray[numi][i];
    }
    output.preOp='to';
    output.preInputRes =numi;

  };

var m;

  output.time_reform=function()
  {


    (modes.Mode_Time.second)=70;
    (modes.Mode_Time.hour)=50;
    (modes.Mode_Time.minute)=60;


    console.log("h1"+modes.Mode_Time.second);
    console.log("h2"+modes.Mode_Time.hour);
    console.log("h3"+modes.Mode_Time.minute);





    modes.Mode_Time.second1=parseInt(modes.Mode_Time.second);
    modes.Mode_Time.hour1=parseInt(modes.Mode_Time.hour);
    modes.Mode_Time.minute1=parseInt(modes.Mode_Time.minute);


    console.log("honmmmmmmmm1"+modes.Mode_Time.second1);
    console.log("honmmmmmmmmm2"+modes.Mode_Time.hour1);
    console.log("honmmmmmmmmmm3"+modes.Mode_Time.minute1);



    if(modes.Mode_Time.second1 <0)
    {
       m= modes.Mode_Time.second1;
      modes.Mode_Time.second1=60+modes.Mode_Time.second1%60;
      modes.Mode_Time.minute1 += ( m-(m)%60) / 60;
      if(m % 60 !=0)
      {
        modes.Mode_Time.minute1 -=1;
      }
    }
    if(modes.Mode_Time.minute1 <0)
    {
     m=modes.Mode_Time.minute1;
      modes.Mode_Time.minute1=60+((modes.Mode_Time.minute1)%60);
      modes.Mode_Time.hour1 += ( m-(m)%60) / 60;
      if(m % 60 !=0)
      {
        modes.Mode_Time.hour1 -=1;
      }
    }
    if(modes.Mode_Time.hour1 <0)
    {
      m=modes.Mode_Time.hour1;
      modes.Mode_Time.hour1=24+modes.Mode_Time.hour1%24;
    }


    if (modes.Mode_Time.hour1 >=0){
      modes.Mode_Time.minute1+=((modes.Mode_Time.hour1)%1)*60;
      modes.Mode_Time.hour1-=((modes.Mode_Time.hour1)%1);
    }
    if (modes.Mode_Time.minute1 >=0){
      modes.Mode_Time.second1+=((modes.Mode_Time.minute1)%1)*60;
      modes.Mode_Time.minute1-=((modes.Mode_Time.minute1)%1);
    }
    if (modes.Mode_Time.second1 >=0){
      modes.Mode_Time.second1-=((modes.Mode_Time.second1)%1);
    }

    if (modes.Mode_Time.second1 >=0) {
      m = modes.Mode_Time.second1;
      modes.Mode_Time.second1 = m % 60;
      modes.Mode_Time.minute1 += ( m - modes.Mode_Time.second1) / 60;
    }
    else {
      m=modes.Mode_Time.second1;
      modes.Mode_Time.second1=60+modes.Mode_Time.second1%60;
      modes.Mode_Time.minute1 += ( m-(m)%60) / 60;
      if(m % 60 !=0)
      {
        modes.Mode_Time.minute1 -=1;
      }
    }
    if (modes.Mode_Time.minute1 >= 0) {
      m = modes.Mode_Time.minute1;
      modes.Mode_Time.minute1 = m % 60;
      modes.Mode_Time.hour1 += ( m - modes.Mode_Time.minute1) / 60;
    }
    else {
      m=modes.Mode_Time.minute1;
      modes.Mode_Time.minute1=60+((modes.Mode_Time.minute1)%60);
      modes.Mode_Time.hour1 += ( m-(m)%60) / 60;
      if(m % 60 !=0)
      {
        modes.Mode_Time.hour1 -=1;
      }
    }
    if(modes.Mode_Time.hour1>=0) {
      m = modes.Mode_Time.hour1;
      modes.Mode_Time.hour1 = m % 24;

    }

    else {
      m=modes.Mode_Time.hour1;
      modes.Mode_Time.hour1=24+modes.Mode_Time.hour1%24;

    }





  };




  output.date_reform=function()
  {



  }




  return output;
});
