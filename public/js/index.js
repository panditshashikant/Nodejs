
var app=angular.module('sample',[]);

app.controller('index',['$scope','employeeService',function(s,es){
    s.firstName='shashikant';
    s.lastName='Pandit';
    console.log('looking for employeeService');
    console.log(es)
    es.doSum();

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