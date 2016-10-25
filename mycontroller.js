var redisApp = angular.module("myApp",['ngCookies']);

redisApp.controller('myctrl', function ($scope, $http, $cookieStore) {

<<<<<<< HEAD
        
=======

>>>>>>> 0fff021cf0d723a7cbb70d61a1c758cce55c8380
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


<<<<<<< HEAD
           location.href = "login.html"; 
        }
        

=======
           location.href = "login.html";
        }


>>>>>>> 0fff021cf0d723a7cbb70d61a1c758cce55c8380
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

<<<<<<< HEAD
          }) 
=======
          })
>>>>>>> 0fff021cf0d723a7cbb70d61a1c758cce55c8380
          .error(function(){
               console.log("Please sign up");
          });
       }
<<<<<<< HEAD

       $scope.newuser= function(){
           location.href = "signup.html";
       } 

});



=======

       $scope.newuser= function(){
           location.href = "signup.html";
       }

});
>>>>>>> 0fff021cf0d723a7cbb70d61a1c758cce55c8380
