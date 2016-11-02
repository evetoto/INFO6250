var redisApp = angular.module("myApp",['ngCookies']);

redisApp.controller('myctrl', function ($scope, $filter, $http, $cookieStore) {

       $scope.visitor = function(){
           var minkey = $filter('date')(new Date(),'yyyy-MM-dd HH:mm');
           $http.get("app.php?cmd=incr&key="+minkey)
                .success(function(){
                      $http.get("app.php?cmd=get&key="+minkey)
                           .success(function (data) {
                                console.log(minkey+" current minute visitors : "+data.data);
                                $scope.timesPerMin=data.data;
                            });
                });
            var hourkey = $filter('date')(new Date(),'yyyy-MM-dd HH');
            $http.get("app.php?cmd=incr&key="+hourkey)
                .success(function(){
                      $http.get("app.php?cmd=get&key="+ hourkey)
                           .success(function (data) {
                                console.log(hourkey+" current hour visitors : "+data.data);
                                $scope.timesPerHour=data.data;
                            });
                });


             var daykey = $filter('date')(new Date(),'yyyy-MM-dd');
             $http.get("app.php?cmd=incr&key="+daykey)
                .success(function(){
                      $http.get("app.php?cmd=get&key="+daykey)
                           .success(function (data) {
                                console.log(daykey+" today visitors : "+data.data);
                                $scope.timesPerDay=data.data;
                            });
                });

             var monkey = $filter('date')(new Date(),'yyyy-MM');
             $http.get("app.php?cmd=incr&key="+monkey)
                .success(function(){
                      $http.get("app.php?cmd=get&key="+monkey)
                           .success(function (data) {
                                console.log(monkey+"  visitors : "+data.data);
                                $scope.timesPerMon=data.data;
                            });
                });

             var yearkey = $filter('date')(new Date(),'yyyy');
             $http.get("app.php?cmd=incr&key="+yearkey)
                .success(function(){
                      $http.get("app.php?cmd=get&key="+yearkey)
                           .success(function (data) {
                                console.log(yearkey+" visitors : "+data.data);
                                $scope.timesPerYear=data.data;
                            });
                });
    
         
       }

        $scope.get = function(){
           $http.get("app.php?cmd=get&key="+ $scope.time)
           .success(function(data){
                if((data.data) != ""){
                   // console.log("visitor "+ data.data);
                    $scope.result = data.data + "  visitors";
                }else{
                   // console.log("no visitor");
                    $scope.result = "No visitor at this time.";
                }
           });

        }

        $scope.checkcookies = function(){
       
           var Email = $cookieStore.get("email");
           var Password = $cookieStore.get("password");
           if(Email!=undefined && Password!=undefined){
                if(confirm("Welcome back! " + Email)==true){
                    location.href = "http://www.info6250.com/";
                }else{
                    location.href = "signup.html";
                }
           }else{
                location.href = "login.html";
           }
       }

        

       $scope.signup = function(){
           $http.get("app.php?cmd=set&key="+$scope.info.email+"&value="+$scope.info.password)
           .success(function () {
                $scope.redisResponse = "Updated";
                location.href = "login.html";
           });
       }     


       
       $scope.login = function(){
            $http.get("app.php?cmd=get&key="+$scope.user.email)
            .success(function (data) {
                if(data.data == ""){
                    console.log(data);
                    alert("New user? Please sign up first.");
                    $scope.user.email="";
                }else{
                    if(data.data==$scope.user.password){
                         $cookieStore.put("email", $scope.user.email);
                         $cookieStore.put("password", $scope.user.password);
                         location.href = "http://www.info6250.com";
                    }else{
                         alert("Your password is incorrect!");
                         $scope.user.password = "";
                    } 
                }               
            })
            .error(function () {
                console.log("error");
                
            });
    
       }

});

