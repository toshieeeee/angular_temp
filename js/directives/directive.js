/*************************
▼ カスタムディレクティブの定義
**************************/

myApp.directive('navCommon',function(){

  return {
    restrict: 'AE',
    templateUrl: 'common/navcommon.html', 
    replace: true

  };

});


