(function () {
'use strict';

angular.module('lunchMenu',[])

.controller ('countMyEatables' , function ($scope) {

$scope.name= "";
$scope.message = "";

$scope.countMyfooditems = function () {
  if ($scope.name == "")
  {
    $scope.message = "Please enter data first"
  }
  else
  {
  var foodmenu  = $scope.name.split(',');
  var totalFoodItems = 0;
  for( var i = 0 ; i < foodmenu.length ; i ++){
    var items = foodmenu[i];
    //to ignore the empty string
    if (items.trim().length != 0){
      totalFoodItems  = totalFoodItems + 1 ;
    }
  }

  if (totalFoodItems <= '3')
  {
    $scope.message = "Enjoy !"
  }
  else
  {
      $scope.message = "Too much!"
  }
  }
};

});


})()
