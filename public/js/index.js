
var app=angular.module('sample',['ngMaterial','ngRoute']);

app.controller('index',['$scope','employeeService','$mdSidenav',function(s,es,$mdSidenav){
    s.firstName='shashikant';
    s.lastName='Pandit';
    console.log('looking for employeeService');
    console.log(es)
    es.doSum();
     s.showMobileMainHeader = true;
    s.openSideNavPanel = function() {
        $mdSidenav('left').open();
    };
    s.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };

}]);
app.provider('employeeService',function(){
var baseUrl='';
var obj={}; 
this.config=function(ob){
baseUrl=ob.url;
obj=ob;
}
this.$get=function(){
    var calcservice={};
    calcservice.doSum=function()
    {
        console.log(baseUrl)
        console.log(obj); 
    }
    return calcservice;
}

})  
app.config(["employeeServiceProvider",function(employeeServiceProvider){
    employeeServiceProvider.config({name:'common',url:'http://localhost:1234/'});
}])
app.config(function($routeProvider){
    $routeProvider
    .when('/',{template:'welcome'})
    .when('/github',{templateUrl:'/github-home'})
    .when('/github/introduction',{template:'introduction to github.'})
}) 