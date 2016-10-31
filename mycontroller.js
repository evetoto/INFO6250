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
           
           var cookieUsername = $cookieStore.get("username");
           var cookiePassword = $cookieStore.get("password");
           if(cookieUsername != undefined && cookiePassword != undefined){
              if(confirm("Welcome back " + cookieUsername ) == true) {
                 location.href = "http://104.40.49.149/";
              }
           }

        $scope.signup = function(){
           angular.forEach($scope.info, function(value, key){
               $http.get("map.php?cmd=set&key=" + key+ "&value="+ value)
               .success(function(){
                  $scope.redisResponse = "Updated";
               });
           });



           location.href = "login.html";
        }


       $scope.goback = function(){
           location.href = "mainpage.html";
        }
       
       $scope.login = function(){
           $http.get("map.php?cmd=get&key=username")
           .success(function(data) {
               if(data.data == $scope.user.username){
                   $http.get("map.php?cmd=get&key=password")
                   .success(function(data2) {
                        if(data2.data == $scope.user.password){
                             $cookieStore.put("username", $scope.user.username);
                             $cookieStore.put("password", $scope.user.password);
                             location.href = "http://104.40.49.149/";
                        }
                        else{
                             alert("Your password is incorrect!");
                             $scope.user.password = "";
                        }
                   })
               }
               else{
                   alert("Your username is incorrect!")
                   $scope.user.username = "";
               }


          })

          .error(function(){
               console.log("Please sign up");
          });
       }


       $scope.newuser= function(){
           location.href = "signup.html";
       } 

});


