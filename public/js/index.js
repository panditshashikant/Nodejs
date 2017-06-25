
var app=angular.module('sample',['ngMaterial','ngRoute']);

app.controller('index',['$scope','$mdSidenav',function(s,$mdSidenav){
   
    s.openSideNavPanel = function() {
        $mdSidenav('left').open();
    };
    s.closeSideNavPanel = function(topic) {
        $mdSidenav('left').close();
    };

}]);
