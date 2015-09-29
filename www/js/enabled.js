/**
 * Created by Hossein on 9/29/2015.
 */
var enabled= angular.module('enabled',['services']);
services.factory('enabled',function() {
  var factory = function () {
    var output = {};
    output.flags={
      time:0,
      date:0
    }
    output.timeEnabled=function($string,$s2)
    {
;
    };
    return output;
  }
  return factory;
});
