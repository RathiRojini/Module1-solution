(function () {
'use strict';

angular.module('LunchCheck',[])

.controller ('LunchCheckController' , LunchCheckController);
LunchCheckController.$inject= ['$scope'];

function LunchCheckController ($scope)
{
  $scope.name= "";
  $scope.message = "";
  $scope.itemcolor = "";

  $scope.countMyfooditems = function () {
    if ($scope.name == "") {
      $scope.message = "Please enter data first";
      $scope.itemcolor = "messagered";

      }
    else  {
    var foodmenu  = $scope.name.split(',');
    var totalFoodItems = 0;
    for( var i = 0 ; i < foodmenu.length ; i ++){
      var items = foodmenu[i];
      //to ignore the empty string
      if (items.trim().length != 0){
        totalFoodItems  = totalFoodItems + 1 ;
      }
    }
    if (totalFoodItems <= '3')   {
      $scope.message = "Enjoy !";
      $scope.itemcolor = "messagegreen";
    }

    else { $scope.message = "Too much!" ;
    $scope.itemcolor = "messagered";
 }
    }
  };
}
})()
