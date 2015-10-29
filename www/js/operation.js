/**
 * Created by Hossein on 10/14/2015.
 */
app.factory("operation" ,function (modes,enabled,difinition,reform){

  var output = {};
  output.inputRes='';
  output.preInputRes='';
  output.preOp;
  output.plus = function ()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2)
        output.inputRes = i;
    }
    if(output.inputRes == 1)
    {
      modes.temp_Mode_Piece.year = modes.Mode_Piece.year;
      modes.temp_Mode_Piece.month = modes.Mode_Piece.month;
      modes.temp_Mode_Piece.week = modes.Mode_Piece.week;
      modes.temp_Mode_Piece.day = modes.Mode_Piece.day;
      modes.temp_Mode_Piece.hour = modes.Mode_Piece.hour;
      modes.temp_Mode_Piece.minute = modes.Mode_Piece.minute;
      modes.temp_Mode_Piece.second = modes.Mode_Piece.second;
    }
    else if(output.inputRes == 2)
    {
      modes.temp_Mode_Time.hour = modes.Mode_Time.hour;
      modes.temp_Mode_Time.minute = modes.Mode_Time.minute;
      modes.temp_Mode_Time.second = modes.Mode_Time.second;
    }
    else if(output.inputRes == 3)
    {
      modes.temp_Mode_Date.year = modes.Mode_Date.year;
      modes.temp_Mode_Date.month = modes.Mode_Date.month;
      modes.temp_Mode_Date.day = modes.Mode_Date.day;
      modes.temp_Mode_Date.hour = modes.Mode_Date.hour;
      modes.temp_Mode_Date.minute = modes.Mode_Date.minute;
      modes.temp_Mode_Date.second = modes.Mode_Date.second;
    }
    else if(output.inputRes == 5)
    {
      modes.temp_Mode_SimpleNum.num = modes.Mode_SimpleNum.num;
    }
    for (var i=1;i<6;i++)
      enabled.able[i] = difinition.plusArray[output.inputRes][i]
    output.preInputRes = output.inputRes;
    output.preOp = '+';
  }
  output.mines = function()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2)
        output.inputRes = i;
    }
      if(output.inputRes == 1)
      {
        modes.temp_Mode_Piece.year = modes.Mode_Piece.year;
        modes.temp_Mode_Piece.month = modes.Mode_Piece.month;
        modes.temp_Mode_Piece.week = modes.Mode_Piece.week;
        modes.temp_Mode_Piece.day = modes.Mode_Piece.day;
        modes.temp_Mode_Piece.hour = modes.Mode_Piece.hour;
        modes.temp_Mode_Piece.minute = modes.Mode_Piece.minute;
        modes.temp_Mode_Piece.second = modes.Mode_Piece.second;
      }
      else if(output.inputRes == 2)
      {
        modes.temp_Mode_Time.hour = modes.Mode_Time.hour;
        modes.temp_Mode_Time.minute = modes.Mode_Time.minute;
        modes.temp_Mode_Time.second = modes.Mode_Time.second;
      }
      else if(output.inputRes == 3)
      {
        modes.temp_Mode_Date.year = modes.Mode_Date.year;
        modes.temp_Mode_Date.month = modes.Mode_Date.minute;
        modes.temp_Mode_Date.second = modes.Mode_Date.second;
      }
      else if(output.inputRes == 5)
      {
        modes.temp_Mode_SimpleNum = modes.Mode_SimpleNum;
      }
    for (var i=1;i<6;i++)
      enabled.able[i] = difinition.minusArray[output.inputRes][i]
    output.preInputRes = output.inputRes;
    output.preOp = '-';
  }


  output.equal =function ()
  {
    var input2;
    var input1;
    for(var i=1;i<6;i++)
      if(modes.input_res[i]==2) output.inputRes=i;
    input1 = output.preInputRes;
    input2 = output.inputRes
    if(output.preOp=='+')
    {
      console.log("=========================");
      if(input1==1 && input2==1){
        modes.temp_Mode_Piece.year = parseFloat(modes.Mode_Piece.year ) +  parseFloat(modes.temp_Mode_Piece.year);
        modes.temp_Mode_Piece.month =parseFloat(modes.Mode_Piece.month) + parseFloat(modes.temp_Mode_Piece.month);
        modes.temp_Mode_Piece.week = parseFloat(modes.Mode_Piece.week) + parseFloat(modes.temp_Mode_Piece.week);
        modes.temp_Mode_Piece.day =parseFloat(modes.Mode_Piece.day ) + parseFloat(modes.temp_Mode_Piece.day);
        modes.temp_Mode_Piece.hour =parseFloat(modes.Mode_Piece.hour ) + parseFloat(modes.temp_Mode_Piece.hour);
        modes.temp_Mode_Piece.minute =parseFloat(modes.Mode_Piece.minute) +parseFloat(modes.temp_Mode_Piece.minute);
        modes.temp_Mode_Piece.second =parseFloat(modes.Mode_Piece.second) + parseFloat(modes.temp_Mode_Piece.second);
      }
      if((input1==1 && input2==2) || (input1==2 && input2==1))
      {
        if(input1==1) {
          modes.temp_Mode_Time.hour = parseFloat(modes.Mode_Time.hour ) + parseFloat(modes.temp_Mode_Piece.hour);
          modes.temp_Mode_Time.minute = parseFloat(modes.Mode_Time.minute ) + parseFloat(modes.temp_Mode_Piece.minute);
          modes.temp_Mode_Time.second = parseFloat(modes.Mode_Time.second ) + parseFloat(modes.temp_Mode_Piece.second);
        }
        else if(input1==2){
          modes.temp_Mode_Time.hour = parseFloat(modes.temp_Mode_Time.hour ) + parseFloat(modes.Mode_Piece.hour);
          modes.temp_Mode_Time.minute = parseFloat(modes.temp_Mode_Time.minute ) + parseFloat(modes.Mode_Piece.minute);
          modes.temp_Mode_Time.second = parseFloat(modes.temp_Mode_Time.second ) + parseFloat(modes.Mode_Piece.second);

          console.log("test = " + modes.Mode_Time.hour + " : " + modes.Mode_Time.minute + " : " + modes.Mode_Time.second )
         /* modes.Mode_Time.hour  = modes.temp_Mode_Time.hour;
          modes.Mode_Time.minute = modes.temp_Mode_Time.minute;
          modes.Mode_Time.second = modes.temp_Mode_Time.second;*/
        }
      }
      if((input1==1 && input2==3) || (input1==3 && input2==1)) {
        var date = new Date(modes.temp_Mode_Date.year,modes.temp_Mode_Date.month - 1,modes.temp_Mode_Date.day);

        reform.reform_piece_time();

        //var d = new Date(modes.Mode_Date.year,modes.Mode_Date.month,modes.Mode_Date.day);
        //d.setYear(d.getFullYear() + parseInt(modes.Mode_Piece.year));
        //d.setMonth(d.getMonth() + parseInt(modes.Mode_Piece.month));
        date.setDate(date.getDate()+ parseInt(modes.Mode_Piece.day));
        modes.Mode_Piece.day = 0;

        var m = modes.Mode_Piece.month;
        date.setMonth(date.getMonth() +parseFloat(m) - parseFloat(m)%1);
        modes.Mode_Piece.month = parseFloat(m)%1;
        reform.reform_piece_date(date);



        date.setYear(date.getFullYear() + parseInt(modes.Mode_Piece.year));
        date.setMonth(date.getMonth() + parseInt(modes.Mode_Piece.month));
        date.setDate(date.getDate()+ parseInt(modes.Mode_Piece.day));
console.log("Day : " + modes.Mode_Piece.day + "Month : " + modes.Mode_Piece.month + "Year : " + modes.Mode_Piece.year);
        modes.temp_Mode_DateTime.year = date.getFullYear();
        modes.temp_Mode_DateTime.month = date.getMonth() + 1;
        modes.temp_Mode_DateTime.day = date.getDate();

        modes.temp_Mode_DateTime.hour = modes.Mode_Piece.hour
        modes.temp_Mode_DateTime.minute = modes.Mode_Piece.minute
        modes.temp_Mode_DateTime.second = modes.Mode_Piece.second
      }
      if((input1==1 && input2==4) || (input1==4 && input2==1)) {
        if(input1==1) {
          modes.temp_Mode_DateTime.year = modes.Mode_DateTime.year + modes.temp_Mode_Piece.year;
          modes.temp_Mode_DateTime.month = modes.Mode_DateTime.month + modes.temp_Mode_Piece.month;
          modes.temp_Mode_DateTime.week = modes.Mode_DateTime.week + modes.temp_Mode_Piece.week;
          modes.temp_Mode_DateTime.day = modes.Mode_DateTime.day + modes.temp_Mode_Piece.day;
          modes.temp_Mode_DateTime.hour = modes.Mode_DateTime.hour + modes.temp_Mode_Piece.hour;
          modes.temp_Mode_DateTime.minute = modes.Mode_DateTime.minute + modes.temp_Mode_Piece.minute;
          modes.temp_Mode_DateTime.second = modes.Mode_DateTime.second + modes.temp_Mode_Piece.second;
        }
        else if(input2==1){
          modes.temp_Mode_DateTime.year = modes.temp_Mode_DateTime.year + modes.temp_Mode_Piece.year;
          modes.temp_Mode_DateTime.month = modes.temp_Mode_DateTime.month + modes.temp_Mode_Piece.month;
          modes.temp_Mode_DateTime.week = modes.temp_Mode_DateTime.week + modes.temp_Mode_Piece.week;
          modes.temp_Mode_DateTime.day = modes.temp_Mode_DateTime.day + modes.temp_Mode_Piece.day;
          modes.temp_Mode_DateTime.hour = modes.temp_Mode_DateTime.hour + modes.temp_Mode_Piece.hour;
          modes.temp_Mode_DateTime.minute = modes.temp_Mode_DateTime.minute + modes.temp_Mode_Piece.minute;
          modes.temp_Mode_DateTime.second = modes.temp_Mode_DateTime.second + modes.temp_Mode_Piece.second;
        }
      }

      if((input1==2 && input2==3) || (input1==3 && input2==2)) {
        if(input1==2) {
          modes.temp_Mode_DateTime.year = modes.Mode_Date.year;
          modes.temp_Mode_DateTime.month = modes.Mode_Date.month;
          modes.temp_Mode_DateTime.week = modes.Mode_Date.week;
          modes.temp_Mode_DateTime.day = modes.Mode_Date.day;
          modes.temp_Mode_DateTime.hour = modes.temp_Mode_Time.hour;
          modes.temp_Mode_DateTime.minute = modes.temp_Mode_Time.minute;
          modes.temp_Mode_DateTime.second = modes.temp_Mode_Time.second;
        }
        if(input1==3){
          modes.temp_Mode_DateTime.year  =  modes.temp_Mode_Date.year;
          modes.temp_Mode_DateTime.month =  modes.temp_Mode_Date.month;
          modes.temp_Mode_DateTime.week =   modes.temp_Mode_Date.week;
          modes.temp_Mode_DateTime.day  =   modes.temp_Mode_Date.day;
          modes.temp_Mode_DateTime.hour =   modes.temp_Mode_Time.hour;
          modes.temp_Mode_DateTime.minute = modes.temp_Mode_Time.minute;
          modes.temp_Mode_DateTime.second = modes.temp_Mode_Time.second;
        }
      }

      if(input1==5 && input2==5) {
        modes.temp_Mode_SimpleNum.num =parseFloat(modes.Mode_SimpleNum.num ) + parseFloat(modes.temp_Mode_SimpleNum.num);
      }
    }


    if(output.preOp=='-'){
      if(input1==1 && input2==1){
        modes.temp_Mode_Piece.year = parseFloat(modes.temp_Mode_Piece.year) - parseFloat(modes.Mode_Piece.year);
        modes.temp_Mode_Piece.month = parseFloat(modes.temp_Mode_Piece.month) - parseFloat(modes.Mode_Piece.month);
        modes.temp_Mode_Piece.week = parseFloat(modes.temp_Mode_Piece.week) - parseFloat(modes.Mode_Piece.week);
        modes.temp_Mode_Piece.day = parseFloat(modes.temp_Mode_Piece.day) - parseFloat(modes.Mode_Piece.day);
        modes.temp_Mode_Piece.hour = parseFloat(modes.temp_Mode_Piece.hour) - parseFloat(modes.Mode_Piece.hour );
        modes.temp_Mode_Piece.minute = parseFloat(modes.temp_Mode_Piece.minute) -parseFloat(modes.Mode_Piece.minute) ;
        modes.temp_Mode_Piece.second =parseFloat(modes.temp_Mode_Piece.second) - parseFloat(modes.Mode_Piece.second);
      }
      if(input1==2 && input2==1){
        modes.temp_Mode_Time.hour = parseFloat(modes.temp_Mode_Time.hour) - parseFloat(modes.Mode_Piece.hour);
        modes.temp_Mode_Time.minute =parseFloat(modes.temp_Mode_Time.minute) - parseFloat(modes.Mode_Piece.minute);
        modes.temp_Mode_Time.second =parseFloat(modes.temp_Mode_Time.second) - parseFloat(modes.Mode_Piece.second);
      }
      if(input1==3 && input2==1){
        modes.temp_Mode_DateTime.year = modes.temp_Mode_Date.year - modes.Mode_Piece.year;
        modes.temp_Mode_DateTime.month = modes.temp_Mode_Date.month - modes.Mode_Piece.month;
        modes.temp_Mode_DateTime.week = modes.temp_Mode_Date.week - modes.Mode_Piece.week;
        modes.temp_Mode_DateTime.day = modes.temp_Mode_Date.day - modes.Mode_Piece.day;
        modes.temp_Mode_DateTime.hour = modes.temp_Mode_Date.hour - modes.Mode_Piece.hour;
        modes.temp_Mode_DateTime.minute = modes.temp_Mode_Date.minute - modes.Mode_Piece.minute;
        modes.temp_Mode_DateTime.second = modes.temp_Mode_Date.second - modes.Mode_Piece.second;
      }
      if(input1==4 && input2==1){
        modes.temp_Mode_DateTime.year = modes.temp_Mode_DateTime.year - modes.temp_Mode_Piece.year;
        modes.temp_Mode_DateTime.month = modes.temp_Mode_DateTime.month - modes.temp_Mode_Piece.month;
        modes.temp_Mode_DateTime.week = modes.temp_Mode_DateTime.week - modes.temp_Mode_Piece.week;
        modes.temp_Mode_DateTime.day = modes.temp_Mode_DateTime.day - modes.temp_Mode_Piece.day;
        modes.temp_Mode_DateTime.hour = modes.temp_Mode_DateTime.hour - modes.temp_Mode_Piece.hour;
        modes.temp_Mode_DateTime.minute = modes.temp_Mode_DateTime.minute - modes.temp_Mode_Piece.minute;
        modes.temp_Mode_DateTime.second = modes.temp_Mode_DateTime.second - modes.temp_Mode_Piece.second;
      }
      if(input1==5 && input2==5){
        modes.temp_Mode_SimpleNum = parseFloat(modes.Mode_SimpleNum ) - parseFloat(modes.temp_Mode_SimpleNum);
      }
    }
    if(output.preOp=='*')
    {
      console.log("Input 1 & 2 :" + input1 + ":" + input2 +"Temp = " + modes.temp_Mode_SimpleNum.num + "Avvali = " + modes.temp_Mode_SimpleNum.num + "Dovvomi = " + modes.Mode_SimpleNum.num)
      if((input1==5 && input2==1)||(input1==1 && input2==5)){
        if(input1==5){
          modes.temp_Mode_Piece.year =parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.year)
          modes.temp_Mode_Piece.month =parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.month)
          modes.temp_Mode_Piece.week = parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.week)
          modes.temp_Mode_Piece.day = parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.day)
          modes.temp_Mode_Piece.hour = parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.hour)
          modes.temp_Mode_Piece.minute = parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.minute)
          modes.temp_Mode_Piece.second = parseFloat(modes.temp_Mode_SimpleNum.num) *parseFloat(modes.Mode_Piece.second)
        }
        else if(input1==1){
          modes.temp_Mode_Piece.year = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.year);
          modes.temp_Mode_Piece.month = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.month);
          modes.temp_Mode_Piece.week = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.week);
          modes.temp_Mode_Piece.day = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.day);
          modes.temp_Mode_Piece.hour = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.hour);
          modes.temp_Mode_Piece.minute = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.minute);
          modes.temp_Mode_Piece.second = parseFloat(modes.Mode_SimpleNum.num) *parseFloat(modes.temp_Mode_Piece.second);
        }
      }
      if(input1==5 && input2==5){
        modes.temp_Mode_SimpleNum.num =parseFloat(modes.Mode_SimpleNum.num) * parseFloat(modes.temp_Mode_SimpleNum.num);
      }
    }
    if(output.preOp=='%'){
      if(input1==1 && input2==5) {
        modes.temp_Mode_Piece.year = modes.temp_Mode_Piece.year / modes.Mode_SimpleNum.num;
        modes.temp_Mode_Piece.month = modes.temp_Mode_Piece.month / modes.Mode_SimpleNum.num;
        modes.temp_Mode_Piece.week = modes.temp_Mode_Piece.week / modes.Mode_SimpleNum.num;
        modes.temp_Mode_Piece.day = modes.temp_Mode_Piece.day / modes.Mode_SimpleNum.num;
        modes.temp_Mode_Piece.hour = modes.temp_Mode_Piece.hour / modes.Mode_SimpleNum.num;
        modes.temp_Mode_Piece.minute =modes.temp_Mode_Piece.minute / modes.Mode_SimpleNum.num;
        modes.temp_Mode_Piece.second =modes.temp_Mode_Piece.second / modes.Mode_SimpleNum.num;
      }
      if(input1==5 && input2==5){
        modes.temp_Mode_SimpleNum.num = modes.temp_Mode_SimpleNum.num / modes.Mode_SimpleNum.num;
      }
    }
    if(output.preOp=='to'){
      if(input1==2 && input2==2){
        if(modes.temp_Mode_Time.hour > modes.Mode_Time.hour ||
          modes.temp_Mode_Time.hour == modes.Mode_Time.hour && modes.temp_Mode_Time.minute > modes.Mode_Time.minute ||
          modes.temp_Mode_Time.hour == modes.Mode_Time.hour && modes.temp_Mode_Time.minute == modes.Mode_Time.minute  && modes.temp_Mode_Time.second > modes.Mode_Time.second
        ){

            modes.temp_Mode_Piece.hour =parseFloat(modes.temp_Mode_Time.hour) - parseFloat(modes.Mode_Time.hour);
            modes.temp_Mode_Piece.minute = parseFloat(modes.temp_Mode_Time.minute) - parseFloat(modes.Mode_Time.minute);
            modes.temp_Mode_Piece.second = parseFloat(modes.temp_Mode_Time.second) - parseFloat(modes.Mode_Time.second);
        }
        else
        {
          modes.temp_Mode_Piece.hour = parseFloat(modes.Mode_Time.hour) - parseFloat(modes.temp_Mode_Time.hour);
          modes.temp_Mode_Piece.minute = parseFloat(modes.Mode_Time.minute) - parseFloat(modes.temp_Mode_Time.minute);
          modes.temp_Mode_Piece.second = parseFloat(modes.Mode_Time.second) - parseFloat(modes.temp_Mode_Time.second);
        }
      }
      else if(input1==3 && input2==3){
          reform.test();
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


  //============== Mina =======

  output.multiply=function()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2) {
        output.inputRes=i;
      }
    }
    if(output.inputRes == 1)
    {
      modes.temp_Mode_Piece.year = modes.Mode_Piece.year;
      modes.temp_Mode_Piece.month = modes.Mode_Piece.month;
      modes.temp_Mode_Piece.week = modes.Mode_Piece.week;
      modes.temp_Mode_Piece.day = modes.Mode_Piece.day;
      modes.temp_Mode_Piece.hour = modes.Mode_Piece.hour;
      modes.temp_Mode_Piece.minute = modes.Mode_Piece.minute;
      modes.temp_Mode_Piece.second = modes.Mode_Piece.second;
    }
    else if(output.inputRes == 5)
    {
      modes.temp_Mode_SimpleNum.num = modes.Mode_SimpleNum.num;
    }
    console.log("Int op = " + modes.temp_Mode_SimpleNum.num);
    for(var i =1 ; i<6 ; i++)
    {
      enabled.able[i] = difinition.multiplyArray[output.inputRes][i];
    }
    output.preOp='*';
    output.preInputRes =output.inputRes;
  };



  output.division=function()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2) {

        output.inputRes=i;
        console.log(output.inputRes)
      }
    }
    if(output.inputRes == 1)
    {
      modes.temp_Mode_Piece.year = modes.Mode_Piece.year;
      modes.temp_Mode_Piece.month = modes.Mode_Piece.month;
      modes.temp_Mode_Piece.week = modes.Mode_Piece.week;
      modes.temp_Mode_Piece.day = modes.Mode_Piece.day;
      modes.temp_Mode_Piece.hour = modes.Mode_Piece.hour;
      modes.temp_Mode_Piece.minute = modes.Mode_Piece.minute;
      modes.temp_Mode_Piece.second = modes.Mode_Piece.second;
    }
    else if(output.inputRes == 5)
    {
      modes.temp_Mode_SimpleNum.num = modes.Mode_SimpleNum.num;
    }
    for(var i =1 ; i<6 ; i++)
    {
      enabled.able[i] = difinition.divisionArray[output.inputRes][i];
    }
    for(var i =1 ; i<6 ; i++)
    {
      console.log("Chaaaaaaaaap = " + i + " : " + difinition.divisionArray[output.inputRes][i])
    }
    output.preOp = '%';
    output.preInputRes =output.inputRes;

  };

  output.To=function()
  {
    for(var i=1;i<6;i++) {
      if (modes.input_res[i] == 2) {

        output.inputRes = i;
      }
    }

    for(var i =1 ; i<6 ; i++)
    {
      enabled.able[i] = difinition.ToArray[output.inputRes][i];
    }
    if(output.inputRes == 1)
    {
      modes.temp_Mode_Piece.year = modes.Mode_Piece.year;
      modes.temp_Mode_Piece.month = modes.Mode_Piece.month;
      modes.temp_Mode_Piece.week = modes.Mode_Piece.week;
      modes.temp_Mode_Piece.day = modes.Mode_Piece.day;
      modes.temp_Mode_Piece.hour = modes.Mode_Piece.hour;
      modes.temp_Mode_Piece.minute = modes.Mode_Piece.minute;
      modes.temp_Mode_Piece.second = modes.Mode_Piece.second;
    }
    else if(output.inputRes == 2)
    {
      modes.temp_Mode_Time.hour = modes.Mode_Time.hour;
      modes.temp_Mode_Time.minute = modes.Mode_Time.minute;
      modes.temp_Mode_Time.second = modes.Mode_Time.second;
    }
    else if(output.inputRes == 3)
    {
      modes.temp_Mode_Date.year = modes.Mode_Date.year;
      modes.temp_Mode_Date.month = modes.Mode_Date.month;
      modes.temp_Mode_Date.day = modes.Mode_Date.day;
    }
    else if(output.inputRes == 5)
    {
      modes.temp_Mode_SimpleNum = modes.Mode_SimpleNum;
    }
    console.log("Mode : "+modes.Mode_Time.hour + "H" + modes.Mode_Time.minute + "M" + modes.Mode_Time.second + "S");
    output.preOp = 'to';
    output.preInputRes = output.inputRes;

  };

  var m;


  // =========== Time Reform Without Day==============
  output.time_reform=function() {

    console.log("h1" + modes.Mode_Time.second);
    console.log("h2" + modes.Mode_Time.hour);
    console.log("h3" + modes.Mode_Time.minute);


    modes.Mode_Time.second1 = parseInt(modes.Mode_Time.second);
    modes.Mode_Time.hour1 = parseInt(modes.Mode_Time.hour);
    modes.Mode_Time.minute1 = parseInt(modes.Mode_Time.minute);


    console.log("honmmmmmmmm1" + modes.Mode_Time.second1);
    console.log("honmmmmmmmmm2" + modes.Mode_Time.hour1);
    console.log("honmmmmmmmmmm3" + modes.Mode_Time.minute1);


    if (modes.Mode_Time.second1 < 0) {
      m = modes.Mode_Time.second1;
      modes.Mode_Time.second1 = 60 + modes.Mode_Time.second1 % 60;
      modes.Mode_Time.minute1 += ( m - (m) % 60) / 60;
      if (m % 60 != 0) {
        modes.Mode_Time.minute1 -= 1;
      }
    }
    if (modes.Mode_Time.minute1 < 0) {
      m = modes.Mode_Time.minute1;
      modes.Mode_Time.minute1 = 60 + ((modes.Mode_Time.minute1) % 60);
      modes.Mode_Time.hour1 += ( m - (m) % 60) / 60;
      if (m % 60 != 0) {
        modes.Mode_Time.hour1 -= 1;
      }
    }
    if (modes.Mode_Time.hour1 < 0) {
      m = modes.Mode_Time.hour1;
      modes.Mode_Time.hour1 = 24 + modes.Mode_Time.hour1 % 24;
    }


    if (modes.Mode_Time.hour1 >= 0) {
      modes.Mode_Time.minute1 += ((modes.Mode_Time.hour1) % 1) * 60;
      modes.Mode_Time.hour1 -= ((modes.Mode_Time.hour1) % 1);
    }
    if (modes.Mode_Time.minute1 >= 0) {
      modes.Mode_Time.second1 += ((modes.Mode_Time.minute1) % 1) * 60;
      modes.Mode_Time.minute1 -= ((modes.Mode_Time.minute1) % 1);
    }
    if (modes.Mode_Time.second1 >= 0) {
      modes.Mode_Time.second1 -= ((modes.Mode_Time.second1) % 1);
    }

    if (modes.Mode_Time.second1 >= 0) {
      m = modes.Mode_Time.second1;
      modes.Mode_Time.second1 = m % 60;
      modes.Mode_Time.minute1 += ( m - modes.Mode_Time.second1) / 60;
    }
    else {
      m = modes.Mode_Time.second1;
      modes.Mode_Time.second1 = 60 + modes.Mode_Time.second1 % 60;
      modes.Mode_Time.minute1 += ( m - (m) % 60) / 60;
      if (m % 60 != 0) {
        modes.Mode_Time.minute1 -= 1;
      }
    }
    if (modes.Mode_Time.minute1 >= 0) {
      m = modes.Mode_Time.minute1;
      modes.Mode_Time.minute1 = m % 60;
      modes.Mode_Time.hour1 += ( m - modes.Mode_Time.minute1) / 60;
    }
    else {
      m = modes.Mode_Time.minute1;
      modes.Mode_Time.minute1 = 60 + ((modes.Mode_Time.minute1) % 60);
      modes.Mode_Time.hour1 += ( m - (m) % 60) / 60;
      if (m % 60 != 0) {
        modes.Mode_Time.hour1 -= 1;
      }
    }
    if (modes.Mode_Time.hour1 >= 0) {
      m = modes.Mode_Time.hour1;
      modes.Mode_Time.hour1 = m % 24;

    }

    else {
      m = modes.Mode_Time.hour1;
      modes.Mode_Time.hour1 = 24 + modes.Mode_Time.hour1 % 24;

    }
    modes.Mode_Time.hour = modes.Mode_Time.hour1
    modes.Mode_Time.minute = modes.Mode_Time.minute1
    modes.Mode_Time.second = modes.Mode_Time.second1
  }




    return output;
});
