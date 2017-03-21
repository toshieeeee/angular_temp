/*************************
▼ カスタムディレクティブの定義
**************************/

angularTempApp.directive('navCommon',function(){

  return {
    restrict: 'AE',
    templateUrl: 'common/navcommon.html', 
    replace: true

  };

});


